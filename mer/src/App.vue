<template>
  <div id="app">
    MER
    <router-link :to="{ path: '/a'}">a</router-link>
    <router-link to="b">b</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import router from './router/router'

export default {
  name: 'app',
  router,
  mounted() {
    router.push('/a');
  }
};
</script>

<style></style>
