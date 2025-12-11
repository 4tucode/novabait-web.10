<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero section">
      <div class="hero-content container fade-in-up">
        <h1 class="hero-title">
          Desarrollo Web
          <span class="highlight">Excepcional</span>
        </h1>
        <p class="hero-subtitle">
          Creamos soluciones web innovadoras que transforman tu negocio digital.
          Diseño minimalista, rendimiento óptimo y experiencia de usuario excepcional.
        </p>
        <div class="hero-actions">
          <a href="#contacto" class="btn btn-primary">Comenzar Proyecto</a>
          <a href="#servicios" class="btn btn-secondary">Ver Servicios</a>
        </div>
      </div>
    </section>

    <!-- Servicios Section -->
    <section id="servicios" class="services section">
      <div class="container">
        <header class="section-header fade-in-up">
          <h2 class="section-title">Nuestros Servicios</h2>
          <p class="section-description">
            Soluciones completas para tu presencia digital
          </p>
        </header>

        <div class="services-grid">
          <article class="service-card fade-in-up">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 class="service-title">Desarrollo Web</h3>
            <p class="service-description">
              Páginas web modernas y responsivas diseñadas para destacar y convertir visitantes en clientes.
            </p>
          </article>

          <article class="service-card fade-in-up">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 9h6v6H9z"/>
              </svg>
            </div>
            <h3 class="service-title">Aplicaciones Web</h3>
            <p class="service-description">
              Aplicaciones web personalizadas que optimizan procesos y mejoran la productividad de tu equipo.
            </p>
          </article>

          <article class="service-card fade-in-up">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 class="service-title">Optimización</h3>
            <p class="service-description">
              Mejora el rendimiento y la velocidad de tu sitio web para ofrecer la mejor experiencia.
            </p>
          </article>

          <article class="service-card fade-in-up">
            <div class="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3 class="service-title">Mantenimiento</h3>
            <p class="service-description">
              Soporte continuo y actualizaciones para mantener tu sitio web siempre al día y funcionando perfectamente.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Valores Section -->
    <section class="values section">
      <div class="container">
        <div class="values-content fade-in-up">
          <h2 class="values-title">Novedad, Optimización, Velocidad, Adaptabilidad</h2>
          <p class="values-description">
            Estos son los pilares que guían cada proyecto. Creamos soluciones que se adaptan
            a las necesidades de tu negocio, con tecnología de vanguardia y un enfoque en la
            excelencia técnica.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contacto" class="cta section">
      <div class="container">
        <div class="cta-content fade-in-up">
          <h2 class="cta-title">¿Listo para comenzar?</h2>
          <p class="cta-description">
            Hablemos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>
          <a href="#contacto" class="btn btn-primary btn-large">Contactar Ahora</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// HomeView component
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.home-view {
  width: 100%;
}

// Hero Section
.hero {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, $color-background 0%, $color-background-section 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(74, 158, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: $breakpoint-mobile) {
    min-height: calc(100vh - 60px);
    padding: $spacing-lg 0;
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: $font-weight-bold;
  line-height: 1.1;
  margin-bottom: $spacing-md;
  color: $color-text-primary;
  letter-spacing: -0.02em;

  .highlight {
    color: $color-accent-light;
    display: block;
  }

  @media (max-width: $breakpoint-tablet) {
    font-size: 3rem;
  }

  @media (max-width: $breakpoint-mobile) {
    font-size: 2rem;
    margin-bottom: $spacing-sm;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: $color-text-secondary;
  margin-bottom: $spacing-lg;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: $breakpoint-mobile) {
    font-size: 1rem;
    margin-bottom: $spacing-md;
  }
}

.hero-actions {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: $breakpoint-mobile) {
    flex-direction: column;
    align-items: stretch;
    gap: $spacing-sm;
  }
}

// Buttons
.btn {
  display: inline-block;
  padding: $spacing-sm $spacing-lg;
  border-radius: 8px;
  text-decoration: none;
  font-weight: $font-weight-medium;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &.btn-primary {
    background-color: $color-accent-light;
    color: $color-background;

    &:hover {
      background-color: $color-accent-bright;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(74, 158, 255, 0.3);
    }
  }

  &.btn-secondary {
    background-color: transparent;
    color: $color-text-primary;
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: $color-accent-light;
      color: $color-accent-light;
    }
  }

  &.btn-large {
    padding: $spacing-md $spacing-xl;
    font-size: 1.1rem;
  }
}

// Services Section
.services {
  background-color: $color-background-section;
}

.section-header {
  text-align: center;
  margin-bottom: $spacing-xl;
}

.section-title {
  font-size: 3rem;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-sm;
  color: $color-text-primary;
  letter-spacing: -0.02em;

  @media (max-width: $breakpoint-mobile) {
    font-size: 2rem;
  }
}

.section-description {
  font-size: 1.2rem;
  color: $color-text-secondary;

  @media (max-width: $breakpoint-mobile) {
    font-size: 1rem;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: $spacing-lg;

  @media (max-width: $breakpoint-mobile) {
    grid-template-columns: 1fr;
    gap: $spacing-md;
  }
}

.service-card {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: $spacing-lg;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
    border-color: rgba(74, 158, 255, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
}

.service-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto $spacing-md;
  color: $color-accent-light;

  svg {
    width: 100%;
    height: 100%;
  }
}

.service-title {
  font-size: 1.5rem;
  font-weight: $font-weight-semibold;
  margin-bottom: $spacing-sm;
  color: $color-text-primary;
}

.service-description {
  color: $color-text-secondary;
  line-height: 1.6;
}

// Values Section
.values {
  background-color: $color-background;
  text-align: center;
}

.values-content {
  max-width: 900px;
  margin: 0 auto;
}

.values-title {
  font-size: 2.5rem;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-md;
  color: $color-text-primary;
  line-height: 1.3;

  @media (max-width: $breakpoint-mobile) {
    font-size: 1.8rem;
  }
}

.values-description {
  font-size: 1.2rem;
  color: $color-text-secondary;
  line-height: 1.8;

  @media (max-width: $breakpoint-mobile) {
    font-size: 1rem;
  }
}

// CTA Section
.cta {
  background: linear-gradient(180deg, $color-background-section 0%, $color-background 100%);
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: 3rem;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-md;
  color: $color-text-primary;

  @media (max-width: $breakpoint-mobile) {
    font-size: 2rem;
  }
}

.cta-description {
  font-size: 1.2rem;
  color: $color-text-secondary;
  margin-bottom: $spacing-lg;
  line-height: 1.6;

  @media (max-width: $breakpoint-mobile) {
    font-size: 1rem;
  }
}
</style>
