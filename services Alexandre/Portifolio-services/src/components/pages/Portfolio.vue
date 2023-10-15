<template>
  <div>
    <div
      class="pt-[48px] pb-[48px] flex flex-col justify-center items-center shadow-md"
    >
      <h1 class="text-4xl font-bold">Portfólio</h1>
      <p class="text-lg mt-4 font-light">
        Seja bem-vindo ao meu Portfólio, aqui você encontrara os meus mais
        recentes Projectos.
      </p>
      <button
        class="bg-primary text-white h-[40px] w-[126px] p-[6px] rounded-lg mt-6 flex items-center justify-between hover:bg-[#334155] transition-all duration-300 ease-in"
      >
        <i class="fab fa-telegram text-white text-xl"></i>
        <p class="text-sm font-bold">Contrate-me</p>
      </button>
    </div>
    <ul class="list-none flex items-center justify-center gap-6 mt-6">
      <li
        class="hover:text-[#334155] cursor-pointer"
        v-for="list in lista"
        :key="list"
      >
        {{ list.nome }}
      </li>
    </ul>

    <div class="grid grid-cols-2 gap-[42px] max-w-[1420px] mt-8 mx-auto">
      <div
        class="w-[700px] bg-header shadow-xl flex rounded-lg hover:scale-105 hover:translate-y-2 duration-500 ease-in cursor-pointer hover:brightness-75"
      >
        <img
          src="../../assets/img/netflix.png"
          class="w-[350px] rounded-l-lg"
          alt=""
        />
        <div class="ml-4 flex flex-col">
          <h2 class="text-lg font-bold mt-2">Netflix Clone</h2>
          <p class="text-[16px] w-[330px] text-left font-light">
            Projecto Pessoal feito realizado com a tecnologia Tailwind CSS &
            HTML, A Netflix e' um sistema de stream onde as pessoas pagam para
            poderem asistir filmes e Series.
            <br />
            O projecto contribuiu para o aumento do meu desenvolvimento como
            programador Front-End.
          </p>
        </div>
      </div>
      <div
        class="w-[700px] bg-header shadow-xl flex rounded-lg hover:scale-105 hover:translate-y-2 duration-500 ease-in cursor-pointer hover:brightness-75"
      >
        <img
          src="../../assets/img/social.png"
          class="w-[350px] rounded-l-lg brightness-75"
          alt=""
        />
        <div class="ml-4 flex flex-col">
          <h2 class="text-lg font-bold mt-2">Social Book</h2>
          <p class="text-[16px] w-[330px] text-left font-light">
            Projecto de uma rede social onde usei as melhores praticas de
            codificacao e as melhores tecnologia de desenvolvimento Web, O
            projecto conta com o modo dark para as visualizacoes dos conteudos.
          </p>
        </div>
      </div>
      <div
        class="w-[700px] bg-header shadow-xl flex rounded-lg hover:scale-105 hover:translate-y-2 duration-500 ease-in cursor-pointer hover:brightness-75"
      >
        <img
          src="../../assets/img/food.png"
          class="w-[350px] rounded-l-lg"
          alt=""
        />
        <div class="ml-4 flex flex-col">
          <h2 class="text-lg font-bold p-2">Sistema de Entrega de Comidas</h2>
          <p class="text-[16px] w-[350px] text-left p-2 font-light">
           Projecto Pessoal em desenvolvimento de entrega de comida para pequenos restaurantes.
          </p>
        </div>
      </div>
      <div
        class="w-[700px] bg-header shadow-xl flex rounded-lg hover:scale-105 hover:translate-y-2 duration-500 ease-in cursor-pointer hover:brightness-75"
      >
        <img
          src="../../assets/img/netflix.png"
          class="w-[350px] rounded-l-lg"
          alt=""
        />
        <div class="ml-4 flex flex-col">
          <h2 class="text-lg font-bold p-2">Netflix Clone</h2>
          <p class="text-[16px] w-[350px] text-left p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            expedita debitis quasi cupiditate itaque temporibus. Repellendus
            ducimus minima dignissimos perferendis accusamus, architecto
            officiis deserunt vitae porro molestiae dolorem officia. Quia!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [{ nome: "Todos" }, { nome: "Front End" }, { nome: "Back End" }],
    };
  },
};
</script>
