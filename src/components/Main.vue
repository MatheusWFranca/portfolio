<template>
  <section class="container">
    <main class="main">
      <img class="profile-img" src="../assets/profile-pic.jpeg" />
      <div class="my-details">
        <h1>Olá, Eu sou o Matheus 🧙‍♂️</h1>
        <p>
          Gosto de aprender novas tecnologias. 
        </p>
        <p>Atualmente trabalho com análise de dados e com desenvolvimento de bots RPA.</p>
        <p>Tenho experiência com: </p>
        <ul class="experience">
          <li>Python</li>
          <li>SQL</li>
          <li>PowerBI</li>
          <li>RPA (UIPath, PowerAutomate, Selenium)</li>
          <li>Pentaho</li>
          <li>Git</li>
        </ul>
        <p>
          Dúvidas? Entre em <router-link to="/contato">contato</router-link>!
        </p>
      </div>
    </main>
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
  align-items: start;
  gap: 30px;
  margin-bottom: 30px;
}

h1 {
  margin-bottom: 15px;
}

p {
  margin-bottom: 15px;
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

.experience {
  display: flex;
  flex-direction: column;
  list-style: disc;
  margin-left: 15px;
  margin-bottom: 15px;
  color: #717999;
  font-weight: bold;
}

@media screen and (max-width: 460px) {
  .profile-img {
    max-width: 120px;
    align-self: flex-start;
  }
}
</style>