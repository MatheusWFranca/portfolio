<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
  transition: all 0.3s;
}

a:hover {
  color: #ffb666;
}

body {
  width: 100vw;
  height: 100vh;
  font-family: 'IBM PLEX MONO', Arial, Helvetica, sans-serif;
  background: url('./assets/waves.svg') no-repeat bottom;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #ffb666;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: 'IBM PLEX MONO', Arial, Helvetica, sans-serif;
  cursor: pointer;
}

.btn:hover {
  color: #fff;
  background: #e80;
  transform: scale(1.1);
}
</style>
