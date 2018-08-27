<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img :src="image.link" alt="Image" v-for="image in allImages" class="iList_image"/>
    </div>
    <h2 v-else>You need to login</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "ImageList",
  methods: {
    ...mapActions([
      'fetchImages'
    ])
  },
  created() {
    this.fetchImages();
  },

  computed: {
    ...mapGetters([
      'allImages',
      'isLoggedIn'
    ]),
  }
}
</script>

<style scoped>
/*.iList_image {*/
  /*width: 300px;*/
  /*height: 200px;*/
  /*background-size: cover;*/
/*}*/

.image-container {
  /*column-count: 4;*/
  /*column-gap: 0;*/
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

img {
  max-width: 100%;
  padding: 5px;
}

</style>
