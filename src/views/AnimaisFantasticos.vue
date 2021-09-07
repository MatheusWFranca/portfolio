<template>
  <section class="container">
    <h1>Animais Fantásticos</h1>
    <p>
      Animais Fantásticos foi minha introdução ao mundo do Javascript<br />
      As seguintes tecnologias/aprendizados foram desenvolvidos(as).
    </p>
    <div class="content">
      <ul>
        <li>Javascript Vanilla ES6+</li>
        <li>Criação de slides</li>
        <li>Manipulação do DOM</li>
        <li>Consumo de API's</li>
        <li>Webpack</li>
        <li>ESlint para padronização do Projeto</li>
      </ul>
      <a
        class="btn"
        href="https://matheusanimaisfantasticos.netlify.app/"
        target="_blank"
        >Preview do Projeto</a
      >
      <a
        class="btn"
        href="https://github.com/MatheusWFranca/animais-fantasticos"
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

@media screen and (max-width: 750px) {
  .content {
    flex-direction: column;
  }
  .content a {
    margin: 10px auto 10px auto;
    max-width: 80%;
  }
}
</style>