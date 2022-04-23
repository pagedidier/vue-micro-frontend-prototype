<template>
  <div class="w-full min-h-screen flex flex-col bg-base">
    <nav class="w-full flex justify-around py-5">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <h1 class="w-full text-6xl text-center mb-5">Application 1</h1>
    {{ message }}
    {{ test }}
    <router-view/>
  </div>
</template>

<script>
import router from './router';

export default {
  name: 'application-1',
  router,
  props: {
    message: {},
  },
  data() {
    return {
      test: '',
    };
  },
  created() {
    this.test = localStorage.getItem('test');
  },
  mounted() {
    router.push('/').catch(() => {});
  },
};
</script>

<style src='./assets/app.css'>

</style>
