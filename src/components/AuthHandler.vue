<template>
  <div>
    AuthHandler Please Wait...
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AuthHandler",
  data() {
    return {
      key: 'JS'
    }
  },

  methods: {
    ...mapActions([
      'finalizeLogin'
    ]),
  },

  created() {
    this.finalizeLogin(window.location.hash);
    console.log('AuthHandler create hook', this);
  },
}
</script>

<style scoped>

</style>
