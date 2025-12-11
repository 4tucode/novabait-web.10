<template>
  <figure class="logo">
    <img
      src="../assets/logo2.png"
      alt="NOVABAI.T - Desarrollo Web"
      class="logo-image"
      width="180"
      height="60"
      loading="eager"
    >
  </figure>
</template>

<script setup>
// Componente del logo NOVABAI.T
defineOptions({
  name: 'TheLogo'
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.logo-image {
  max-width: 180px;
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;

  @media (max-width: $breakpoint-tablet) {
    max-width: 150px;
  }

  @media (max-width: $breakpoint-mobile) {
    max-width: 120px;
  }
}
</style>

