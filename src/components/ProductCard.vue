<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

const { t } = useI18n();

defineProps<{
    product: {
        id: number;
        name: string;
        description: string;
        image: string;
        features?: string[];
        category?: string;
    }
}>();
</script>

<template>
<Card class="product-card">
        <template #header>
            <div class="image-container">
                <img :src="product.image" :alt="product.name" class="product-image" />
            </div>
        </template>
        <template #title>
            <h3 class="product-title">{{ product.name }}</h3>
        </template>
        <template #content>
            <p class="product-desc">{{ t('products.dynamic.description', { name: product.name }) }}</p>
        </template>
        <template #footer>
            <div class="product-footer">
                <Button :label="t('products.labels.getQuote')" icon="pi pi-search" class="w-full detail-btn" @click="$router.push(`/products/${product.id}`)" />
            </div>
        </template>
    </Card>
</template>

<style scoped>
.product-card {
    height: 100%;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: #ffffff !important;
    border-radius: 24px !important;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05) !important;
    color: var(--text-main) !important;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(3, 69, 174, 0.1);
    border-color: rgba(3, 69, 174, 0.1) !important;
}

.image-container {
    height: 250px;
    overflow: hidden;
    background: #f8faff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.6s ease;
    border-radius: 12px;
}

.product-card:hover .product-image {
    transform: scale(1.1);
}

.product-title {
    font-size: 1.4rem;
    font-weight: 800;
    margin: 0;
    color: var(--text-main);
    letter-spacing: -0.5px;
}

.product-desc {
    color: var(--text-light);
    font-size: 0.95rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.product-footer {
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.detail-btn {
    background: var(--primary-color) !important;
    color: #ffffff !important;
    border: none !important;
    font-weight: 700 !important;
    padding: 0.8rem !important;
    border-radius: 12px !important;
    box-shadow: 0 5px 15px rgba(3, 69, 174, 0.2);
}

.detail-btn:hover {
    background: #02368a !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(3, 69, 174, 0.3);
}
</style>
