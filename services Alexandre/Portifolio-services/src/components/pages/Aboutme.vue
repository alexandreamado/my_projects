<template>
  <div class="mt-16 flex flex-col gap-4 px-4 ml-8 ">
    <router-link
      @click="activateMenuItem(0)"
      :class="{ active: activeItem === 0 }"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
      to="/sobreme">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>

      <p class="text-[14px] font-bold">Sobre mim</p>
    </router-link>
    <router-link
      @click="activateMenuItem(1)"
      :class="{ active: activeItem === 1 }"
      to="/portfolio"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
      <p class="text-[14px] font-bold">Portfolio</p>
    </router-link>
    <router-link 
      @click="activateMenuItem(2)"
      :class="{ active: activeItem === 2 }"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
      to="/servicos"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      <p class="text-[14px] font-bold">Serviços</p>
    </router-link>

    <router-link
      @click="activateMenuItem(3)"
      :class="{ active: activeItem === 3 }"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
      to="/resume"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>

      <p class="text-[14px] font-bold">Resumo</p>
    </router-link>
    <router-link
    to="/contact"
      @click="activateMenuItem(4)"
      :class="{ active: activeItem === 4 }"
      class="transition-all ease-in-out duration-700 flex items-center text-white hover:text-primary gap-2 hover:bg-header p-2 hover:w-full hover:rounded-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>

      <p class="text-[14px] font-bold">Contacto</p>
    </router-link>
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
