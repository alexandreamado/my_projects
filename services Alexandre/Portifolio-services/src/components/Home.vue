<template>
  <div class="flex">
    <div class="w-[280px]">
      <Sidebar />
    </div>
    <div class="flex-grow">
      <Sobreme />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./pages/Sidebar.vue";
import Sobreme from "./Sobreme.vue";
</script>
