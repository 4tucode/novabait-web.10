<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/Logo.vue'
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="main-header" :class="{ 'scrolled': isScrolled }">
    <nav class="navbar container">
      <RouterLink to="/" class="logo-link" @click="closeMenu">
        <Logo />
      </RouterLink>

      <button
        class="menu-toggle"
        @click="toggleMenu"
        aria-label="Toggle menu"
        :aria-expanded="isMenuOpen"
      >
        <span class="menu-icon" :class="{ 'open': isMenuOpen }"></span>
      </button>

      <ul class="nav-menu" :class="{ 'open': isMenuOpen }">
        <li><RouterLink to="/" @click="closeMenu">Inicio</RouterLink></li>
        <li><RouterLink to="/servicios" @click="closeMenu">Servicios</RouterLink></li>
        <li><RouterLink to="/sobre-nosotros" @click="closeMenu">Sobre Nosotros</RouterLink></li>
        <li><RouterLink to="/contacto" @click="closeMenu" class="cta-link">Contacto</RouterLink></li>
      </ul>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
@import './assets/styles/main.scss';

.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;

  &.scrolled {
    background-color: rgba(0, 0, 0, 0.95);
    border-bottom-color: rgba(74, 158, 255, 0.1);
  }
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-sm $spacing-md;
  min-height: 70px;

  @media (max-width: $breakpoint-mobile) {
    padding: $spacing-sm;
    min-height: 60px;
  }
}

.logo-link {
  text-decoration: none;
  z-index: 1001;

  :deep(.logo-text) {
    font-size: 1.8rem;

    @media (max-width: $breakpoint-mobile) {
      font-size: 1.4rem;
    }
  }
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: $spacing-md;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: $breakpoint-tablet) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background-color: $color-background;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px $spacing-md $spacing-md;
    gap: $spacing-sm;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);

    &.open {
      right: 0;
    }
  }

  li {
    a {
      color: $color-text-primary;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: $font-weight-regular;
      padding: $spacing-xs $spacing-sm;
      border-radius: 4px;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) scaleX(0);
        width: 80%;
        height: 1px;
        background-color: $color-accent-light;
        transition: transform 0.3s ease;
      }

      &:hover {
        color: $color-accent-light;

        &::after {
          transform: translateX(-50%) scaleX(1);
        }
      }

      &.router-link-active {
        color: $color-accent-light;

        &::after {
          transform: translateX(-50%) scaleX(1);
        }
      }

      &.cta-link {
        background-color: $color-accent-light;
        color: $color-background;
        padding: $spacing-xs $spacing-md;
        font-weight: $font-weight-medium;

        &::after {
          display: none;
        }

        &:hover {
          background-color: $color-accent-bright;
          color: $color-background;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(74, 158, 255, 0.3);
        }
      }

      @media (max-width: $breakpoint-tablet) {
        font-size: 1.1rem;
        padding: $spacing-sm;
        width: 100%;
        display: block;
      }
    }
  }
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: $spacing-xs;
  z-index: 1002;

  @media (max-width: $breakpoint-tablet) {
    display: block;
  }
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background-color: $color-text-primary;
  position: relative;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: $color-text-primary;
    transition: all 0.3s ease;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }

  &.open {
    background-color: transparent;

    &::before {
      top: 0;
      transform: rotate(45deg);
    }

    &::after {
      top: 0;
      transform: rotate(-45deg);
    }
  }
}

main {
  margin-top: 70px;

  @media (max-width: $breakpoint-mobile) {
    margin-top: 60px;
  }
}
</style>
