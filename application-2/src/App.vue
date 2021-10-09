<template>
  <div class="w-full min-h-screen flex flex-col bg-base">
    <nav class="w-full flex justify-around py-5">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <h1 class="w-full text-6xl text-center mb-5">Application 2</h1>
    <router-view/>
  </div>
</template>

<script>
import router from './router';

export default {
  name: 'application-2',
  router,
  mounted() {
    router.push('/');
  },
};
</script>

<style src='./assets/app.css'>

</style>
