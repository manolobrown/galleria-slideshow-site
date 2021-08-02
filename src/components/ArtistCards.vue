<template>
    <div :key="painting.id" v-for="painting in paintings">
        <ArtistCard :painting="painting" />
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
    }
}
</script>

<style lang="scss" scoped>
</style>