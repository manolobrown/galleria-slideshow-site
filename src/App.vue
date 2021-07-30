<template>
  <BaseHeader />
  <ArtistCards :paintings="paintings" />
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


import BaseHeader from './components/BaseHeader.vue'
import json from './assets/shared/data.json'
import ArtistCards from './components/ArtistCards.vue'

export default {
  name:'App',
  components: {
    BaseHeader,
    ArtistCards
  },
  data() {
    return {
      paintings: [],
    }
  },
  created() {
    this.paintings = json
  }
}


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
