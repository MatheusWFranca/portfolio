<template>
  <span id="hamburguer"></span>
</template>

<script>
export default {
  name: "MenuHamburguer",
};
</script>

<style scoped>
#hamburguer {
  color: #ffb666;
  display: block;
  border-top: 2px solid;
  width: 20px;
}

#hamburguer::after,
#hamburguer::before {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background: currentColor;
  margin-top: 5px;
  transition: 0.3s;
  position: relative;
}

#nav.active #hamburguer {
  border-top-color: transparent;
}

#nav.active #hamburguer::before {
  transform: rotate(135deg);
}

#nav.active #hamburguer::after {
  transform: rotate(-135deg);
  top: -7px;
}
</style>