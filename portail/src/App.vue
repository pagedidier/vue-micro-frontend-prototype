<template>
  <div id="app">
    <ul>
      <a href="/">Home</a>
    </ul>
    <router-link to="mer">Mer</router-link>
    <router-link to="per">Per</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
