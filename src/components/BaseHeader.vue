<template>
  <header>
    <router-link :to="`/`" @click="$emit('reset-start-show')">
      <img alt="Vue logo" src="../assets/shared/logo.svg" />
    </router-link>
    <BaseButton
      @btn-click="$emit('start-slide-show')"
      :txt="startShow ? 'Stop Slideshow' : 'Start Slideshow'"
    />
  </header>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "BaseHeader",
  components: {
    BaseButton,
  },
  props: {
    startShow: Boolean,
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

  button {
    font-size: rem(9);
  }
  > a {
    max-width: rem(117);
  }
}
@media (min-width: rem(768)) {
  header {
    padding: rem(24) rem(40);
    margin-block-end: rem(40);
    button {
      font-size: rem(12);
    }
  }
}
@media (min-width: rem(1440)) {
  header {
    padding-left: 0;
    padding-right: 0;
    > a {
      max-width: rem(170);
    }
  }
}
</style>
