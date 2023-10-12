<template>
  <div class="w-[280px] bg-[#1E2A3A] h-full fixed">
    <div class="flex flex-col justify-center items-center mt-8">
      <img
        src="../../assets/logo.png"
        class="w-[150px] border-[#ccc]"
        alt="Avatar"
      />
      <p class="text-center text-sm text-main mt-2 px-4">
        Olá, meu nome é Alexandre Amado e sou Desenvolvedor Front-End & Tecnico
        de Suporte IBM. Bem vindo ao meu site pessoal!
      </p>
    </div>

    <div class="flex items-center justify-center gap-4 mt-4">
      <a
        href="https://wa.me/qr/SEDQBZG5QKYJN1"
        class="hover:scale-110 duration-500 ease-in"
        ><i
          class="fab fa-whatsapp text-[24px] p-[6px] text-white hover:text-header transition-200 ease-in-out"
        ></i
      ></a>
      <a
        href="http://www.linkedin.com/in/alexandreamado"
        class="hover:scale-110 duration-500 ease-in"
      >
        <i
          class="fab fa-linkedin text-[22px] p-[6px] text-white hover:text-header transition-200 ease-in-out"
        ></i
      ></a>
      <a
        href="https://github.com/alexandreamado"
        class="hover:scale-110 duration-500 ease-in"
      >
        <i
          class="fab fa-github text-[22px] p-[6px] text-white hover:text-header transition-200 ease-in-out"
        ></i
      ></a>
      <a
        href="https://github.com/alexandreamado"
        class="hover:scale-110 duration-500 ease-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#fff"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </a>
    </div>

    <Aboutme />

    <Button>
      <div
        class="flex items-center mt-8 gap-2 bg-header p-1 rounded-md ml-14 hover:scale-110 transition-all duration-500 ease-in"
      >
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
