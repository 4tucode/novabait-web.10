<template>
  <div class="contact-view">
    <section class="contact-hero section">
      <div class="container">
        <div class="contact-content">
          <header class="contact-header fade-in-up">
            <h1 class="contact-title">Hablemos de tu proyecto</h1>
            <p class="contact-subtitle">
              Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad.
              Estamos aquí para escucharte y crear la solución perfecta para tu negocio.
            </p>
          </header>

          <div class="contact-form-wrapper">
            <article class="contact-form-container fade-in-up">
              <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
                <div class="form-group">
                  <label for="name" class="form-label">
                    Nombre completo <span class="required">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="form-input"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="email" class="form-label">
                      Email <span class="required">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="form-input"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label for="phone" class="form-label">Teléfono</label>
                    <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="form-input"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="company" class="form-label">Empresa / Organización</label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="form-input"
                    placeholder="Nombre de tu empresa (opcional)"
                  />
                </div>

                <div class="form-group">
                  <label for="projectType" class="form-label">
                    Tipo de proyecto <span class="required">*</span>
                  </label>
                  <select
                    id="projectType"
                    v-model="form.projectType"
                    class="form-input"
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="web">Página Web</option>
                    <option value="app">Aplicación Web</option>
                    <option value="ecommerce">Tienda Online / E-commerce</option>
                    <option value="redesign">Rediseño de sitio existente</option>
                    <option value="maintenance">Mantenimiento y soporte</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="budget" class="form-label">Presupuesto aproximado</label>
                  <select id="budget" v-model="form.budget" class="form-input">
                    <option value="">Selecciona un rango</option>
                    <option value="under-5k">Menos de 5.000€</option>
                    <option value="5k-10k">5.000€ - 10.000€</option>
                    <option value="10k-25k">10.000€ - 25.000€</option>
                    <option value="25k-50k">25.000€ - 50.000€</option>
                    <option value="over-50k">Más de 50.000€</option>
                    <option value="discuss">Prefiero discutirlo</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="description" class="form-label">
                    Describe tu proyecto <span class="required">*</span>
                  </label>
                  <textarea
                    id="description"
                    v-model="form.description"
                    class="form-input form-textarea"
                    rows="6"
                    placeholder="Cuéntanos en detalle qué necesitas, qué objetivos tienes, plazos, características especiales, etc."
                    required
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="timeline" class="form-label">Plazo estimado</label>
                  <select id="timeline" v-model="form.timeline" class="form-input">
                    <option value="">Selecciona un plazo</option>
                    <option value="urgent">Urgente (menos de 1 mes)</option>
                    <option value="1-3months">1 - 3 meses</option>
                    <option value="3-6months">3 - 6 meses</option>
                    <option value="6-12months">6 - 12 meses</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div class="form-group checkbox-group">
                  <label class="checkbox-label">
                    <input
                      v-model="form.acceptTerms"
                      type="checkbox"
                      class="checkbox-input"
                      required
                    />
                    <span class="checkbox-text">
                      Acepto la <a href="#" class="link">política de privacidad</a> y
                      el <a href="#" class="link">tratamiento de datos</a>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  class="btn btn-submit"
                  :disabled="isSubmitting"
                >
                  <span v-if="!isSubmitting">Enviar solicitud</span>
                  <span v-else>Enviando...</span>
                </button>

                <div v-if="submitMessage" class="submit-message" :class="submitMessageType" role="alert">
                  {{ submitMessage }}
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  description: '',
  timeline: '',
  acceptTerms: false
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  // Simulación de envío (aquí iría la lógica real de envío)
  setTimeout(() => {
    isSubmitting.value = false
    submitMessage.value = '¡Gracias por contactarnos! Te responderemos en breve.'
    submitMessageType.value = 'success'

    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      description: '',
      timeline: '',
      acceptTerms: false
    }

    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }, 1500)
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.contact-view {
  width: 100%;
  min-height: calc(100vh - 70px);

  @media (max-width: $breakpoint-mobile) {
    min-height: calc(100vh - 60px);
  }
}

.contact-hero {
  padding: $spacing-xl 0;
  background: linear-gradient(180deg, $color-background 0%, $color-background-section 100%);
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: $spacing-xl;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.contact-title {
  font-size: 3.5rem;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-md;
  color: $color-text-primary;
  letter-spacing: -0.02em;

  @media (max-width: $breakpoint-tablet) {
    font-size: 2.5rem;
  }

  @media (max-width: $breakpoint-mobile) {
    font-size: 2rem;
  }
}

.contact-subtitle {
  font-size: 1.2rem;
  color: $color-text-secondary;
  line-height: 1.7;

  @media (max-width: $breakpoint-mobile) {
    font-size: 1rem;
  }
}

.contact-form-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.contact-form-container {
  width: 100%;
  max-width: 750px;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: $spacing-xl;
  backdrop-filter: blur(10px);

  @media (max-width: $breakpoint-tablet) {
    max-width: 650px;
    padding: $spacing-lg;
  }

  @media (max-width: $breakpoint-mobile) {
    max-width: 100%;
    padding: $spacing-md;
    border-radius: 16px;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-md;

  @media (max-width: $breakpoint-mobile) {
    grid-template-columns: 1fr;
  }
}

.form-label {
  font-size: 0.95rem;
  font-weight: $font-weight-medium;
  color: $color-text-primary;

  .required {
    color: $color-accent-light;
  }
}

.form-input {
  width: 100%;
  padding: $spacing-sm $spacing-md;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: $color-text-primary;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: $color-accent-light;
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  option {
    background-color: $color-background;
    color: $color-text-primary;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.checkbox-group {
  margin-top: $spacing-xs;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: $spacing-sm;
  cursor: pointer;
  font-size: 0.9rem;
  color: $color-text-secondary;
  line-height: 1.5;
}

.checkbox-input {
  margin-top: 4px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: $color-accent-light;
  flex-shrink: 0;
}

.checkbox-text {
  flex: 1;
}

.link {
  color: $color-accent-light;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: $color-accent-bright;
    text-decoration: underline;
  }
}

.btn-submit {
  width: 100%;
  padding: $spacing-md;
  background: linear-gradient(135deg, $color-accent-light 0%, $color-accent-bright 100%);
  color: $color-background;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: $font-weight-semibold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: $spacing-sm;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(74, 158, 255, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.submit-message {
  padding: $spacing-md;
  border-radius: 10px;
  text-align: center;
  font-weight: $font-weight-medium;
  margin-top: $spacing-sm;

  &.success {
    background-color: rgba(74, 158, 255, 0.1);
    border: 1px solid rgba(74, 158, 255, 0.3);
    color: $color-accent-light;
  }

  &.error {
    background-color: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
  }
}

</style>

