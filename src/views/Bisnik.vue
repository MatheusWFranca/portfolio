<template>
  <section class="container">
    <h1>Bisnik</h1>
    <p>
      Bisnik é meu primeiro projeto seguindo uma ferramenta de prototipagem
      (Figma), nele aprendi os conceitos básicos da Ferramenta.
    </p>
    <div class="content">
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Figma</li>
      </ul>
      <a
        class="btn"
        href="https://matheuswfranca.github.io/bisnik/"
        target="_blank"
        >Preview do Projeto</a
      >
      <a
        class="btn"
        href="https://github.com/MatheusWFranca/bisnik"
        target="_blank"
        >Github</a
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