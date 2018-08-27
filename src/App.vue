<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'app',
  components: {
    AppHeader
  },
  data() {
    return {
      name: 'JS'
    };
  }
};
</script>

<style>
</style>

