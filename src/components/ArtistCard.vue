<template>
  <div class="card" @click="$emit('artist-view', painting.id)">
    
      <router-link to="/artist">
        <picture>
          <source :srcset="`${painting.images.gallery}`"
              media="(min-width: 768px)">
          <img :src="`${painting.images.thumbnail}`" alt="">
        </picture>
      </router-link>
     
      <h2>{{painting.name}}</h2>
      <h3>{{painting.artist.name}}</h3>
  </div>
</template>

<script>
export default {
    name:'ArtistCard',
    props: {
      painting: Object
    }
}
</script>

<style lang="scss" scoped>

</style>