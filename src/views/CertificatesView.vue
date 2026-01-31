<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const certificates = computed(() => [
  {
    title: t('certificates.items.tse.title'),
    description: t('certificates.items.tse.desc'),
    link: "/documents/drenaj-tse.pdf",
    icon: "pi pi-verified",
    color: "#0345ae"
  },
  {
    title: t('certificates.items.marka.title'),
    description: t('certificates.items.marka.desc'),
    link: "/documents/marka-tescil.pdf",
    icon: "pi pi-shield",
    color: "#d4af37"
  }
]);
</script>

<template>
  <div class="certificates-view">
    <!-- Hero Section -->
    <div class="certs-hero">
      <div class="container animate-fade-in">
        <span class="sub-heading">{{ t('certificates.heroSub') }}</span>
        <h1 class="main-title">{{ t('certificates.heroTitle') }}</h1>
        <div class="breadcrumb">
          <router-link to="/">{{ t('nav.home') }}</router-link>
          <i class="pi pi-chevron-right"></i>
          <span>{{ t('certificates.breadcrumbCurrent') }}</span>
        </div>
      </div>
    </div>

    <!-- main Content Section -->
    <section class="certs-content-section section-padding">
      <div class="container">
        <div class="certs-intro animate-fade-in-up">
          <h2 v-html="t('certificates.introTitle')"></h2>
          <p>{{ t('certificates.introDesc') }}</p>
        </div>

        <div class="certs-grid">
          <div 
            v-for="(cert, index) in certificates" 
            :key="index" 
            class="cert-card animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="cert-info">
              <div class="cert-header">
                <div class="cert-icon-mini" :style="{ backgroundColor: cert.color }">
                  <i :class="cert.icon"></i>
                </div>
                <h3>{{ cert.title }}</h3>
              </div>
              <p>{{ cert.description }}</p>
              <div class="cert-footer">
                <span class="cert-badge">{{ t('certificates.officialBadge') }}</span>
                <a :href="cert.link" target="_blank" class="download-link">
                  {{ t('certificates.view') }} <i class="pi pi-external-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.certificates-view {
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
.certs-hero {
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://primefaces.org/cdn/primevue/images/galleria/galleria8.jpg');
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

/* Intro */
.certs-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 6rem;
}

.certs-intro h2 {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.5rem;
}

.accent {
  color: var(--primary-color);
}

.certs-intro p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-light);
  font-weight: 500;
}

/* Grid */
.certs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.cert-card {
  background: #ffffff;
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
}

.cert-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(3, 69, 174, 0.08);
  border-color: var(--primary-color);
}

.cert-info {
  padding: 2.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
}

.cert-icon-mini {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
}

.cert-header h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  margin: 0;
}

.cert-info p {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.cert-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f5f9;
}

.cert-badge {
  padding: 0.5rem 1rem;
  background: #f0f7ff;
  color: var(--primary-color);
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}

.download-link {
  color: var(--primary-color);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 0.95rem;
}

.download-link:hover {
  text-decoration: underline;
}

@media (max-width: 991px) {
  .section-padding {
    padding: 4rem 0;
  }
  .container {
    padding: 0 1.5rem;
  }
  .main-title {
    font-size: 2.5rem;
  }
  .certs-hero {
    padding: 10rem 0 5rem;
  }
  .certs-intro h2 {
    font-size: 1.8rem;
  }
  .certs-intro p {
    font-size: 1rem;
  }
  .certs-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .cert-info {
    padding: 2rem;
  }
  .cert-header h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .main-title {
    font-size: 2rem;
  }
  .sub-heading {
    font-size: 0.8rem;
  }
}
</style>
