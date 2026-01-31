<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import productsData from '../data/products.json';
import Button from 'primevue/button';

const { t } = useI18n();
const route = useRoute();
const productId = computed(() => Number(route.params.id));
const product = computed(() => productsData.find(p => p.id === productId.value));

if (!product.value) {
    // Handle not found
}
</script>

<template>
    <div v-if="product" class="product-detail-view animate-fade-in-up">
        <div class="container">
            <div class="product-grid">
                <div class="product-image-container">
                    <div class="image-wrapper">
                        <img :src="product.image" :alt="product.name" class="product-img" />
                    </div>
                </div>
                
                <div class="product-info">
                    <span class="product-id">{{ t('products.labels.productCode') }}: #{{ product.id }}</span>
                    <h1 class="product-name">{{ product.name }}</h1>
                    
                    <div class="product-description">
                        <h3>{{ t('products.labels.description') }}</h3>
                        <p>{{ t('products.dynamic.description', { name: product.name }) }}</p>
                    </div>

                    <div class="product-features" v-if="product.features && product.features.length">
                        <h3>{{ t('products.labels.features') }}</h3>
                        <ul class="feature-list">
                            <li v-for="(feature, index) in product.features" :key="index">
                                <i class="pi pi-check-circle"></i>
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <div class="product-actions">
                        <Button :label="t('products.labels.getQuote')" icon="pi pi-file-edit" class="cta-btn primary-btn" @click="$router.push('/contact')" />
                        <Button :label="t('products.labels.backToProducts')" icon="pi pi-arrow-left" severity="secondary" @click="$router.push('/products')" class="cta-btn secondary-btn" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-detail-view {
    padding: 12rem 0 8rem;
    min-height: 100vh;
    background: var(--bg-dark);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
}

.product-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 6rem;
    align-items: start;
}

.product-image-container {
    position: sticky;
    top: 120px;
}

.image-wrapper {
    background: #ffffff;
    border-radius: 40px;
    padding: 3rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
}

.product-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 20px;
}

.product-id {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.product-name {
    font-size: 4rem;
    font-weight: 900;
    color: var(--text-main);
    margin: 1rem 0 2rem;
    letter-spacing: -2px;
    line-height: 1;
}

.product-description h3, .product-features h3 {
    font-size: 1.5rem;
    color: var(--text-main);
    margin-bottom: 1.5rem;
    font-weight: 700;
}

.product-description p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 3rem;
}

.feature-list {
    list-style: none;
    padding: 0;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.feature-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--text-main);
    font-size: 1.1rem;
    background: #f8faff;
    padding: 1.2rem;
    border-radius: 15px;
    border: 1px solid rgba(3, 69, 174, 0.05);
}

.feature-list li i {
    color: var(--primary-color);
    font-size: 1.2rem;
}

.product-actions {
    display: flex;
    gap: 1.5rem;
}

.cta-btn {
    padding: 1.2rem 2.5rem !important;
    font-weight: 800 !important;
    border-radius: 20px !important;
}

.primary-btn {
    background: var(--primary-color) !important;
    color: #ffffff !important;
    border: none !important;
    box-shadow: 0 10px 20px rgba(3, 69, 174, 0.2);
}

.secondary-btn {
    background: transparent !important;
    color: var(--primary-color) !important;
    border: 2px solid var(--primary-color) !important;
}

@media (max-width: 1200px) {
    .product-grid {
        gap: 3rem;
    }
    .product-name {
        font-size: 3rem;
    }
}

@media (max-width: 991px) {
    .product-grid {
        grid-template-columns: 1fr;
    }
    .product-image-container {
        position: relative;
        top: 0;
        margin-bottom: 3rem;
    }
}
</style>
