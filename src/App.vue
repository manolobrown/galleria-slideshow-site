<template>
  <BaseHeader />
  <router-view :key="$route.fullPath"></router-view>
</template>
<script>
//TODO Components Needed
//header - has logo and button
//button - start slideshow | stop slideshow | go to source | view image | close
//card - main page | detail page
//card thumb - detail
//title - titles + author
//progress bar - detail page
//slider controls - prev | next
//modal

//TODO Routes Needed
//Detail Page

import BaseHeader from "./components/BaseHeader.vue";

export default {
  name: "App",
  components: {
    BaseHeader,
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
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
</style>
