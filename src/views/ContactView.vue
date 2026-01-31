<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const form = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
});

const isSubmitting = ref(false);
const submitted = ref(false);

const handleSubmit = () => {
    isSubmitting.value = true;
    // Simulate API call
    setTimeout(() => {
        isSubmitting.value = false;
        submitted.value = true;
        // In a real app, this would send an email to info@anilplas.com
        form.value = { name: '', email: '', phone: '', subject: '', message: '' };
    }, 1500);
};
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
            <div class="contact-grid">
                <!-- Contact Info -->
                <div class="info-sidebar animate-fade-in-up">
                    <div class="info-card">
                        <h3>{{ t('contact.infoTitle') }}</h3>
                        <div class="info-items">
                            <div class="info-item">
                                <div class="icon-box">
                                    <i class="pi pi-map-marker"></i>
                                </div>
                                <div class="text-box">
                                    <label>{{ t('contact.addressLabel') }}</label>
                                    <p>Saray Mah., Saraykent Cad., No:4 Kahramankazan / Ankara</p>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="icon-box">
                                    <i class="pi pi-phone"></i>
                                </div>
                                <div class="text-box">
                                    <label>{{ t('contact.phoneLabel') }}</label>
                                    <p><a href="tel:+905303175543">0530 317 55 43</a></p>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="icon-box">
                                    <i class="pi pi-envelope"></i>
                                </div>
                                <div class="text-box">
                                    <label>{{ t('contact.emailLabel') }}</label>
                                    <p><a href="mailto:info@anilplas.com">info@anilplas.com</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="social-links">
                            <a href="https://www.instagram.com/anilplas_a.s/" target="_blank" class="social-btn"><i class="pi pi-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="form-wrapper animate-fade-in-up" style="animation-delay: 0.2s;">
                    <form @submit.prevent="handleSubmit" class="modern-form">
                        <div class="form-header">
                            <h2>{{ t('contact.formTitle') }}</h2>
                            <p>{{ t('contact.formDesc') }}</p>
                        </div>

                        <div class="input-grid">
                            <div class="input-group">
                                <label>{{ t('contact.labels.name') }}</label>
                                <input v-model="form.name" type="text" :placeholder="t('contact.placeholders.name')" required />
                            </div>
                            <div class="input-group">
                                <label>{{ t('contact.labels.email') }}</label>
                                <input v-model="form.email" type="email" :placeholder="t('contact.placeholders.email')" required />
                            </div>
                        </div>

                        <div class="input-grid">
                            <div class="input-group">
                                <label>{{ t('contact.labels.phone') }}</label>
                                <input v-model="form.phone" type="tel" :placeholder="t('contact.placeholders.phone')" />
                            </div>
                            <div class="input-group">
                                <label>{{ t('contact.labels.subject') }}</label>
                                <input v-model="form.subject" type="text" :placeholder="t('contact.placeholders.subject')" />
                            </div>
                        </div>

                        <div class="input-group full-width">
                            <label>{{ t('contact.labels.message') }}</label>
                            <textarea v-model="form.message" rows="5" :placeholder="t('contact.placeholders.message')" required></textarea>
                        </div>

                        <button type="submit" class="submit-btn" :disabled="isSubmitting">
                            <span v-if="!isSubmitting">{{ t('contact.submit') }}</span>
                            <span v-else><i class="pi pi-spin pi-spinner mr-2"></i> {{ t('contact.submitting') }}</span>
                        </button>

                        <div v-if="submitted" class="success-message">
                            <i class="pi pi-check-circle"></i>
                            <span v-html="t('contact.success')"></span>
                        </div>
                    </form>
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
                    allowfullscreen 
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

.contact-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 4rem;
}

/* Info Sidebar */
.info-card {
    background: var(--primary-color);
    padding: 3rem;
    border-radius: 30px;
    color: #ffffff;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.info-card h3 {
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 2.5rem;
}

.info-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
}

.info-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.icon-box {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.text-box label {
    display: block;
    font-size: 0.9rem;
    opacity: 0.7;
    margin-bottom: 0.3rem;
    font-weight: 600;
}

.text-box p {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.4;
}

.text-box p a:hover {
    text-decoration: underline;
}

.social-links {
    margin-top: auto;
    display: flex;
    gap: 1rem;
}

.social-btn {
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.social-btn:hover {
    background: #ffffff;
    color: var(--primary-color);
    transform: translateY(-3px);
}

/* Modern Form */
.form-wrapper {
    background: #ffffff;
    padding: 4rem;
    border-radius: 30px;
    box-shadow: 0 30px 60px rgba(3, 69, 174, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.form-header {
    margin-bottom: 3rem;
}

.form-header h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.form-header p {
    color: var(--text-light);
}

.input-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.input-group label {
    font-weight: 700;
    color: var(--text-main);
    font-size: 0.95rem;
}

.input-group input, 
.input-group textarea {
    padding: 1.2rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-family: var(--font-body);
    font-size: 1rem;
    transition: all 0.3s ease;
    background-color: #ffffff !important;
    color: var(--text-main) !important;
}

.input-group input::placeholder,
.input-group textarea::placeholder {
    color: #94a3b8;
}

.input-group input:focus, 
.input-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: #ffffff !important;
    box-shadow: 0 0 0 4px rgba(3, 69, 174, 0.1);
}

.full-width {
    grid-column: span 2;
    margin-bottom: 2.5rem;
}

.submit-btn {
    background: var(--primary-color);
    color: #ffffff;
    padding: 1.2rem 3rem;
    border: none;
    border-radius: 12px;
    font-weight: 800;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}

.submit-btn:hover:not(:disabled) {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(56, 182, 255, 0.3);
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.success-message {
    margin-top: 2rem;
    padding: 1.5rem;
    background: #ecfdf5;
    color: #059669;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
}

/* Map Section */
.map-section {
    padding: 5rem 0 10rem;
}

.map-container {
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 1200px) {
    .container {
        padding: 0 2rem;
    }
}

@media (max-width: 991px) {
    .container {
        padding: 0 1.5rem;
    }
    
    .main-title {
        font-size: 2.5rem;
    }
    
    .contact-hero {
        padding: 8rem 0 4rem;
    }

    .contact-content {
        padding: 3rem 0;
    }

    .contact-grid {
        gap: 3rem;
    }
    
    .info-card {
        padding: 2rem;
        border-radius: 24px;
    }

    .info-card h3 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .form-wrapper {
        padding: 2rem;
        border-radius: 24px;
    }

    .form-header h2 {
        font-size: 2rem;
    }

    .map-section {
        padding: 3rem 0 6rem;
    }
}

@media (max-width: 768px) {
    .input-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .full-width {
        grid-column: span 1;
        margin-bottom: 2rem;
    }

    .main-title {
        font-size: 2rem;
    }

    .description {
        font-size: 1.1rem;
    }
}
</style>

