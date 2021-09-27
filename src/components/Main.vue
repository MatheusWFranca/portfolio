<template>
  <section class="container">
    <main class="main">
      <img class="profile-img" src="../assets/profile-pic.png" />
      <div class="my-details">
        <h1>Olá, Eu sou o Matheus 🧙‍♂️</h1>
        <p>
          Gosto muito de aprender novas tecnologias e estar sempre aprimorando
          meu conhecimento.
        </p>
        <p>No momento estou focado em Typescript, Vue.js e ReactJS.</p>
        <p>
          Dúvidas? Entre em <router-link to="/contato">contato</router-link>!
        </p>
      </div>
    </main>
    <article class="habilidades">
      <h2>Skills</h2>
      <ul>
        <li><img src="../assets/javascript.svg" alt="Javascript" /></li>
        <li><img src="../assets/vue.svg" alt="Vue.js" /></li>
        <li><img src="../assets/html.svg" alt="Html5" /></li>
        <li><img src="../assets/css.svg" alt="CSS" /></li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.profile-img {
  max-width: 200px;
  border-radius: 5px;
}

.main {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
}

h1 {
  margin-bottom: 15px;
}

p {
  margin-bottom: 20px;
  font-style: italic;
  color: #717999;
}

.container {
  max-width: 900px;
  margin: 40px auto;
  min-height: 300px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.habilidades::before {
  content: "";
  width: 50%;
  border-top: 1px solid rgba(30, 60, 90, 0.1);
}

.habilidades {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin: 15px 0px;
}

ul {
  display: flex;
}

li img {
  width: 35px;
  height: 35px;
  margin-right: 20px;
}

@media screen and (max-width: 460px) {
  .profile-img {
    max-width: 120px;
    align-self: flex-start;
  }
}
</style>