<template>
  <section class="container">
    <div class="contact">
      <h2>Entre em contato</h2>
      <form
        action="https://formsubmit.co/matheuswfranca@outlook.com"
        method="POST"
      >
        <label for="nome" required>Nome_</label>
        <input type="text" id="nome" name="nome" required />
        <label for="email">Email_</label>
        <input type="email" id="email" name="email" required />
        <label for="textarea">Sua mensagem_</label>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="www.mfranca.dev" />
        <textarea name="message" id="message" rows="10" required></textarea>
        <button @click="alerta" type="submit" class="btn">Enviar</button>
      </form>
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
    <div class="alerta" :class="{ ativo: alertaAtivo }">
      <p class="alerta_msg">{{ mensagemAlerta }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contato',
  data() {
    return {
      alertaAtivo: false,
      mensagemAlerta: 'Email enviando com sucesso 🥳',
    };
  },
  methods: {
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },
  },
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
  margin: 15px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.medias {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
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
  text-align: center;
  font-style: italic;
  margin: 60px 0;
}

.alerta {
  position: absolute;
  top: 20px;
  left: 0px;
  z-index: 10;
  width: 100%;
  text-align: center;
  display: none;
}

.alerta.ativo {
  display: block;
  animation: fadeInDown 0.3s forwards;
}

.alerta_msg {
  background: #fff;
  display: inline-block;
  padding: 20px 40px;
  border: 2px solid #000;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 579px) {
  .socials {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>