<template>
  <div
    class="relative shrink-0 flex justify-between h-16 bg-black dark:bg-dark-header dark:border-b dark:border-gray-700">
    <div class="flex items-center space-x-4">
      <div class="flex items-center"> 
        <div class="relative left-5 flex items-center">
          <input placeholder="Search" type="text" class="dark:placeholder:text-white px-3 py-2 max-w-full  focus:outline-none border-none rounded w-full dark:placeholder-gray-400 h-10 border-0 bg-white dark:bg-dark-header">
          <i class="fa-solid fa-magnifying-glass text-black absolute right-2 text-lg dark:text-gray-400"></i>
        </div>
      </div>
      <i
        class="fas fa-bars lg:hidden text-gray-500 dark:text-gray-300"
        @click="setSidebar('mobile')"
      ></i>
    </div>

    <div class="flex justify-between items-center space-x-4 px-10">
      <i
        class="fas fa-sun text-white cursor-pointer"
        v-if="display == 'dark'"
        @click="setDisplay('light')"
      ></i>
      <i
        class="fas fa-moon text-white cursor-pointer"
        v-if="display == 'light'"
        @click="setDisplay('dark')"
      ></i>
      <hr class="text-white" />
      <div class="flex items-center">
        <ProfileDropdown />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const display = computed(() => store.getters.getDisplay);

const setDisplay = (display) => {
  store.dispatch("setDisplay", display);
};

const setSidebar = (sidebar) => {
  store.dispatch("setSidebar", sidebar);
};
</script>
