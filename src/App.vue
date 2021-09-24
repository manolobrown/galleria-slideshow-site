<template>
  <BaseHeader
    @reset-start-show="reset"
    @start-slide-show="toggleSlideShow"
    :startShow="startShow"
  />
  <router-view :startShow="startShow"></router-view>
</template>
<script>
import BaseHeader from "./components/BaseHeader.vue";

export default {
  name: "App",
  components: {
    BaseHeader,
  },
  data() {
    return {
      startShow: false,
    };
  },
  methods: {
    toggleSlideShow() {
      this.startShow = !this.startShow;

      if (this.$route.path === "/") {
        this.$router.push({ name: "ArtistDetails", params: { id: 1 } });
      }
    },
    reset() {
      this.startShow = false;
    },
  },
};
</script>

<style lang="scss">
@use "sass:math";
@function rem($pixels, $context: 16) {
  @return (math.div($pixels, $context)) * 1rem;
}

:root {
  --black: hsl(0, 0%, 0%);
  --darkGray: hsl(0, 0%, 3%);
  --lightGray: hsl(0, 0%, 90%);
  --gray: hsl(0, 0%, 95%);
  --white: hsl(0, 0%, 100%);

  --baskerville: "Libre Baskerville", serif;
  font-display: swap;
}

.overflow-hidden {
  overflow: hidden;
}

html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--baskerville);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}

a,
a:visited,
a:active {
  text-decoration: none;
}

.main,
.hero {
  margin: 0 auto;
  padding: 0 rem(24);
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
.wrapper,
header,
.pagination {
  max-width: rem(1360);
  margin-left: auto;
  margin-right: auto;
}
.btn,
.controls > div,
button {
  cursor: pointer;
  transition: all 0.2s ease;
}
@media (min-width: rem(768)) {
  .main,
  .hero {
    padding: 0 rem(40);
  }
}
@media (min-width: rem(1440)) {
  .main,
  .hero {
    margin: 0;
    padding: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
