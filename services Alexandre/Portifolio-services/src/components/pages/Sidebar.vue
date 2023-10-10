<template>
  <div class="w-[280px] bg-[#1E2A3A] h-full fixed">
    <div class="flex flex-col justify-center items-center mt-8">
      
      <img
        src="../../assets/logo.png"
        class="w-[150px]  border-[#ccc]"
        alt="Avatar"
      />
      <p class="text-center text-sm text-main mt-2 px-4">
        Olá, meu nome é Alexandre Amado e sou Desenvolvedor Front-End & Tecnico
        de Suporte IBM. Bem vindo ao meu site pessoal!
      </p>
    </div>

    <div class="flex items-center justify-center gap-4 mt-4">
      <a href="https://wa.me/qr/SEDQBZG5QKYJN1" class="bg-white rounded-full hover:bg-primary"
        ><i
          class="fab fa-whatsapp text-[24px] p-[6px] hover:text-header transition-200 ease-in-out"
        ></i
      ></a>

      <a href="http://www.linkedin.com/in/alexandreamado" class="bg-white rounded-full hover:bg-primary">
        <i
          class="fab fa-linkedin text-[22px] p-[6px] hover:text-header transition-200 ease-in-out"
        ></i
      ></a>
      <a href="https://github.com/alexandreamado" class="bg-white rounded-full hover:bg-primary">
        <i
          class="fab fa-github text-[22px] p-[6px] hover:text-header transition-200 ease-in-out"
        ></i
      ></a>
    </div>

    <Aboutme />

    <Button>
      <div class="flex items-center mt-8 gap-2 bg-header p-1 rounded-md ml-14 hover:scale-110 transition-all duration-500 ease-in">
        <i class="fab fa-telegram text-lg"></i>
        <p class="text-sm">Contrate-me</p>
      </div>
    </Button>
    <Dark />
  </div>
</template>

<script setup>
import Aboutme from "./Aboutme.vue";
import Button from "./Button.vue";
import Dark from "./Dark.vue";
</script>
