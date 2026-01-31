<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';

const { t } = useI18n();
const references = ref([
  "İSTANBUL TEKNİK İNŞAAT SANAYİ VE TİCARET A.Ş",
  "ESCO TEKNİK İNŞ.TAAH.NAK.SAN.VE TİC.LTD.ŞTİ.",
  "GAFFAROĞLU İZO.YAPI İNŞ.MALZ.LTD.ŞTİ.",
  "GÜLYAPAN YAPI VE YALITIM MALZ.A.Ş.",
  "TİMAŞ METAL İNŞ. SAN.VE TİC.A.Ş.",
  "ENTEGRE HARÇ A.Ş.",
  "KONAR İNŞ İZOL YAPI MALZ. SAN.TİC.",
  "CENTİLMEN İNŞ.MAK.ELETR.MAD.TAAH.LTD.ŞTİ.",
  "NUR-DİL GRUP İK.DAN.GIDA İNŞ. TAŞ. TEM.İTH.İHR.SAN.TİC.LTD.ŞTİ.",
  "HUZUROĞLU LTD. ŞTİ.",
  "KİRİKLER NAL. HIR. A.Ş.",
  "ALİBEYOĞLU HIRDAVAT BOYA SAN.TİC.A. Ş.",
  "YILTAŞ YAPI MAR. TİC. VE SAN. LTD.ŞTİ.",
  "BTM BİTÜMLÜ TECRİT MADDELERİ SAN VE TİC A.Ş",
  "ONDULINE AVRASYA A.Ş."
]);
</script>

<template>
  <div class="references-view">
    <!-- Hero Section -->
    <div class="refs-hero">
      <div class="container animate-fade-in">
        <span class="sub-heading">{{ t('references.heroSub') }}</span>
        <h1 class="main-title">{{ t('references.heroTitle') }}</h1>
        <div class="breadcrumb">
          <router-link to="/">{{ t('nav.home') }}</router-link>
          <i class="pi pi-chevron-right"></i>
          <span>{{ t('references.breadcrumbCurrent') }}</span>
        </div>
      </div>
    </div>

    <!-- Intro Section -->
    <section class="intro-section animate-fade-in-up">
      <div class="container">
        <div class="intro-content">
          <h2 v-html="t('references.introTitle')"></h2>
          <p>{{ t('references.introDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- References Grid -->
    <section class="grid-section">
      <div class="container">
        <div class="refs-grid">
          <div 
            v-for="(refName, index) in references" 
            :key="index" 
            class="ref-card animate-fade-in-up"
            :style="{ animationDelay: `${(index % 3) * 0.1}s` }"
          >
            <div class="ref-icon">
              <i class="pi pi-building"></i>
            </div>
            <div class="ref-name">{{ refName }}</div>
            <div class="hover-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section animate-fade-in-up">
      <div class="container">
        <div class="cta-card">
          <h3>{{ t('references.cta.title') }}</h3>
          <p>{{ t('references.cta.desc') }}</p>
          <router-link to="/contact">
            <Button :label="t('references.cta.btn')" icon="pi pi-envelope" size="large" rounded class="cta-btn" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.references-view {
  min-height: 100vh;
  background: #ffffff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

/* Hero Section */
.refs-hero {
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg');
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

/* Intro Section */
.intro-section {
  padding: 8rem 0 4rem;
  text-align: center;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
}

.intro-content h2 {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.5rem;
}

.accent {
  color: var(--primary-color);
}

.intro-content p {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-light);
  font-weight: 500;
}

/* Grid Section */
.grid-section {
  padding: 4rem 0 8rem;
}

.refs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
}

.ref-card {
  background: #ffffff;
  padding: 3rem 2rem;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  min-height: 220px;
  justify-content: center;
}

.ref-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(3, 69, 174, 0.1);
  border-color: var(--primary-color);
}

.ref-icon {
  width: 50px;
  height: 50px;
  background: rgba(3, 69, 174, 0.05);
  color: var(--primary-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.ref-card:hover .ref-icon {
  background: var(--primary-color);
  color: #ffffff;
  transform: scale(1.1) rotate(5deg);
}

.ref-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.5;
  padding: 0 1rem;
}

.hover-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background: var(--primary-color);
  transition: width 0.4s ease;
}

.ref-card:hover .hover-accent {
  width: 100%;
}

/* CTA Section */
.cta-section {
  padding: 0 0 10rem;
}

.cta-card {
  background: var(--primary-color);
  border-radius: 40px;
  padding: 5rem 4rem;
  text-align: center;
  color: #ffffff;
  box-shadow: 0 30px 60px rgba(3, 69, 174, 0.3);
}

.cta-card h3 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
  color: #ffffff;
}

.cta-card p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-btn {
  background: #ffffff !important;
  color: var(--primary-color) !important;
  font-weight: 800 !important;
  padding: 1rem 3rem !important;
  border: none !important;
  transition: all 0.3s ease !important;
}

.cta-btn:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 991px) {
  .container {
    padding: 0 1.5rem;
  }
  .main-title {
    font-size: 2.5rem;
  }
  .refs-hero {
    padding: 10rem 0 5rem;
  }
  .intro-section {
    padding: 4rem 0 2rem;
  }
  .intro-content h2 {
    font-size: 1.8rem;
  }
  .intro-content p {
    font-size: 1rem;
  }
  .grid-section {
    padding: 2rem 0 4rem;
  }
  .refs-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .ref-card {
    min-height: 160px;
    padding: 2rem 1.5rem;
  }
  .cta-section {
    padding: 0 0 6rem;
  }
  .cta-card {
    padding: 3rem 1.5rem;
    border-radius: 30px;
  }
  .cta-card h3 {
    font-size: 1.8rem;
  }
  .cta-card p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
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
