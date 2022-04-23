<template>
  <main class="w-full">
    <h2>App1Wrapper</h2>
    <input type="text" v-model="message">
    <application-1 message="Props"></application-1>
  </main>
</template>

<script>

export default {
  name: 'App1Wrapper',
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
