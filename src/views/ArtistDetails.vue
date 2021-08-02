<template>
    <div v-if="painting">
        {{painting.name}}
    </div>
</template>

<script>
export default {
    name: 'ArtistDetails',
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