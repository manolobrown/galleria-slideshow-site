<template>
  <main class="main">
    <ArtistCards :paintings="paintings" />
  </main> 
</template>

<script>
import ArtistCards from '../components/ArtistCards.vue'

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
      async fetchArtists() {
        const res = await fetch('http://localhost:5000/paintings')

        const data = await res.json()

        return data
      }
    },
    async created() {
      this.paintings = await this.fetchArtists()
    }
}
</script>