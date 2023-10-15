<template>
  <div>
    <div
      class="shadow-md pt-[48px] pb-[48px] flex flex-col justify-center items-center"
    >
      <h1 class="text-4xl font-bold">Contacto</h1>
      <p class="text-center w-[980px] mt-4 font-light text-lg">
        Interessado em me contratar para o seu projeto ou apenas quer dizer um
        oi? Você pode preencher o formulário de contato abaixo ou me enviar um
        e-mail para Alexandre.
        <span class="text-[#1E2A3A] font-bold">alexandreamado71@gmail.com</span>
      </p>
    </div>

    <div class="flex flex-col mt-[6rem] items-center justify-center">
      <h1 class="text-3xl font-bold">Entrar em contato</h1>
      <form method="post">
        <div class="flex gap-8 mt-4">
          <input
            type="text"
            placeholder="Nome"
            class="font-light border-2 p-2 w-[400px] rounded-lg outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            class="font-light border-2 p-2 w-[400px] rounded-lg outline-none"
          />
        </div>
        <div class="flex items-center mt-4">
          <svg
            class="svg-inline--fa fa-circle-info me-2 text-primary w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-info"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
            ></path>
          </svg>
          <p class="font-light text-sm">
            Quer saber o que está incluso em cada pacote? Verifique a página
            <strong>Serviços</strong>
          </p>
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="font-light border-2 p-2 w-full mt-4 rounded-lg outline-none"
          placeholder="Me envie uma mensagem"
        ></textarea>
      </form>

      <button
        class="flex items-center mt-6 gap-4 hover:scale-105 shadow-md dark:text-white border-[1px] cursor-pointer duration-500 text-center text-lg hover:bg-[#1E2A3A] hover:text-white border-[#ccc] bg-transparent p-2 rounded-lg w-max"
      >
        <p class="text-sm font-bold uppercase">entre em contacto</p>
      </button>
    </div>
  </div>
</template>
