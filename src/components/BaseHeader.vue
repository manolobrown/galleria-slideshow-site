<template>
  <header>
    <router-link :to="`/`">
      <img alt="Vue logo" src="../assets/shared/logo.svg" />
    </router-link>
    <BaseButton txt="Start Slideshow" />
  </header>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'BaseHeader',
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>

</style>
