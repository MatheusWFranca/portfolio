<template>
  <section class="container">
    <div class="slide-wrapper" @click="getIndex">
      <ul class="slide" ref="carrosel">
        <li>
          <img src="../assets/projeto-1.png" alt="Techno" />
        </li>
        <li class="animais">
          <img src="../assets/projeto-2.png" alt="Animais Fantasticos" />
        </li>
        <li class="technocursos">
          <img src="../assets/projeto-3.png" alt="Techno Cursos" />
        </li>
        <li class="clima">
          <img src="../assets/projeto-4.png" alt="Clima Diario" />
        </li>
        <li class="bisnik">
          <img src="../assets/projeto-5.png" alt="Bisnik" />
        </li>
      </ul>
    </div>
    <div class="arrow-nav" @click="getIndex">
      <button class="prev"></button>
      <button class="next"></button>
    </div>
    <div class="sobre">
      <router-link :to="{ name: `${slide}`, params: { slide } }"
        >Sobre o Projeto {{ slide }}</router-link
      >
      <img class="arrow-img" src="../assets/arrow-red.svg" alt="Arrow-Icon" />
    </div>
  </section>
</template>

<script>
import { SlideNav } from '@/helpers/slide.js';

export default {
  name: 'TheProjects',
  data() {
    return {
      slide: '',
    };
  },
  methods: {
    initSlide() {
      const slide = new SlideNav('.slide', '.slide-wrapper');
      slide.init();
      slide.addArrow('.prev', '.next');
      slide.addControl();
    },
    getIndex() {
      const lista = document.querySelector('.active img').getAttribute('alt');
      this.slide = lista;
    },
  },
  mounted() {
    this.initSlide();
    this.getIndex();
  },
};
</script>

<style>
.container {
  margin-top: 30px;
}

.project {
  display: flex;
  justify-content: center;
}

h2 {
  text-align: center;
}

img {
  display: block;
  max-width: 100%;
  min-height: 100%;
}

.sobre {
  display: flex;
  align-items: center;
}

.sobre img {
  margin-left: 10px;
}

.sobre:hover {
  color: #e54;
  transition: all 0.3s;
}

.slide-wrapper {
  overflow: hidden;
}

.slide {
  display: flex;
}

.slide:hover {
  will-change: transform;
}

.slide li {
  flex-shrink: 0;
  width: 80vw;
  max-width: 900px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  opacity: 0.8;
  transform: scale(0.8);
  transition: 0.3s;
}

.slide li.active {
  opacity: 1;
  transform: scale(1);
}

[data-control='slide'] {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

[data-control='slide'] li a {
  display: block;
  width: 12px;
  height: 12px;
  background: #ffb666;
  border-radius: 50%;
  overflow: hidden;
  text-indent: -999px;
  margin: 4px;
}

[data-control='slide'] li.active a,
[data-control='slide'] li a:hover {
  background: #e54;
}

.arrow-nav {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;
}

.arrow-nav button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: white;
  width: 40px;
  height: 40px;
  background: #e54 url('../assets/arrow.svg') center center no-repeat;
}

.arrow-nav .prev {
  transform: rotate(180deg);
}

.project {
  text-align: center;
}

.sobre {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 700px) {
  .slide-wrapper {
    max-width: 100%;
  }
}
</style>
