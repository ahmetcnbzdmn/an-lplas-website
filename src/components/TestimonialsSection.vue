<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';

const testimonials = ref([
  {
    name: "Ahmet DURMAZ",
    title: "Müşteri",
    testimonial: "Ne zaman arasam kendilerine ulaşıp gerekli malzemeleri temin edebiliyorum. Devamlı çalıştığım bir firma. Anıl Plas’ı kesinlikle öneririm. Uzun yıllar çalışma dileğiyle."
  },
  {
    name: "Nihat ÖZTÜRK",
    title: "Müşteri",
    testimonial: "Anıl Plas ürünlerini ilk kez sipariş ettikten sonra devamlı olarak sipariş geçiyorum. Kendileri toplu ürün isteklerimizde en iyi şekilde yardımcı oldular."
  },
  {
    name: "Mesut ERDİ",
    title: "Müşteri",
    testimonial: "Ürünler beklediğimden hızlı bir şekilde ulaştı. Gerek teslimat gerekse iletişim konusunda herhangi bir problem yaşamadık. Anıl Plas firmasına teşekkür ediyorum."
  }
]);

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<template>
    <section class="testimonials-section">
        <div class="container testimonial-container">
            <div class="section-header animate-fade-in-up">
                <span class="sub-title">Yorumlar</span>
                <h2 class="main-title">Müşterilerimiz Hakkımızda Ne Dedi?</h2>
                <div class="title-divider"></div>
            </div>

            <div class="testimonial-slider-wrapper animate-fade-in-up" style="animation-delay: 0.2s;">
                <Carousel 
                    :value="testimonials" 
                    :numVisible="1" 
                    :numScroll="1" 
                    circular 
                    :autoplayInterval="6000" 
                    class="custom-carousel"
                >
                    <template #item="slotProps">
                        <div class="testimonial-card-single-wrapper">
                            <div class="testimonial-card">
                                <div class="testimonial-body">
                                    <p class="quote-text">"{{ slotProps.data.testimonial }}"</p>
                                </div>
                                <div class="testimonial-footer">
                                    <div class="user-block">
                                        <div class="user-avatar">
                                            {{ slotProps.data.name.charAt(0) }}
                                        </div>
                                        <div class="user-meta">
                                            <span class="user-name">{{ slotProps.data.name }}</span>
                                            <span class="user-title">{{ slotProps.data.title }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonials-section {
    padding: 10rem 0;
    background-color: #ffffff !important;
    position: relative;
    overflow: hidden;
}

.testimonial-container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-header {
    text-align: center;
    margin-bottom: 5rem;
}

.sub-title {
    color: var(--primary-color);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.95rem;
    display: block;
    margin-bottom: 1.5rem;
}

.main-title {
    font-size: 3.8rem;
    font-weight: 900;
    color: var(--text-main);
    letter-spacing: -2px;
    line-height: 1.1;
    margin-bottom: 2rem;
}

.title-divider {
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    margin: 0 auto;
    border-radius: 2px;
    box-shadow: 0 4px 10px rgba(3, 69, 174, 0.2);
}

.testimonial-slider-wrapper {
    max-width: 900px;
    margin: 0 auto;
}

.testimonial-card-single-wrapper {
    padding: 2rem;
}

.testimonial-card {
    background: #ffffff;
    border-radius: 40px;
    padding: 4rem 5rem;
    box-shadow: 0 30px 60px rgba(3, 69, 174, 0.04);
    border: none !important;
    position: relative;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Quote header removed */

.testimonial-body {
    text-align: center;
}

.quote-text {
    font-size: 1.5rem;
    line-height: 1.8;
    color: var(--text-main);
    font-weight: 600;
    margin-bottom: 3.5rem;
    font-style: italic;
    color: #1e293b;
}

.testimonial-footer {
    display: flex;
    justify-content: center;
    border-top: 1px solid #f1f5f9;
    padding-top: 2.5rem;
}

.user-block {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.user-avatar {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary-color), #02368a);
    color: #ffffff;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.8rem;
    box-shadow: 0 15px 30px rgba(3, 69, 174, 0.25);
}

.user-meta {
    text-align: left;
}

.user-name {
    display: block;
    font-weight: 800;
    color: var(--text-main);
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
}

.user-title {
    color: var(--text-light);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}

:deep(.p-carousel-indicator) {
    margin: 0 6px;
}

:deep(.p-carousel-indicator-button) {
    background-color: rgba(3, 69, 174, 0.1) !important;
    width: 12px !important;
    height: 12px !important;
    border-radius: 50% !important;
    transition: all 0.3s ease !important;
    border: none !important;
}

:deep(.p-carousel-indicator.p-carousel-indicator-active .p-carousel-indicator-button) {
    background-color: var(--primary-color) !important;
    width: 35px !important;
    border-radius: 10px !important;
}

:deep(.p-carousel-indicators) {
    margin-top: 4rem;
}

:deep(.p-carousel-content),
:deep(.p-carousel-container),
:deep(.p-carousel-items-container),
:deep(.p-carousel-item) {
    background: transparent !important;
}

@media (max-width: 991px) {
    .main-title {
        font-size: 2.8rem;
    }
    .testimonial-card {
        padding: 3rem 2rem;
    }
    .quote-text {
        font-size: 1.25rem;
    }
}

@media (max-width: 768px) {
    .testimonial-card-single-wrapper {
        padding: 1rem 0;
    }
    .user-block {
        flex-direction: column;
        text-align: center;
    }
    .user-meta {
        text-align: center;
    }
}
</style>
