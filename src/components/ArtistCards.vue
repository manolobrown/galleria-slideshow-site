<template>
    <div :key="painting.id" v-for="painting in paintings">
        <ArtistCard 
        @artist-view="$emit('artist-view', painting.id)"
        :painting="painting" />
    </div>
</template>

<script>
import ArtistCard from './ArtistCard.vue'
export default {
    name: 'ArtistCards',
    components: {
        ArtistCard
    },
    props: {
        paintings: Array
    },
    emits: ['artist-view'],
}
</script>

<style lang="scss" scoped>
</style>