<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import FeatureCards from '../components/FeatureCards.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';
</script>

<template>
  <div class="home-view">
    <HeroSection class="animate-fade-in-up" />
    
    <section class="about-preview animate-fade-in-up">
        <div class="container">
            <div class="about-grid">
                <div class="about-content">
                    <span class="sub-title">Anıl Plas Hakkında</span>
                    <h2 class="main-title">30 Yıllık Tecrübe ve Yenilikçi Üretim</h2>
                    <p class="description">Anıl Plas Plastik İnşaat İzolasyon İmalat Sanayi A.Ş. 30 yıldır sektörde Su Yalıtım Malzemeleri, Membran ve Kiremit Altı Örtüleri üreterek hizmet vermektedir. 2019 yılında da Anıl Plas markası ile temel duvarları Drenaj Levhası ve Polietilen Naylon üretimine başlayarak gücüne güç katmıştır.</p>
                    
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-number">30+</span>
                            <span class="stat-label">Yıllık Tecrübe</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">100%</span>
                            <span class="stat-label">Yerli Üretim</span>
                        </div>
                         <div class="stat-item">
                            <span class="stat-number">40+</span>
                            <span class="stat-label">Ürün Çeşidi</span>
                        </div>
                    </div>
                </div>
                <div class="about-image-wrapper">
                     <img src="https://static.wixstatic.com/media/dcd026_0d03d153b18c4a7f9b7f901f524f2c82~mv2.png/v1/fill/w_1119,h_511,q_90,enc_avif,quality_auto/dcd026_0d03d153b18c4a7f9b7f901f524f2c82~mv2.png" alt="Anıl Plas Fabrika" class="about-img"/>
                     <div class="experience-badge">
                        <span class="years">30</span>
                        <span class="text">Yıllık Güven</span>
                     </div>
                </div>
            </div>
        </div>
    </section>

    <FeatureCards class="animate-fade-in-up" />

    <TestimonialsSection class="animate-fade-in-up" />
  </div>
</template>

<style scoped>
.about-preview {
    padding: 10rem 0;
    background: #ffffff;
    color: var(--text-main);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
}

.about-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 6rem;
    align-items: center;
}

.sub-title {
    color: var(--primary-color);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 1rem;
}

.main-title {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--text-main);
    line-height: 1.1;
    margin-bottom: 2rem;
    letter-spacing: -1.5px;
}

.description {
    font-size: 1.15rem;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 3rem;
    max-width: 600px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.stat-item {
    display: flex;
    flex-direction: column;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 1rem;
    color: var(--text-light);
    font-weight: 600;
}

.about-image-wrapper {
    position: relative;
}

.about-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 0 30px 60px rgba(3, 69, 174, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.experience-badge {
    position: absolute;
    bottom: -30px;
    right: -30px;
    background: var(--primary-color);
    color: #ffffff;
    padding: 2.5rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 15px 35px rgba(3, 69, 174, 0.2);
}

.experience-badge .years {
    font-size: 3rem;
    font-weight: 900;
    line-height: 1;
}

.experience-badge .text {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

@media (max-width: 1200px) {
    .container {
        padding: 0 2rem;
    }
    .about-grid {
        gap: 3rem;
    }
    .main-title {
        font-size: 2.8rem;
    }
}

@media (max-width: 991px) {
    .about-grid {
        grid-template-columns: 1fr;
    }
    .about-image-wrapper {
        margin-top: 4rem;
    }
    .experience-badge {
        right: 0;
        bottom: -20px;
    }
}
</style>
