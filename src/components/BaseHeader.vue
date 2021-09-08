<template>
  <header>
    <router-link :to="`/`">
      <img alt="Vue logo" src="../assets/shared/logo.svg" />
    </router-link>
    <BaseButton :txt="button" @click="startSlideShow()" />
  </header>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "BaseHeader",
  components: {
    BaseButton,
  },
  data() {
    return {
      button: "Start Slideshow",
    };
  },
  methods: {
    startSlideShow() {
      this.$router.push({ name: "ArtistDetails", params: { id: 1 } });
      this.button =
        this.button === "Start Slideshow"
          ? "Stop Slideshow"
          : "Start Slideshow";
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@function rem($pixels, $context: 16) {
  @return (math.div($pixels, $context)) * 1rem;
}

header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: rem(24);
  position: relative;
  margin-bottom: rem(24);

  &:after {
    content: "";
    display: flex;
    height: 1px;
    background-color: #e5e5e5;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
@media (min-width: rem(768)) {
  header {
    padding: rem(24) rem(40);
  }
}
@media (min-width: rem(1440)) {
  header {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
