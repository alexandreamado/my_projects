<template>
  <div class="flex flex-row">
    <div class="basis-[300px]">
      <Sidebar />
    </div>
    <div class="basis-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./pages/Sidebar.vue";
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
}
</style>
