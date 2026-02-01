<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="about-view">
    <!-- Hero Section -->
    <div class="about-hero">
      <div class="container animate-fade-in">
        <span class="sub-heading">{{ t('about.heroSub') }}</span>
        <h1 class="main-title">{{ t('about.heroTitle') }}</h1>
        <div class="breadcrumb">
          <router-link to="/">{{ t('about.breadcrumbHome') }}</router-link>
          <i class="pi pi-chevron-right"></i>
          <span>{{ t('about.breadcrumbCurrent') }}</span>
        </div>
      </div>
    </div>

    <!-- main Content Section -->
    <section class="about-content-section section-padding">
      <div class="container">
        <div class="about-grid">
          <div class="about-image-wrapper animate-fade-in-left">
            <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" :alt="t('about.imgAlt')" class="about-img" />
            <div class="experience-badge">
              <span class="exp-number">{{ t('about.expNumber') }}</span>
              <span class="exp-text" v-html="t('about.expText')"></span>
            </div>
          </div>
          
          <div class="about-text-content animate-fade-in-right">
            <h2 class="section-title">{{ t('about.sectionTitle') }}</h2>
            <div class="text-story">
              <p>{{ t('about.p1') }}</p>
              <p>{{ t('about.p2') }}</p>
              <p>{{ t('about.p3') }}</p>
              <p class="highlight-text">{{ t('about.highlight') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="values-section section-padding">
      <div class="container">
        <div class="values-grid">
          <div class="value-card animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="value-icon">
              <i class="pi pi-globe"></i>
            </div>
            <h3>{{ t('about.values.v1.title') }}</h3>
            <p>{{ t('about.values.v1.desc') }}</p>
          </div>

          <div class="value-card animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="value-icon">
              <i class="pi pi-verified"></i>
            </div>
            <h3>{{ t('about.values.v2.title') }}</h3>
            <p>{{ t('about.values.v2.desc') }}</p>
          </div>

          <div class="value-card animate-fade-in-up" style="animation-delay: 0.3s">
            <div class="value-icon">
              <i class="pi pi-clock"></i>
            </div>
            <h3>{{ t('about.values.v3.title') }}</h3>
            <p>{{ t('about.values.v3.desc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  min-height: 100vh;
  background: #ffffff;
}

.section-padding {
  padding: 8rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

/* Hero Section */
.about-hero {
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg');
  background-size: cover;
  background-position: center;
  padding: 15rem 0 8rem;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.sub-heading {
  color: var(--primary-color);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
}

.main-title {
  font-size: 4.5rem;
  font-weight: 900;
  color: var(--text-main);
  margin-bottom: 2rem;
  letter-spacing: -2px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--text-light);
  font-weight: 600;
}

.breadcrumb a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb a:hover {
  color: var(--primary-color);
}

.breadcrumb i {
  font-size: 0.8rem;
  opacity: 0.5;
}

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 6rem;
  align-items: center;
}

.about-image-wrapper {
  position: relative;
}

.about-img {
  width: 100%;
  border-radius: 40px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
}

.experience-badge {
  position: absolute;
  bottom: -30px;
  right: -30px;
  background: var(--primary-color);
  color: #ffffff;
  padding: 2.5rem;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(3, 69, 174, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.exp-number {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.exp-text {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 2.5rem;
  letter-spacing: -1.5px;
}

.text-story p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.highlight-text {
  font-weight: 700;
  color: var(--primary-color) !important;
  font-size: 1.25rem !important;
  border-left: 4px solid var(--primary-color);
  padding-left: 1.5rem;
  margin-top: 2rem;
}

/* Values Section */
.values-section {
  background: #f8faff;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.value-card {
  background: #ffffff;
  padding: 3.5rem 3rem;
  border-radius: 32px;
  text-align: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.value-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 60px rgba(3, 69, 174, 0.1);
  border-color: rgba(3, 69, 174, 0.1);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: rgba(3, 69, 174, 0.05);
  color: var(--primary-color);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2.5rem;
  transition: all 0.3s ease;
}

.value-card:hover .value-icon {
  background: var(--primary-color);
  color: #ffffff;
  transform: rotateY(180deg);
}

.value-card h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.5rem;
}

.value-card p {
  color: var(--text-light);
  line-height: 1.6;
  font-weight: 500;
}

@media (max-width: 1200px) {
  .about-grid {
    gap: 3rem;
  }
}

@media (max-width: 991px) {
  .section-padding {
    padding: 4rem 0;
  }
  .container {
    padding: 0 1.5rem;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  .values-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .main-title {
    font-size: 2.5rem;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .experience-badge {
    position: relative;
    bottom: 0;
    right: 0;
    margin: 2rem auto 0;
    width: fit-content;
    padding: 2rem;
  }
  .about-hero {
    padding: 10rem 0 5rem;
  }
  .highlight-text {
    font-size: 1.1rem !important;
  }
}

@media (max-width: 576px) {
  .main-title {
    font-size: 2rem;
  }
  .sub-heading {
    font-size: 0.8rem;
  }
  .exp-number {
    font-size: 2.5rem;
  }
}
</style>
