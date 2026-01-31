<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProductCard from '@/components/ProductCard.vue';
import productsData from '@/data/products.json';
import Button from 'primevue/button';

const { t } = useI18n();
const products = ref(productsData);
const selectedCategory = ref('Tümü');

const categories = computed(() => [
    { label: t('products.categories.all'), key: 'Tümü' },
    { label: t('products.categories.ankapol10'), key: 'Ankapol 10 Serisi' },
    { label: t('products.categories.ankapol20'), key: 'Ankapol 20 Serisi' },
    { label: t('products.categories.bikamaxD10'), key: 'Bikamax Diomand 10 Serisi' },
    { label: t('products.categories.bikamaxD20'), key: 'Bikamax Diomand 20 Serisi' },
    { label: t('products.categories.bikamaxF10'), key: 'Bikamax Flex 10 Serisi' },
    { label: t('products.categories.bikamaxExtra'), key: 'Bikamax Ekstra' },
    { label: t('products.categories.bikamax'), key: 'Bikamax' },
    { label: t('products.categories.drainage'), key: 'Anıl Plas Drenaj Levhası' }
]);

const filteredProducts = computed(() => {
    if (selectedCategory.value === 'Tümü') {
        return products.value;
    }
    
    return products.value.filter(product => {
        const name = product.name.toLowerCase();
        const cat = selectedCategory.value;
        
        if (cat === 'Ankapol 10 Serisi') {
            return name.includes('ankapol') && (name.includes('pp') || name.includes('pc'));
        }
        if (cat === 'Ankapol 20 Serisi') {
            return name.includes('ankapol') && (name.includes('ep') || name.includes('ec'));
        }
        if (cat === 'Bikamax Diomand 10 Serisi') {
            return (name.includes('diamond') || name.includes('diomand')) && (name.includes('pp') || name.includes('pc'));
        }
        if (cat === 'Bikamax Diomand 20 Serisi') {
            return (name.includes('diamond') || name.includes('diomand')) && (name.includes('ep') || name.includes('ec'));
        }
        if (cat === 'Bikamax Flex 10 Serisi') {
            return name.includes('flex');
        }
        if (cat === 'Bikamax Ekstra') {
            return name.includes('ekstra');
        }
        if (cat === 'Bikamax') {
            return name.startsWith('bikamax') && 
                   !name.includes('diamond') && 
                   !name.includes('diomand') && 
                   !name.includes('flex') && 
                   !name.includes('ekstra');
        }
        if (cat === 'Anıl Plas Drenaj Levhası') {
            return name.includes('polietilen') || name.includes('naylon') || name.includes('drenaj');
        }
        
        return false;
    });
});

const selectCategory = (cat: string) => {
    selectedCategory.value = cat;
};
</script>

<template>
    <div class="products-view">
        <div class="header-section">
            <div class="container">
                <span class="sub-title">{{ t('products.heroSub') }}</span>
                <h1 class="main-title">{{ t('products.heroTitle') }}</h1>
                <p class="description">{{ t('products.heroDesc') }}</p>
            </div>
        </div>

        <div class="filter-section">
            <div class="container">
                <div class="filter-wrapper">
                    <Button 
                        v-for="cat in categories" 
                        :key="cat.key" 
                        :label="cat.label" 
                        :class="['filter-btn', { 'active': selectedCategory === cat.key }]" 
                        @click="selectCategory(cat.key)"
                        rounded
                        outlined
                        size="small"
                    />
                </div>
            </div>
        </div>
        
        <div class="container content-section">
            <div class="products-grid">
                <div v-for="product in filteredProducts" :key="product.id" class="col animate-fade-in-up">
                    <ProductCard :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.products-view {
    min-height: 100vh;
    background: #ffffff;
}

.header-section {
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
    color: var(--text-main);
    padding: 12rem 0 6rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
    filter: grayscale(100%);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
    position: relative;
    z-index: 1;
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
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    color: var(--text-main);
    letter-spacing: -2px;
}

.description {
    font-size: 1.2rem;
    color: var(--text-light);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
}

.content-section {
    padding: 6rem 4rem;
}

.filter-section {
    padding: 2rem 0;
    background: #f8faff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.filter-wrapper {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

:deep(.filter-btn) {
    border-color: rgba(3, 69, 174, 0.2) !important;
    color: var(--text-light) !important;
    background: transparent !important;
    font-weight: 600 !important;
    padding: 0.6rem 1.5rem !important;
    transition: all 0.3s ease !important;
}

:deep(.filter-btn:hover) {
    border-color: var(--primary-color) !important;
    color: var(--primary-color) !important;
    background: rgba(3, 69, 174, 0.05) !important;
}

:deep(.filter-btn.active) {
    background: var(--primary-color) !important;
    color: #ffffff !important;
    border-color: var(--primary-color) !important;
    box-shadow: 0 5px 15px rgba(3, 69, 174, 0.2) !important;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 3rem;
}

@media (max-width: 991px) {
    .container {
        padding: 0 1.5rem;
    }
    .main-title {
        font-size: 2.5rem;
    }
    .header-section {
        padding: 10rem 0 4rem;
    }
    .content-section {
        padding: 3rem 0;
    }
    .filter-section {
        padding: 1.5rem 0;
    }
    .filter-wrapper {
        gap: 0.5rem;
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 0.5rem;
        -webkit-overflow-scrolling: touch;
    }
    :deep(.filter-btn) {
        flex-shrink: 0;
        padding: 0.5rem 1rem !important;
        font-size: 0.8rem !important;
    }
    .products-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

@media (max-width: 576px) {
    .main-title {
        font-size: 2rem;
    }
    .sub-title {
        font-size: 0.8rem;
    }
    .description {
        font-size: 1rem;
    }
}
</style>
