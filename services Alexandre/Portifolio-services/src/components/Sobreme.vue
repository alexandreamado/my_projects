<template>
  <div class="h-[100vh] dark:bg-[#030608]">
    <div class="flex flex-col dark:bg-primary">
      <div class="bg-header dark:bg-primary w-full px-[16%] py-[6%] shadow-sm border-b-[1px] border-[#ccc]">
        <h1 class="text-large font-bold dark:text-white">Alexandre Amado</h1>
        <h2 class="text-medio font-normal dark:text-white">
          Desenvolvedor Front-End & Tecnico de Suporte IBM
        </h2>
        <p class="w-[746px] mt-4 dark:text-white">
          Sou um Profissional de Suporte Técnico com formação pela IBM,
          combinando conhecimentos técnicos sólidos com experiência em
          desenvolvimento web. Possuo um amplo espectro de habilidades, desde a
          solução de problemas complexos de TI até o desenvolvimento de
          aplicações web inovadoras.
        </p>
        <div class="flex items-center gap-6 mt-6">
          <Button>
            <div
              class="dark:bg-[#434343] flex items-center gap-4 bg-primary p-3 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p class="text-white text-sm font-bold">Curriculum vitae</p>
            </div>
          </Button>
        </div>
      </div>
      <Oqueeufaco />
    </div>
  </div>
</template>

<script setup>
import Button from "./pages/Button.vue";
import Oqueeufaco from "./pages/Oqueeufaco.vue";
</script>
