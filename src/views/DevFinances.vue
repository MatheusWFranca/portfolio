<template>
  <section class="container">
    <h1>Dev.finance<span>$</span></h1>
    <p>
      Dev.finances é uma aplicação de controle financeiro, no qual você pode
      registrar e deletar transações, verificar o saldo de receitas e despesas.
    </p>
    <p>Esse projeto foi proposto pela Rocketseat na Maratona Discover.</p>
    <div class="content">
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript Vanilla</li>
      </ul>
      <a
        class="btn"
        href="https://matheusdevfinances.netlify.app"
        target="_blank"
        >Preview do Projeto</a
      >
      <a
        class="btn"
        href="https://github.com/MatheusWFranca/devfinances"
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

span {
  color: green;
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