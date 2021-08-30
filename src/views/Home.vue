<template>
  <transition>
    <div>
      <Main />
    </div>
  </transition>
</template>

<script>
import Main from '@/components/Main.vue';

export default {
  name: 'Home',
  components: {
    Main,
  },
};
</script>
