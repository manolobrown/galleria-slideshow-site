<template>
    

<div v-if="painting">
  <!-- hero -->
      <div class="hero">
  <!-- hero image -->
          <picture>
            <source :srcset="painting.images.hero.large"
                media="(min-width: 768px)">
            <img :src="painting.images.hero.small" alt="">
          </picture>
  <!-- hero header group -->
          <div class="heading-group">
            <h2>{{painting.name}}</h2>
            <h3>{{painting.artist.name}}</h3>
          </div>
        <!-- hero artist image -->
        <div class="artist-image"><img :src="painting.artist.image" alt=""></div>
   <!-- hero button -->
        <BaseButton class="btn btn--hero" txt="View Image" />
  
      </div>
  
      <!-- body -->
        <main class="main">
          <!-- body year -->
          <h2 class="year">{{painting.year}}</h2>
          <!-- body copy -->
          <p>{{painting.description}}</p>
          <!-- body link -->
          <a class="btn btn--link" :href="painting.source" target="_blank">
            Go To Source
          </a>
        </main>
  
  
      <!-- progress bar -->
      <div class="progress"></div>
      <!-- pagination -->
      <div class="pagination">
          <!-- pagination header group -->
          <div class="heading-group">
            <h2>{{painting.name}}</h2>
            <h3>{{painting.artist.name}}</h3>
          </div>
          <!-- pagination controls -->
          <div class="controls">
            <div class="prev disabled">
              <img src="../assets/shared/icon-back-button.svg" alt="">
            </div>
            <div class="next">
              <img src="../assets/shared/icon-next-button.svg" alt="">
            </div>
          </div>
      </div>
</div>


</template>

<script>

import BaseButton from '../components/BaseButton.vue'

export default {
    name: 'ArtistDetails',
    components: {
      BaseButton
    },
    props: ['id'],
    data() {
        return {
            painting: null
        }
    },
    methods: {
      async fetchArtist() {
        const res = await fetch(`http://localhost:5000/paintings/${this.id}`)

        const data = await res.json()

        return data
      }
    },
    async created() {
      this.painting = await this.fetchArtist()
    }
}
</script>

<style lang="scss" scope>
@use "sass:math";
  @function rem($pixels, $context: 16) {
    @return (math.div($pixels, $context)) * 1rem;
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
      color: #7D7D7D;
    }
  }

  .btn--hero {
    background-color: rgba(0,0,0,0.75);
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
    position:absolute;
    top: rem(20);
    left: rem(40);

    &:before {
      content:'';
      display: inline-block;
      height: rem(12);
      width: rem(12);
      background-image: url('../assets/shared/icon-view-image.svg');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .artist-image {
    position: relative;
    z-index: 2;
    padding-left: 20px;
    margin-top: -20px;
  }
  .artist-image img {
    max-width: rem(64);
  }
  .year {
    font-size: rem(100);
    text-align: right;
    font-weight: 700;
    color: #f3f3f3;
    margin-block-end: rem(-35) ;
  }
  p {
    margin:0;
    font-size: rem(14);
    line-height: rem(28);
    color: #7D7D7D;
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
    color: #7D7D7D;
    letter-spacing: rem(2);

    &:hover {
      text-decoration: none;
    }
  }

  .progress {
    background-color: #E5E5E5;
    height: rem(1);
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
        opacity: .75;
        margin: 0;
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
    .disabled, >div:hover {
      opacity: .15;
    }
  }
</style>