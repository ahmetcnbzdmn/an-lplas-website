<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Card from 'primevue/card';

const { t } = useI18n();

const features = computed(() => [
    {
        title: t('features.f1.title'),
        description: t('features.f1.desc'),
        icon: 'pi pi-box'
    },
    {
        title: t('features.f2.title'),
        description: t('features.f2.desc'),
        icon: 'pi pi-percentage'
    },
    {
        title: t('features.f3.title'),
        description: t('features.f3.desc'),
        icon: 'pi pi-cog'
    }
]);
</script>

<template>
    <section class="features-section">
        <div class="container">
            <div class="section-header">
                <span class="sub-title">{{ t('features.sub') }}</span>
                <h2 class="main-title">{{ t('features.title') }}</h2>
            </div>
            
            <div class="features-grid">
                <Card v-for="(feature, index) in features" :key="index" class="feature-card">
                    <template #header>
                        <div class="icon-header">
                            <div class="icon-avatar">
                                <i :class="feature.icon"></i>
                            </div>
                        </div>
                    </template>
                    <template #title>
                        <span class="card-title">{{ feature.title }}</span>
                    </template>
                    <template #content>
                        <p class="card-desc">{{ feature.description }}</p>
                    </template>
                </Card>
            </div>
        </div>
    </section>
</template>

<style scoped>
.features-section {
    padding: 8rem 0;
    background-color: var(--bg-light);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
}

.section-header {
    text-align: center;
    margin-bottom: 5rem;
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
    font-size: 3rem;
    font-weight: 800;
    color: var(--text-main);
    letter-spacing: -1px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
}

.feature-card {
    border: none;
    border-radius: 24px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: #ffffff;
    box-shadow: 0 10px 40px rgba(3, 69, 174, 0.05);
    text-align: center;
    padding: 2rem;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 30px 60px rgba(3, 69, 174, 0.1);
    border-color: rgba(3, 69, 174, 0.1);
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary-color);
    transform: scaleX(0);
    transition: transform 0.4s ease;
    transform-origin: left;
}

.feature-card:hover::before {
    transform: scaleX(1);
}

.icon-header {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.icon-avatar {
    width: 90px;
    height: 90px;
    background: #f8faff;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    transition: all 0.4s ease;
}

.feature-card:hover .icon-avatar {
    background: var(--primary-color);
    color: #ffffff;
    transform: rotateY(180deg);
}

.icon-avatar i {
    font-size: 2.5rem;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-main);
    margin-top: 1.5rem;
    display: block;
}

.card-desc {
    font-size: 1.1rem;
    color: var(--text-light);
    line-height: 1.7;
    margin-top: 1rem;
}

@media (max-width: 1200px) {
    .container {
        padding: 0 2rem;
    }
    .main-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }
}
</style>
