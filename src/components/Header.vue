<template>
  <header>
    <nav id="nav">
      <router-link class="mf" to="/">mf<span>.</span></router-link>
      <button class="btn-mobile" @click="toggleMenu">
        <MenuHamburguer />
      </button>
      <ul class="menu">
        <li @click="toggleMenu">
          <router-link to="/">Certificados</router-link>
        </li>
        <li @click="toggleMenu">
          <router-link to="/projetos">Projetos</router-link>
        </li>
        <li @click="toggleMenu">
          <router-link class="btn" to="/contato">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import MenuHamburguer from "@/components/MenuHamburguer.vue";

export default {
  name: "Header",
  components: {
    MenuHamburguer,
  },
  methods: {
    toggleMenu() {
      const nav = document.querySelector("#nav");
      nav.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
header {
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.mf {
  font-size: 30px;
}

.btn-mobile {
  display: none;
}

.menu li {
  display: inline-block;
  padding: 0px 5px;
  margin: 10px;
}

span {
  color: #ffb666;
}

nav {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
}

nav h1 {
  font-style: italic;
  font-size: 30px;
}

@media screen and (max-width: 465px) {
  .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    height: 0;
    transition: 0.3s;
    background: #fff;
    z-index: 1000;
    visibility: hidden;
    overflow-y: hidden;
  }

  #nav.active .menu {
    height: calc(90vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }

  .menu li {
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    text-align: center;
  }

  .btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
  }
}
</style>