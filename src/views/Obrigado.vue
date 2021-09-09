<template>
  <transition>
    <div class="container">
      <p>Email enviado com sucesso! 🥳</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Obrigado',
  methods: {
    redirect() {
      setTimeout(() => {
        this.$router.push('/');
      }, 1200);
    },
  },
  created() {
    this.redirect();
  },
};
</script>

<style scoped>
.container {
  max-width: 350px;
  text-align: center;
  margin: 15px auto;
  min-height: 100px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}
</style>