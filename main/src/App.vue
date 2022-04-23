<template>
  <div class="w-full min-h-screen flex flex-col bg-base">
    <nav class="w-full flex justify-around py-5">
      <router-link to="/app1">App1</router-link> |
      <router-link to="/app2">App2</router-link>
    </nav>
    <h1 class="w-full text-6xl text-center mb-5">Container</h1>
    <router-view/>
  </div>
</template>

<style>

</style>
