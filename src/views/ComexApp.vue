<template>
  <section class="container">
    <h1>ComexApp</h1>
    <p>
      ComexApp foi uma aplicação low-code feita totalmente em Power Apps<br />
      Essa aplicação visa dar clareza aos processos importados da Johnson Controls.
    </p>
    <div class="content">
      <ul>
        <li>Power Apps</li>
        <li>Power Automate</li>
        <li>Power BI</li>
        <li>Consumo de API's para webscraping de navios (ETA/ETD, IMO, ETC..)</li>
        <li>Integração com o teams</li>
        <li>Visão de todos os itens importados, visando melhor clareza ao planejamento.</li>
      </ul>
      <a
        class="btn"
        href="#"
        target=""
        >Preview não disponivel</a
      >
      <a
        class="btn"
        href="https://github.com/MatheusWFranca/comexapp"
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