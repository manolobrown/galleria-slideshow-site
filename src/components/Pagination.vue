<template>
  <!-- pagination controls -->
  <div class="controls">
    <div class="prev disabled">
      <router-link
        :to="{ name: 'ArtistDetails', params: { id: painting.id - 1 } }"
      >
        <img src="../assets/shared/icon-back-button.svg" alt="" />
      </router-link>
    </div>
    <div class="next">
      <router-link
        :to="{ name: 'ArtistDetails', params: { id: painting.id + 1 } }"
      >
        <img src="../assets/shared/icon-next-button.svg" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
  },
};
</script>
