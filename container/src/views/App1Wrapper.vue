<template>
  <main class="w-full">
    <h2>App1Wrapper</h2>
    <input type="text" v-model="message">
    <application-1></application-1>
  </main>
</template>

<script>
import Application1 from '@dpage/application-1';

export default {
  name: 'App1Wrapper',
  components: { Application1 },
  data() {
    return {
      message: '',
    };
  },
  created() {
    localStorage.setItem('test', 'patate2');
  },
};
</script>

<style scoped>

</style>
