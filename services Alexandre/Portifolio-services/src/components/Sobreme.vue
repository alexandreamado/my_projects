<template>
  <div class="h-[100vh] dark:bg-primary">
    <div class="flex flex-col dark:bg-primary">
      <div class="bg-header dark:bg-primary  w-full px-[12%] py-[6%]">
        <h1 class="text-large font-bold dark:text-white">Alexandre Amado</h1>
        <h2 class="text-medio font-normal dark:text-white">
          Desenvolvedor Front-End & Tecnico de Suporte IBM
        </h2>
        <p class="w-[746px] mt-4 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id soluta
          beatae molestias, recusandae at error perspiciatis architecto. Sint
          aperiam vitae, ex ea repudiandae odit aliquam autem, veniam, nulla
          obcaecati fuga.
        </p>
        <div class="flex items-center gap-6 mt-6">
          <Button>
            <div class="dark:bg-[#434343] flex items-center gap-4 bg-primary p-3 rounded-lg">
              <i
                class="fas fa-arrow-right p-1 bg-white rounded-full text-black"
              ></i>
              <p class="text-white font-bold ">Meu Portfolio</p>
            </div>
          </Button>
          <Button>
            <div class="flex items-center gap-4 bg-[#434343] p-3 rounded-lg">
              <i
                class="fas fa-arrow-down p-1 bg-white rounded-full text-black"
              ></i>
              <p class="text-white font-bold">Meu Curriculum</p>
            </div>
          </Button>
        </div>
      </div>
     <Oqueeufaco/>
    </div>
  </div>
</template>

<script setup>
import Button from "./pages/Button.vue";
import Oqueeufaco from "./pages/Oqueeufaco.vue";
</script>
