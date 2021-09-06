<template>
  <div id="app">
    <Header />
    <main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
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
  min-height: 100vh;
  font-family: "IBM PLEX MONO", Arial, Helvetica, sans-serif;
  background: url("./assets/waves.svg") no-repeat bottom;
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
  font-family: "IBM PLEX MONO", Arial, Helvetica, sans-serif;
  cursor: pointer;
}

.btn:hover {
  color: #fff;
  background: #e80;
  transform: scale(1.1);
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Nunito", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #e80;
}
</style>
