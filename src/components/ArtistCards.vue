<template>
  <div class="wrapper">
    <masonry
      :cols="{ default: 4, 1000: 3, 991: 2, 600: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
    >
      <ArtistCard
        :key="painting.id"
        v-for="painting in paintings"
        :painting="painting"
      />
    </masonry>
  </div>
</template>

<script>
import ArtistCard from "./ArtistCard.vue";

export default {
  name: "ArtistCards",
  components: {
    ArtistCard,
  },
  props: {
    paintings: Array,
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@function rem($pixels, $context: 16) {
  @return (math.div($pixels, $context)) * 1rem;
}
.cards {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: rem(16);
  row-gap: rem(16);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr auto;
    break-inside: avoid;
  }
}
</style>
