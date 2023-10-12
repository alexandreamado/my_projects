<template>
  <div class="flex">
    <div class="w-[280px]">
      <Sidebar />
    </div>
    <div class="flex-grow">
      <!-- <Sobreme /> -->
      <Portfolio/>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./pages/Sidebar.vue";
import Sobreme from "./Sobreme.vue";
import Portfolio from "./pages/Portfolio.vue";
</script>
