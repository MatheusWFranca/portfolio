<template>
  <section class="container">
    <h1>Clima Diário</h1>
    <p>
      Clima Diario é o meu primeiro projeto em Vue.js. <br />Uma simples
      aplicação onde você pode consultar o clima de qualquer região do mundo.
    </p>
    <div class="content">
      <ul>
        <li>Vue.js</li>
        <li>Javascript Vanilla</li>
        <li>Consumo de API Externa</li>
      </ul>
      <a class="btn" href="https://meuclimadiario.netlify.app/" target="_blank"
        >Preview do Projeto</a
      >
      <a
        class="btn"
        href="https://github.com/MatheusWFranca/meuclima"
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
  margin: 15px auto;
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