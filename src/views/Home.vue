<template>
    <ArtistCards 
  @artist-view="artistView"
  :paintings="paintings" />
</template>

<script>
import ArtistCards from '../components/ArtistCards.vue'
import json from '../assets/shared/data.json'
export default {
    name:'Home',
    components: {
        ArtistCards
    },
    data() {
    return {
      paintings: [],
    }
  },
  methods: {
    artistView(id) {
      console.log(id)
    }
  },
  created() {
    this.paintings = json
  }
}
</script>