<template>
  <div>
    <div class="bg-header fixed w-full p-[72px]">
      <h1 class="text-large font-bold">Alexandre Amado</h1>
      <h2 class="text-medio font-normal">Senior Software Engineer</h2>
      <p class="w-[746px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id soluta
        beatae molestias, recusandae at error perspiciatis architecto. Sint
        aperiam vitae, ex ea repudiandae odit aliquam autem, veniam, nulla
        obcaecati fuga.
      </p>
      <div class="flex items-center gap-6 mt-6">
        <Button>
          <div class="flex items-center gap-4 bg-primary p-3 rounded-lg">
            <i class="fas fa-arrow-right text-white"></i>
            <p class="text-white font-bold">Meu Portfolio</p>
          </div>
        </Button>
        <Button>Meu Resumo</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./pages/Button.vue";
</script>
