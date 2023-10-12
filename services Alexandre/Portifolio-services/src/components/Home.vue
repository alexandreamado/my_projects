<template>
  <div class="flex">
    <div class="w-[300px]">
      <Sidebar />
    </div>
    <div class="flex-grow">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./pages/Sidebar.vue";
</script>
