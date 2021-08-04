<template>
    

<div v-if="painting">
  <!-- hero -->
      <div class="hero">
  <!-- hero image -->
          <picture>
            <source :srcset="painting.images.hero.large"
                media="(min-width: 768px)">
            <img :src="painting.images.hero.small" alt="">
          </picture>
  <!-- hero header group -->
          <div class="heading-group">
            <h2>{{painting.name}}</h2>
            <h3>{{painting.artist.name}}</h3>
          </div>
  <!-- hero artist image -->
        <img :src="painting.artist.image" alt="">
   <!-- hero button -->
        <BaseButton class="btn btn--hero" txt="View Image" />
  
      </div>
  
      <!-- body -->
        <main class="main">
          <!-- body year -->
          <h2 class="year">{{painting.year}}</h2>
          <!-- body copy -->
          <p>{{painting.description}}</p>
          <!-- body link -->
          <a :href="painting.source" target="_blank">
            <BaseButton class="btn btn--link" txt="Go To Source" />
          </a>
        </main>
  
  
      <!-- progress bar -->
      <div class="progress"></div>
      <!-- pagination -->
      <div class="pagination">
          <!-- pagination header group -->
          <div class="heading-group">
            <h2>{{painting.name}}</h2>
            <h3>{{painting.artist.name}}</h3>
          </div>
          <!-- pagination controls -->
          <div class="controls">
            <div class="prev">
              <img src="../assets/shared/icon-back-button.svg" alt="">
            </div>
            <div class="next">
              <img src="../assets/shared/icon-next-button.svg" alt="">
            </div>
          </div>
      </div>
</div>


</template>

<script>

import BaseButton from '../components/BaseButton.vue'

export default {
    name: 'ArtistDetails',
    components: {
      BaseButton
    },
    props: ['id'],
    data() {
        return {
            painting: null
        }
    },
    methods: {
      async fetchArtist() {
        const res = await fetch(`http://localhost:5000/paintings/${this.id}`)

        const data = await res.json()

        return data
      }
    },
    async created() {
      this.painting = await this.fetchArtist()
    }
}
</script>

<style lang="scss">
</style>