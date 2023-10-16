// ! setTimeout -> primeira funcao

function mostrarTema(tema) {
  console.log(`Estou aprendendo ${tema}`);
}

setTimeout(() => {
  mostrarTema("Nodejs");
}, 2000);

function soma(a, b) {
    return a + b
}