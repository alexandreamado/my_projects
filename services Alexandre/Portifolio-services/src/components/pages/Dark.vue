<template>
  <div class="flex items-center justify-center gap-4 mr-14">
    <div class="flex items-center gap-2 mt-6">
      <h1 class="text-white font-bold">Dark Mode</h1>
    </div>
    <div class="mt-6">
      <button
        @click="toggleDark()"
        class="w-[60px] bg-black text-white rounded-md dark:bg-white dark:text-black"
      >
        <span
          :class="[
            isDark
              ? 'fa fa-sun text-xl text-center'
              : 'fa fa-moon text-xl text-center',
          ]"
        ></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
