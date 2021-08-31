<template>
  <header>
    <nav>
      <router-link class="mf" to="/">mf<span>.</span></router-link>
      <ul>
        <li class="nav"><router-link to="/">Curriculo</router-link></li>
        <li class="nav"><router-link to="/projetos">Projetos</router-link></li>
        <li><router-link class="btn" to="/contato">Contato</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.mf {
  font-size: 30px;
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

li {
  display: inline-block;
  padding-right: 20px;
}
</style>