<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';

const { t } = useI18n();
const heroImage = "https://static.wixstatic.com/media/dcd026_0d03d153b18c4a7f9b7f901f524f2c82~mv2.png/v1/fill/w_1119,h_511,q_90,enc_avif,quality_auto/dcd026_0d03d153b18c4a7f9b7f901f524f2c82~mv2.png";
</script>

<template>
    <div class="hero-section">
        <div class="hero-banner" :style="{ backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.4)), url(${heroImage})` }">
            <div class="container hero-container animate-fade-in">
                <div class="hero-content">
                    <h1 class="hero-title" v-html="t('hero.title', { 
                        accent: `<span class='accent-text'>${t('hero.accent')}</span>`, 
                        block: `<span class='block-text'>${t('hero.block')}</span>` 
                    })"></h1>
                    <div class="hero-actions">
                        <Button :label="t('hero.about')" size="large" rounded class="hero-btn primary-btn" @click="$router.push('/about')" />
                        <Button :label="t('hero.contact')" size="large" rounded outlined class="hero-btn secondary-btn" @click="$router.push('/contact')" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-section {
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
}

.hero-banner {
    height: 90vh;
    min-height: 700px;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    color: var(--text-main);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
    width: 100%;
}

.hero-content {
    max-width: 900px;
}

.hero-title {
    font-size: 6rem;
    font-weight: 900;
    margin-bottom: 2.5rem;
    line-height: 1;
    letter-spacing: -3px;
    color: var(--text-main);
}

.accent-text {
    color: var(--primary-color);
    display: inline;
}

.block-text {
    display: block;
    font-weight: 900;
}

.hero-actions {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
}

.hero-btn {
    padding: 20px 50px !important;
    font-weight: 800 !important;
    font-size: 1.15rem !important;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.primary-btn {
    background: var(--primary-color) !important;
    color: #ffffff !important;
    border: none !important;
    box-shadow: 0 15px 35px rgba(3, 69, 174, 0.2);
}

.primary-btn:hover {
    transform: translateY(-5px);
    background: #02368a !important;
    box-shadow: 0 20px 45px rgba(3, 69, 174, 0.3);
}

.secondary-btn {
    color: var(--primary-color) !important;
    border: 2px solid var(--primary-color) !important;
    background: transparent !important;
}

.secondary-btn:hover {
    background: rgba(3, 69, 174, 0.05) !important;
    transform: translateY(-5px);
}

.animate-fade-in {
    animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 1200px) {
    .hero-title {
        font-size: 4rem;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 2rem;
    }
    .hero-title {
        font-size: 3rem;
        text-align: center;
    }
    .hero-actions {
        flex-direction: column;
        align-items: center;
    }
    .hero-btn {
        width: 100%;
        max-width: 300px;
    }
}
</style>
