<template>
  <section class="container">
    <div class="contact">
      <h2>Entre em contato</h2>
      <form>
        <label for="nome">Nome</label>
        <input type="text" id="nome" v-model="nome" name="nome" />
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" name="email" />
        <textarea name="textarea" id="textarea" rows="10"></textarea>
      </form>
      <button class="btn">Enviar</button>
    </div>
    <div class="medias">
      <img src="../assets/contact.svg" alt="Contato" />
      <div class="socials">
        <a
          href="https://www.linkedin.com/in/matheus-fran%C3%A7a-420b5b12a/"
          target="_Blank"
          title="linkedin"
        >
          <img src="../assets/linkedin.svg" alt="Linkedin"
        /></a>
        <a href="https://github.com/matheuswfranca" target="_blank">
          <img src="../assets/github.svg" alt="Github" />
        </a>
      </div>
    </div>
    <q>A maior constante da nossa vida é a Mudança - Heráclito</q>
  </section>
</template>

<script>
export default {
  name: 'Contato',
};
</script>

<style scoped>
img {
  max-width: 100%;
  width: 280px;
}

.btn {
  max-width: 100%;
  width: 300px;
  background: #e80;
}

.btn:hover {
  background: #ffb666;
}

.container {
  max-width: 900px;
  margin: 40px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.medias {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.socials {
  display: flex;
}
.socials a {
  padding: 10px;
}

.socials img {
  width: 30px;
  height: 30px;
  flex: 1;
}

h2 {
  font-size: 26px;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 20px;
}

input,
textarea {
  max-width: 100%;
  width: 300px;
}

q {
  font-style: italic;
  margin-top: 40px;
}
</style>