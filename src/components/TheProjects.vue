<template>
  <section class="container">
    <div class="slide-wrapper">
      <ul class="slide">
        <li class="active">
          <img src="../assets/projeto-1.png" alt="Techno" />
        </li>
        <li>
          <img src="../assets/projeto-2.png" alt="Animais Fantasticos" />
        </li>
        <li><img src="../assets/projeto-3.png" alt="Techno Cursos" /></li>
        <li><img src="../assets/projeto-4.png" alt="Clima Diário" /></li>
        <li><img src="../assets/projeto-5.png" alt="Bisnik" /></li>
        <li>6</li>
      </ul>
    </div>
    <div class="arrow-nav">
      <button class="prev"></button>
      <button class="next"></button>
    </div>
  </section>
</template>

<script>
import { SlideNav } from '@/helpers/slide.js';

export default {
  name: 'TheProjects',
  methods: {
    initSlide() {
      const slide = new SlideNav('.slide', '.slide-wrapper');
      slide.init();
      slide.addArrow('.prev', '.next');
      slide.addControl();
    },
  },
  mounted() {
    this.initSlide();
  },
};
</script>

<style>
.container {
  margin-top: 30px;
}

img {
  display: block;
  max-width: 100%;
  min-height: 100%;
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
</style>