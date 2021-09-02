<template>
  <section class="container">
    <main class="main">
      <img class="profile-img" src="../assets/profile-pic.png" />
      <div class="my-details">
        <h1>Olá, Eu sou Matheus 🧙‍♂️</h1>
        <p>
          Gosto muito de aprender novas tecnologias e estar sempre aprimorando
          meu conhecimento.
        </p>
        <p>No momento estou focado em Vue.js/ReactJS.</p>
        <p>
          Em meu tempo livre, costumo jogar, estudar e fazer alguns projetos
          paralelos.
        </p>
        <p>
          Dúvidas? Entre em <router-link to="/contato">contato</router-link>!
        </p>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped>
.profile-img {
  max-width: 200px;
  border-radius: 15px;
}

.main {
  display: flex;
  align-items: center;
  gap: 30px;
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
</style>