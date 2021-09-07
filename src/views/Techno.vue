<template>
  <section class="container">
    <h1>Techno</h1>
    <p>
      Techno é um site projetado no curso de Vue.js pela Origamid e desenvolvido
      por mim. <br />
      As seguintes tecnologias/aprendizados foram desenvolvidos(as).
    </p>
    <div class="content">
      <ul>
        <li>Módulagem de Componentes</li>
        <li>Modificadores do Vue.js</li>
        <li>Manipulando o localStorage</li>
        <li>Manipulação de Carrinho</li>
        <li>Criações de API</li>
        <li>Rotas</li>
      </ul>
      <a class="btn" href="https://matheustechno.netlify.app/" target="_blank"
        >Preview do Projeto</a
      >
      <a
        class="btn"
        href="https://github.com/MatheusWFranca/techno"
        target="_blank"
        >Código Fonte(github)</a
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto;
  min-height: 300px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}

p {
  text-align: center;
  margin-bottom: 10px;
}

ul {
  flex: 1;
}

li {
  list-style-type: disc;
  margin-left: 15px;
  font-style: italic;
}
.btn {
  margin-right: 15px;
  max-height: 50px;
}

.content {
  margin-top: 40px;
  display: flex;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
.v-enter-active {
  transition: all 0.3s;
}
</style>