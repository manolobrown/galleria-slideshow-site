<template>
  <main class="main">
    <ArtistCards :paintings="paintings" />
  </main>
</template>

<script>
import ArtistCards from "../components/ArtistCards.vue";
import data from "../assets/shared/data.json";

export default {
  name: "Home",
  components: {
    ArtistCards,
  },
  props: {
    startShow: Boolean,
  },
  data() {
    return {
      paintings: data.paintings,
    };
  },
};
</script>
