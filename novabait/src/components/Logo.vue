<template>
  <div class="logo">
    <h1 class="logo-text">
      <span class="logo-letter">N</span>
      <span class="logo-letter with-dot">Ó<span class="dot"></span></span>
      <span class="logo-letter">V</span>
      <span class="logo-letter with-dot">A<span class="dot"></span></span>
      <span class="logo-letter">B</span>
      <span class="logo-letter with-dot">A<span class="dot"></span></span>
      <span class="logo-letter with-dot">İ<span class="dot"></span></span>
      <span class="logo-letter">.</span>
      <span class="logo-letter with-dot">T<span class="dot"></span></span>
    </h1>
  </div>
</template>

<script setup>
// Componente del logo NOVABAI.T
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: $font-weight-bold;
  color: #2a3f5f; // Azul oscuro más claro para mejor contraste
  letter-spacing: -0.02em;
  display: flex;
  align-items: baseline;
  line-height: 1;
  
  @media (max-width: $breakpoint-mobile) {
    font-size: 1.8rem;
  }
}

.logo-letter {
  position: relative;
  display: inline-block;
  
  &.with-dot {
    position: relative;
  }
}

.dot {
  position: absolute;
  top: -0.3em;
  left: 50%;
  transform: translateX(-50%);
  width: 0.4em;
  height: 0.4em;
  background-color: $color-accent-light;
  border-radius: 50%;
  display: inline-block;
}

@media (max-width: $breakpoint-mobile) {
  .dot {
    width: 0.3em;
    height: 0.3em;
    top: -0.25em;
  }
}
</style>

