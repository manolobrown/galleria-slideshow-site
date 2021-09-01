<template>
  <div class="card">
    <router-link :to="{ name: 'ArtistDetails', params: { id: painting.id } }">
      <picture>
        <source
          :srcset="painting.images.thumbnail"
          media="(min-width: 768px)"
        />
        <img :src="painting.images.thumbnail" alt="" />
      </picture>

      <div class="heading-group">
        <h2>{{ painting.name }}</h2>
        <h3>{{ painting.artist.name }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ArtistCard",
  props: {
    painting: Object,
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@function rem($pixels, $context: 16) {
  @return (math.div($pixels, $context)) * 1rem;
}
.card {
  position: relative;
  margin-bottom: rem(24);
  cursor: pointer;
  img {
    display: block;
    margin: 0 auto;
    object-fit: cover;
    width: 100%;
  }
}
.heading-group {
  position: absolute;
  bottom: 0;
  padding: rem(34);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.01) 5%,
    rgba(0, 0, 0, 0.84) 100%
  );
  width: 100%;

  h2 {
    color: #fff;
    font-size: rem(24);
    font-weight: 700;
    margin-bottom: rem(16);
  }
  h3 {
    color: #fff;
    font-size: rem(13);
    font-weight: 400;
    margin-bottom: 0;
  }
}
</style>
