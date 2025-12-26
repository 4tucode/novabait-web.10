<template>
  <div class="about">
    <div class="about-container">
      <h1 class="about-title">Sobre Nosotros</h1>

      <div class="team-grid">
        <div class="team-member">
          <div class="photo-wrapper">
            <div class="circle-ring circle-ring-1"></div>
            <div class="circle-ring circle-ring-2"></div>
            <a href="https://www.linkedin.com/in/didier-bonsundi/" target="_blank" rel="noopener noreferrer"
              class="photo-link">
              <div class="photo-container">
                <img src="@/assets/didier.jpeg" alt="Didier" class="member-photo" />
                <div class="photo-overlay"></div>
                <div class="circle-border"></div>
              </div>
            </a>
          </div>
          <div class="member-info">
            <h2 class="member-name">F.D Bonsundi Nzambi</h2>
            <p class="member-role">Desarrollador web</p>
          </div>
        </div>

        <div class="team-member">
          <div class="photo-wrapper">
            <div class="circle-ring circle-ring-1"></div>
            <div class="circle-ring circle-ring-2"></div>
            <a href="https://www.linkedin.com/in/fortunato-yekue-nzambi-82489b75/" target="_blank"
              rel="noopener noreferrer" class="photo-link">
              <div class="photo-container">
                <img src="@/assets/foty.jpeg" alt="Foty" class="member-photo" />
                <div class="photo-overlay"></div>
                <div class="circle-border"></div>
              </div>
            </a>
          </div>
          <div class="member-info">
            <h2 class="member-name">F. Yekue Nzambi</h2>
            <p class="member-role">Desarrollador web</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
}

.about-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.about-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 4rem;
  letter-spacing: 2px;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  align-items: center;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.team-member:nth-child(1) {
  animation-delay: 0.4s;
}

.team-member:nth-child(2) {
  animation-delay: 0.6s;
}

.photo-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  opacity: 0.3;
  animation: rotate 20s linear infinite;
}

.circle-ring-1 {
  width: 100%;
  height: 100%;
  border-color: rgba(74, 158, 255, 0.4);
  animation-duration: 25s;
  animation-direction: normal;
}

.circle-ring-2 {
  width: 90%;
  height: 90%;
  border-color: rgba(107, 182, 255, 0.3);
  animation-duration: 18s;
  animation-direction: reverse;
}

.photo-link {
  display: block;
  text-decoration: none;
  cursor: pointer;
}

.photo-container {
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.photo-wrapper:hover .circle-ring-1 {
  animation-duration: 15s;
  opacity: 0.6;
}

.photo-wrapper:hover .circle-ring-2 {
  animation-duration: 12s;
  opacity: 0.5;
}

.photo-link:hover .photo-container {
  transform: scale(1.08) rotate(5deg);
}

.photo-link:hover .photo-container .circle-border {
  opacity: 1;
  transform: scale(1.05);
}

.photo-link:hover .photo-container .photo-overlay {
  opacity: 0.7;
}

.photo-link:hover .photo-container .member-photo {
  transform: scale(1.1);
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center,
      rgba(26, 26, 46, 0.2) 0%,
      rgba(74, 158, 255, 0.15) 50%,
      rgba(107, 182, 255, 0.1) 100%);
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.circle-border {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 50%;
  border: 3px solid transparent;
  background: linear-gradient(135deg, rgba(74, 158, 255, 0.6), rgba(107, 182, 255, 0.3)) padding-box,
    linear-gradient(135deg, rgba(74, 158, 255, 0.8), rgba(107, 182, 255, 0.4)) border-box;
  background-clip: padding-box, border-box;
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;
  z-index: -1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.member-info {
  text-align: center;
}

.member-name {
  font-size: 2rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.member-role {
  font-size: 1.1rem;
  color: #4a9eff;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.6;
  max-width: 400px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .about {
    padding: 2rem 1rem;
  }

  .about-title {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .photo-wrapper {
    width: 280px;
    height: 280px;
  }

  .photo-container {
    width: 240px;
    height: 240px;
  }

  .member-role {
    max-width: 100%;
    font-size: 0.95rem;
  }

  .member-name {
    font-size: 1.5rem;
  }

  .member-role {
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .team-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
