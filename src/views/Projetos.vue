<template>
  <TheProjects />
</template>

<script>
import TheProjects from '@/components/TheProjects.vue';

export default {
  name: 'Projetos',
  components: {
    TheProjects,
  },
};
</script>

<style>
img {
  display: block;
  max-width: 100%;
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
  max-width: 800px;
  margin: 0 20px;
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
  justify-content: space-around;
  margin: 20px 0;
}

.arrow-nav button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: white;
  width: 40px;
  height: 40px;
  background: #ffb666 url('../assets/arrow.svg') center center no-repeat;
}

.arrow-nav .prev {
  transform: rotate(180deg);
}
</style>