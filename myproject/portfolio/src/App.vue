<template>
  <div>
    <!-- navbar -->
    <div class="w-full shadow h-[70px] flex items-center">
      <div class="w-full h-2/3 flex items-center justify-between mx-[2rem]">
        <h1 class="text-4xl font-sans">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        </h1>
        <div class="flex gap-[1rem] h-full">
          <ul class="flex gap-[4rem] w-full items-center p-0 m-0">
            <li
              class="cursor-pointer hover:border-b-2 border-indigo-500 transition-all inline-block"
            >
              Home
            </li>
            <li
              class="cursor-pointer hover:border-b-2 border-indigo-500 transition-all"
            >
              About
            </li>
            <li
              class="cursor-pointer hover:border-b-2 border-indigo-500 transition-all"
            >
              Projects
            </li>
            <li class="cursor-pointer">
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
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </li>
          </ul>
          <div class="w-[1px] bg-black"></div>

          <button
            class="w-full h-2/2 bg-gradient-to-r from-blue-300 to-indigo-500 rounded-lg p-[0.5rem]"
          >
            <p class="text-white">Baixar cv</p>
            <p></p>
          </button>
        </div>
      </div>
    </div>

    <!-- perfil menu -->
    <div class="w-full h-[700px] bg-gradient-to-r from-blue-300 to-indigo-700">
      <div
        class="flex items-center ml-[2rem] h-[300px] bg-white w-[60px] relative top-[15%] rounded-[8px] shadow-xl"
      >
        <ul class="flex flex-col justify-center items-center gap-[2rem] w-full">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="35"
              height="35"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 3.460938 6.5625 L 26.539062 6.5625 L 26.539062 24.707031 L 3.460938 24.707031 Z M 3.460938 6.5625 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#id1)">
                <path
                  fill="rgb(6.269836%, 5.879211%, 5.099487%)"
                  d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              />
            </svg>
          </li>
        </ul>
      </div>

      <div class="relative left-[15rem] bottom-[10rem] w-max">
        <p class="text-4xl text-dark mb-[10px]">Hi! meu nome é Alexandre</p>
        <h1 class="text-5xl font-semibold text-dark mb-[20px]">
          Desenvolvedor <span class="text-white">Front-End</span>
        </h1>
        <p class="text-2xl w-[750px] text-dark">
          Gosto de criar produtos de front-end sólidos e escaláveis ​com ótimas
          experiências de usuário.
        </p>
        <button
          type="button"
          class="inline-block mt-4 bg-white rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-dark shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Baixar cv
        </button>
      </div>

      <div class="relative left-[70rem] -top-[25rem] w-max">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="410"
          class=""
          height="500"
          viewBox="0 0 410 1029"
          id="sauce-drip-outline"
          data-shape="true"
        >
          <path
            fill="none"
            stroke="#fff"
            stroke-miterlimit="50"
            d="M-595.702 68.801c170.37-196.112 467.886-203.922 648.382-23.426 118.036 118.036 155.527 286.059 112.51 435.858-4.761 16.58-12.01 32.283-19.316 47.909a138.955 138.955 0 00-9.03 25.534c-11.945 47.534.67 99.913 37.845 137.087 24.143 24.144 54.677 37.886 86.17 41.312 5.473.626 11.028.919 16.625.918 32.33 3.426 63.742 17.627 88.47 42.354 61.444 61.445 57.39 163.708-12.16 219.767-51.833 41.779-127.42 43.175-180.571 3.087-34.726-26.19-54.364-63.667-58.474-102.473 0-5.596-.293-11.151-.92-16.624-3.425-31.494-17.166-62.028-41.31-86.172-37.174-37.174-89.555-49.788-137.088-37.841a140.596 140.596 0 00-25.545 9.04c-15.375 7.181-30.8 14.359-47.102 19.074-158.488 45.834-337.525 1.47-456.231-133.131-145.451-164.927-146.471-416.267-2.255-582.273zm477.57 432.312c78.526-78.524 78.527-206.402 0-284.928-78.582-78.583-206.402-78.525-284.927 0-78.583 78.583-78.583 206.345 0 284.928 78.526 78.526 206.345 78.583 284.928 0z"
          ></path>
        </svg>
      </div>
    </div>

    <!-- About -->
    <div class="w-full h-[500px] svg-container">
      <div class="text-overlay">
        <h1 class="text-center text-4xl">Sobre mim</h1>
        <p class="text-xl text-center">
          "Sou um desenvolvedor front-end apaixonado por criar experiências
          digitais incríveis. Com habilidades sólidas em HTML, CSS e JavaScript,
          busco unir design e funcionalidade para desenvolver interfaces
          interativas e responsivas.
        </p>
      </div>
      <svg
        class="border shadow-md"
        viewBox="0 0 1351.68 675.84"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <rect
          class="bg"
          id="bg"
          x="0"
          y="0"
          width="100%"
          height="500"
          fill="#ccc"
        ></rect>
        <g transform="rotate(206 675.84 337.92)">
          <path
            d="M -675.84 375.84 S -347.92 271.84
            0.00 375.84 166.84 218.84
            675.84 375.84 1003.76 359.84
            1351.68 375.84 1679.60 340.84
            2027.52 375.84 h 110 V 1275.8400000000001 H -675.84 Z"
            fill="none"
            stroke="#93C5FD "
            stroke-width="10"
          ></path>
          <path
            d="M -675.84 325.00 S -547.00 172.50
            0.00 325.00 327.92 66.00
            675.84 325.00 1003.76 172.50
            1351.68 325.00 1555.52 172.50
            2027.52 325.00 h 110 V -600 H -675.84 Z"
            fill="none"
            stroke="#4338ca"
            stroke-width="10"
          ></path>
        </g>
      </svg>
    </div>

    <!-- Projects -->
  </div>
</template>

<script></script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
}

/* .about {
  position: relative;
  top: 50%;
} */

.svg-container {
  position: relative;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  width: 750px;
  height: 300px;
  border-radius: 2px;
  box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.1);
}
</style>
