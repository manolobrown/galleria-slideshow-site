<template>
  <div
    v-for="painting in displayedPaintings"
    :key="painting.id"
    :paintings="paintings"
  >
    <div class="wrapper">
      <!-- hero -->
      <div class="hero">
        <!-- hero image -->
        <picture>
          <source
            :srcset="painting.images.hero.large"
            media="(min-width: 768px)"
          />
          <img :src="painting.images.hero.small" alt="" />
        </picture>
        <!-- hero header group -->
        <div class="heading-group">
          <h2>{{ painting.name }}</h2>
          <h3>{{ painting.artist.name }}</h3>

          <!-- hero artist image -->
          <div class="artist-image">
            <img :src="painting.artist.image" alt="" />
          </div>
        </div>
        <!-- hero button -->
        <BaseButton
          @click="$refs.modalName.openModal()"
          class="btn btn--hero"
          txt="View Image"
        />
      </div>

      <!-- body -->
      <main class="main">
        <!-- body year -->
        <h2 class="year">{{ painting.year }}</h2>
        <!-- body copy -->
        <p>{{ painting.description }}</p>
        <!-- body link -->
        <a class="btn btn--link" :href="painting.source" target="_blank">
          Go To Source
        </a>
      </main>
    </div>
    <footer class="footer" v-if="painting">
      <!-- progress bar -->
      <div class="progress"></div>
      <!-- pagination -->
      <div class="pagination">
        <!-- pagination header group -->
        <div class="heading-group">
          <h2>{{ painting.name }}</h2>
          <h3>{{ painting.artist.name }}</h3>
        </div>
        <!-- pagination controls -->
        <div class="controls">
          <div class="prev disabled">
            <img src="../assets/shared/icon-back-button.svg" alt="" />
          </div>
          <div class="next">
            <img src="../assets/shared/icon-next-button.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>

    <modal ref="modalName">
      <template v-slot:body>
        <img :src="painting.images.gallery" alt="" />
      </template>
    </modal>
  </div>
  <button type="button" class="page-link" v-if="page != 1" @click="page--">
    Previous
  </button>
  <button
    type="button"
    @click="page++"
    v-if="page < pages.length"
    class="page-link"
  >
    Next
  </button>
  {{ $route.params.id }}
</template>

<script>
import data from "../assets/shared/data.json";
import BaseButton from "../components/BaseButton.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "ArtistDetailsList",
  components: {
    BaseButton,
    Modal,
  },
  data() {
    return {
      paintings: [],
      page: this.$route.params.id,
      perPage: 1,
      pages: [],
    };
  },
  methods: {
    getPaintings() {
      this.paintings = data.paintings;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.paintings.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(paintings) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return paintings.slice(from, to);
    },
  },
  computed: {
    displayedPaintings() {
      return this.paginate(this.paintings);
    },
  },
  watch: {
    paintings() {
      this.setPages();
    },
  },
  created() {
    this.getPaintings();
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@function rem($pixels, $context: 16) {
  @return (math.div($pixels, $context)) * 1rem;
}

.wrapper {
  min-height: 75vh;
}

.hero {
  position: relative;
}

.hero .heading-group {
  background-color: #fff;
  padding: rem(28);
  max-width: rem(280);
  margin-top: rem(-50);
  position: relative;

  h2 {
    font-size: rem(24);
  }
  h3 {
    font-size: rem(15);
    color: #7d7d7d;
    font-weight: 400;
  }
}

.btn--hero {
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  line-height: 1.1;
  padding: rem(14.5);
  letter-spacing: rem(2);
  font-size: rem(10);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: rem(152);
  cursor: pointer;
  position: absolute;
  top: rem(20);
  left: rem(40);

  &:before {
    content: "";
    display: inline-block;
    height: rem(12);
    width: rem(12);
    background-image: url("../assets/shared/icon-view-image.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
}

.artist-image {
  position: relative;
  z-index: 2;
  margin-left: rem(-15);
  margin-block-end: rem(-50);
  top: rem(10);
}
.artist-image img {
  max-width: rem(64);
}
.year {
  font-size: rem(100);
  text-align: right;
  font-weight: 700;
  color: #f3f3f3;
  margin-block-end: rem(-35);
}
p {
  margin: 0;
  font-size: rem(14);
  line-height: rem(28);
  color: #7d7d7d;
}

.btn--link {
  display: inline-block;
  padding: rem(8);
  position: relative;
  left: rem(-8);
  margin-block: rem(65);
  font-size: rem(9);
  text-transform: uppercase;
  text-decoration: underline;
  color: #7d7d7d;
  letter-spacing: rem(2);

  &:hover {
    color: #000;
  }
}

.progress {
  background-color: #e5e5e5;
  height: rem(1);
  flex: 0 0 100%;
  margin-block-end: rem(10);
}

.pagination {
  padding: rem(20) rem(20);
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .heading-group {
    h2 {
      font-size: rem(14);
      margin-block-end: rem(10);
    }
    h3 {
      font-size: rem(10);
      opacity: 0.75;
      margin: 0;
      font-weight: 400;
    }
  }
}

.controls {
  display: flex;

  img {
    max-width: rem(16.78);
  }
  .next {
    margin-left: rem(20);
  }
  .disabled,
  > div:hover {
    opacity: 0.15;
  }
}

@media (min-width: rem(768)) {
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .hero {
    flex: 0 0 100%;
    max-width: rem(768);
  }
  .main {
    flex: 0 0 100%;
    max-width: rem(552);
  }
  .hero {
    display: flex;
    margin-block-end: rem(55);
  }
  .hero .heading-group {
    flex: 0 0 100%;
    width: 100%;
    max-width: rem(445);
    margin-top: 0;
    position: absolute;
    right: rem(40);
    top: 0;
    padding: rem(10) rem(55) rem(55);

    h2 {
      font-size: rem(56);
      width: 7ch;
      margin-block-end: rem(40);
    }
    h3 {
      margin-block-end: rem(0);
    }
  }
  picture {
    flex: 0 0 100%;
    max-width: rem(475);
  }
  .artist-image {
    position: absolute;
    top: 100%;
    right: rem(55);
  }
  .artist-image img {
    max-width: 100%;
  }
  .year {
    text-align: left;
    font-size: rem(200);
    line-height: rem(150);
    margin-block-end: rem(-75);
  }
  p,
  .btn--link {
    max-width: rem(472);
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .btn--link {
    margin-block: rem(50);
  }
  .btn--hero {
    top: auto;
    bottom: rem(16);
  }
  .pagination {
    padding: rem(20) rem(40);

    .heading-group {
      h2 {
        font-size: rem(18);
      }
      h3 {
        font-size: rem(13);
      }
    }
  }
  .controls {
    img {
      max-width: rem(25.17);
    }
    .next {
      margin-left: rem(40);
    }
  }
}
@media (min-width: rem(1440)) {
  .main {
    max-width: rem(476);
  }
  .hero .heading-group {
    right: rem(-95);
    h2 {
      width: 9ch;
    }
  }
  .artist-image {
    top: rem(496);
    right: rem(230);
  }
  .year {
    margin-block-end: rem(-40);
  }
  p,
  .btn--link {
    max-width: rem(350);
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
