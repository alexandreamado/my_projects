<template>
  <div class="w-[280px] bg-primary h-full fixed">
    <div class="flex flex-col justify-center items-center mt-8">
      <h1 class="text-2xl font-bold text-main mb-2">Alexandre Amado</h1>
      <img
        src="../../assets/logo.png"
        class="w-32 rounded-full border-[1px]"
        alt="Avatar"
      />
      <p class="text-center text-sm text-main mt-2 px-2">
        Olá, meu nome é Alexandre Amado e sou Desenvolvedor Front-End & Tecnico de Suporte IBM.
        Bem vindo ao meu site pessoal!
      </p>
    </div>

    <ul
      class="flex justify-center items-center gap-6 mt-4 border-b-[1px] border-[#ccc] py-2"
    >
      <li>
        <a href="#"
          ><i class="fab fa-whatsapp text-medio bg-white p-2 rounded-full"></i
        ></a>
      </li>
      <li>
        <a href="#">
          <i class="fab fa-linkedin text-medio bg-white p-2 rounded-full"></i
        ></a>
      </li>
      <li>
        <a href="#">
          <i class="fab fa-github text-medio bg-white p-2 rounded-full"></i
        ></a>
      </li>
    </ul>
    <Aboutme />

    <Button>
      <div class="flex items-center mt-8 gap-2 bg-header p-2 rounded-md ml-14">
        <i class="fab fa-telegram text-xl"></i>
        <p>Contrate-me</p>
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
