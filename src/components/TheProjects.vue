<template>
  <section class="container">
    <div class="slide-wrapper">
      <ul class="slide">
        <li class="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
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
</style>