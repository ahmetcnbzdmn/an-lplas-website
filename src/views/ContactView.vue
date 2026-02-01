<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="contact-view">
    <!-- Hero Section -->
    <section class="contact-hero">
        <div class="container">
            <span class="sub-title animate-fade-in-up">{{ t('contact.heroSub') }}</span>
            <h1 class="main-title animate-fade-in-up">{{ t('contact.heroTitle') }}</h1>
            <p class="description animate-fade-in-up">{{ t('contact.heroDesc') }}</p>
        </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
        <div class="container">
            <div class="info-grid-modern animate-fade-in-up">
                <!-- Address Card -->
                <div class="contact-card-modern">
                    <div class="card-icon">
                        <i class="pi pi-map-marker"></i>
                    </div>
                    <h3>{{ t('contact.addressLabel') }}</h3>
                    <p class="card-text">Saray Mah., Saraykent Cad., No:4 Kahramankazan / Ankara</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Saray+Mah.,+Saraykent+Cad.,+No:4+Kahramankazan/Ankara" target="_blank" class="card-link">
                        {{ t('certificates.view') }} <i class="pi pi-external-link ml-2"></i>
                    </a>
                </div>

                <!-- Phone Card -->
                <div class="contact-card-modern">
                    <div class="card-icon">
                        <i class="pi pi-phone"></i>
                    </div>
                    <h3>{{ t('contact.phoneLabel') }}</h3>
                    <p class="card-text">0530 317 55 43</p>
                    <a href="tel:+905303175543" class="card-link">
                        {{ t('hero.contact') }} <i class="pi pi-arrow-right ml-2"></i>
                    </a>
                </div>

                <!-- Email Card -->
                <div class="contact-card-modern">
                    <div class="card-icon">
                        <i class="pi pi-envelope"></i>
                    </div>
                    <h3>{{ t('contact.emailLabel') }}</h3>
                    <p class="card-text">info@anilplas.com</p>
                    <a href="mailto:info@anilplas.com" class="card-link">
                        {{ t('hero.contact') }} <i class="pi pi-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>

            <div class="social-section animate-fade-in-up" style="animation-delay: 0.2s;">
                <div class="social-label">{{ t('references.introTitle') }}</div>
                <div class="social-links-modern">
                    <a href="https://www.instagram.com/anilplas_a.s/" target="_blank" class="social-btn-modern">
                        <i class="pi pi-instagram"></i>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <section class="map-section animate-fade-in-up" style="animation-delay: 0.4s;">
        <div class="container">
            <div class="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.0645065415758!2d32.61055555!3d40.09111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA1JzI4LjAiTiAzMsKwMzYnMzguMCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                    width="100%" 
                    height="450" 
                    style="border:0;" 
                    :allowfullscreen="true" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>
  </div>
</template>

<style scoped>
.contact-view {
    background: #ffffff;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
}

/* Hero Section */
.contact-hero {
    padding: 10rem 0 5rem;
    background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
    text-align: center;
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
    font-size: 1.25rem;
    color: var(--text-light);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Contact Content */
.contact-content {
    padding: 5rem 0;
}

/* Contact Content */
.contact-content {
    padding: 0 0 5rem;
}

.info-grid-modern {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin-bottom: 4rem;
}

.contact-card-modern {
    background: #ffffff;
    padding: 3rem 2rem;
    border-radius: 30px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-card-modern:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(3, 69, 174, 0.08);
    border-color: rgba(3, 69, 174, 0.1);
}

.card-icon {
    width: 80px;
    height: 80px;
    background: #f8faff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
    transition: all 0.3s ease;
}

.contact-card-modern:hover .card-icon {
    background: var(--primary-color);
    color: #ffffff;
    transform: rotate(10deg);
}

.contact-card-modern h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-main);
    margin-bottom: 1rem;
}

.card-text {
    color: var(--text-light);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    flex-grow: 1;
}

.card-link {
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 700;
    text-decoration: none;
    font-size: 1rem;
    transition: gap 0.3s ease;
}

.card-link:hover {
    gap: 0.8rem;
}

.social-section {
    text-align: center;
    padding: 4rem;
    background: #f8faff;
    border-radius: 30px;
    border: 1px solid rgba(3, 69, 174, 0.05);
}

.social-label {
    font-size: 0.9rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary-color);
    margin-bottom: 2rem;
}

.social-links-modern {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.social-btn-modern {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    background: #ffffff;
    border-radius: 15px;
    color: var(--text-main);
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.social-btn-modern:hover {
    background: #000000;
    color: #ffffff;
    transform: translateY(-5px);
}

.social-btn-modern i {
    font-size: 1.4rem;
    color: #E1306C; /* Instagram color */
}

.social-btn-modern:hover i {
    color: #ffffff;
}

/* Map Section */
.map-section {
    padding: 0 0 10rem;
}

.map-container {
    border-radius: 40px;
    overflow: hidden;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

/* Responsive */
@media (max-width: 1200px) {
    .info-grid-modern {
        gap: 1.5rem;
    }
}

@media (max-width: 991px) {
    .info-grid-modern {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin: 0 auto 4rem;
    }

    .social-section {
        padding: 3rem 1.5rem;
    }

    .main-title {
        font-size: 3rem;
    }
}

@media (max-width: 768px) {
    .main-title {
        font-size: 2.5rem;
    }

    .contact-hero {
        padding: 10rem 0 5rem;
    }
}
</style>

