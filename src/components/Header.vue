<template>
  <header>
    <nav>
      <h1>Matheus França</h1>
      <ul>
        <li class="nav"><router-link to="/">Sobre</router-link></li>
        <li class="nav"><router-link to="/">Projetos</router-link></li>
        <li><router-link class="btn" to="/">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
header {
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
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

li {
  display: inline-block;
  padding-right: 20px;
}
</style>