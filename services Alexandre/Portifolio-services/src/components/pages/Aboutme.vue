<template>
  <div class="mt-16 flex flex-col gap-4 px-4 ml-8 border-l-[1px] border-white">
    <button
      @click="activateMenuItem(0)"
      :class="{ active: activeItem === 0 }"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
    >
      <i class="fa fa-user"></i>
      <p class="text-[16px] font-bold">Sobre mim</p>
    </button>
    <button
      @click="activateMenuItem(1)"
      :class="{ active: activeItem === 1 }"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
    >
      <i class="fas fa-desktop"></i>
      <p class="text-[16px] font-bold">Portfolio</p>
    </button>

    <button
      @click="activateMenuItem(2)"
      :class="{ active: activeItem === 2 }"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
    >
      <i class="fas fa-cogs"></i>
      <p class="text-[16px] font-bold">Serviços & Preços</p>
    </button>

    <button
      @click="activateMenuItem(3)"
      :class="{ active: activeItem === 3 }"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
    >
      <i class="fa fa-file"></i>
      <p class="text-[16px] font-bold">Resumo</p>
    </button>
    <button
      @click="activateMenuItem(4)"
      :class="{ active: activeItem === 4 }"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
    >
      <i class="fas fa-envelope"></i>
      <p class="text-[16px] font-bold">Contacto</p>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: null,
    };
  },
  methods: {
    activateMenuItem(index) {
      this.activeItem = index;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #fafafa;
  color: #000;
  border-radius: 8px;
}
</style>
