<template>
  <div class="flex flex-col justify-center">
    <div class="flex items-center gap-2 justify-center mt-6">
      <i class="fa fa-sun text-white"></i>
      <h1 class="text-white font-bold">Dark Mode</h1>
    </div>
    <div class="flex items-center gap-2 justify-center mt-6">
      <button
        @click="toggleDark()"
        class="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-black"
      >
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
