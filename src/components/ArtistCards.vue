<template>
  <div class="wrapper">
    <div class="cards">
      <ArtistCard
        :key="painting.id"
        v-for="painting in paintings"
        :painting="painting"
      />
    </div>
  </div>
</template>

<script>
import Macy from "macy";
import ArtistCard from "./ArtistCard.vue";

export default {
  name: "ArtistCards",
  components: {
    ArtistCard,
  },
  props: {
    paintings: Array,
  },
  data() {
    return {
      macy: null,
    };
  },
  mounted() {
    this.initMacy();
  },
  methods: {
    initMasonryGrid() {
      /**
       * Set appropriate spanning to any masonry item
       *
       * Get different properties we already set for the masonry, calculate
       * height or spanning for any cell of the masonry grid based on its
       * content-wrapper's height, the (row) gap of the grid, and the size
       * of the implicit row tracks.
       *
       * @param item Object A brick/tile/cell inside the masonry
       */
      function resizeMasonryItem(item) {
        /* Get the grid object, its row-gap, and the size of its implicit rows */
        var grid = document.getElementsByClassName("cards")[0],
          rowGap = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
          ),
          rowHeight = parseInt(
            window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
          );

        /*
         * Spanning for any brick = S
         * Grid's row-gap = G
         * Size of grid's implicitly create row-track = R
         * Height of item content = H
         * Net height of the item = H1 = H + G
         * Net height of the implicit row-track = T = G + R
         * S = H1 / T
         */
        var rowSpan = Math.ceil(
          (item.querySelector(".card img").getBoundingClientRect().height +
            rowGap) /
            (rowHeight + rowGap)
        );

        /* Set the spanning as calculated above (S) */
        item.style.gridRowEnd = "span " + rowSpan;

        /* Make the images take all the available space in the cell/item */
        item.querySelector(".card img").style.height = rowSpan * 30 + "px";
      }

      /**
       * Apply spanning to all the masonry items
       *
       * Loop through all the items and apply the spanning to them using
       * `resizeMasonryItem()` function.
       *
       * @uses resizeMasonryItem
       */
      function resizeAllMasonryItems() {
        // Get all item class objects in one list
        var allItems = document.getElementsByClassName("card");

        /*
         * Loop through the above list and execute the spanning function to
         * each list-item (i.e. each masonry item)
         */
        for (var i = 0; i > allItems.length; i++) {
          resizeMasonryItem(allItems[i]);
        }
      }

      /**
       * Resize the items when all the images inside the masonry grid
       * finish loading. This will ensure that all the content inside our
       * masonry items is visible.
       *
       * @uses ImagesLoaded
       * @uses resizeMasonryItem
       */
      function waitForImages() {
        var allItems = document.getElementsByClassName("card");
        for (var i = 0; i < allItems.length; i++) {
          imagesLoaded(allItems[i], function (instance) {
            var item = instance.elements[0];
            resizeMasonryItem(item);
          });
        }
      }

      /* Resize all the grid items on the load and resize events */
      var masonryEvents = ["load", "resize"];
      masonryEvents.forEach(function (event) {
        window.addEventListener(event, resizeAllMasonryItems);
      });

      /* Do a resize once more when all the images finish loading */
      waitForImages();
    },
    initMacy() {
      this.macy = Macy({
        container: ".cards",
        trueOrder: false,
        waitForImages: false,
        mobileFirst: true,
        columns: 1,
        margin: {
          y: 30,
          x: 30,
        },
        breakAt: {
          1200: 4,
          940: 3,
          600: 2,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@function rem($pixels, $context: 16) {
  @return (math.div($pixels, $context)) * 1rem;
}
// @media (min-width: rem(768)) {
//   .cards {
//     column-count: 2;
//     column-gap: rem(30);
//   }
//   .card {
//     break-inside: avoid;
//   }
// }
// @media (min-width: rem(1024)) {
//   .cards {
//     column-count: 3;
//   }
// }
// @media (min-width: rem(1440)) {
//   .cards {
//     column-count: 4;
//   }
// }
// .cards {
//   display: grid;
//   row-gap: 30px;
//   grid-auto-rows: 0;
//   align-items: start;

//   @media (min-width: rem(768)) {
//     grid-template-columns: repeat(2, 1fr);
//     column-gap: 30px;
//   }

//   @media (min-width: rem(1024)) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (min-width: rem(1200)) {
//     grid-template-columns: repeat(4, 1fr);
//   }
// }
</style>
