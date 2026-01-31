<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from 'vue-i18n';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import productsData from '../data/products.json';

const { t, locale } = useI18n();

const isSticky = ref(false);
const showMegaMenu = ref(false);
const currentLang = computed(() => locale.value);

const setLanguage = (lang: string) => {
    locale.value = lang;
};

const activeCategory = ref('Ankapol 10 Serisi');
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
    if (showMobileMenu.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

const closeMobileMenu = () => {
    showMobileMenu.value = false;
    document.body.style.overflow = '';
};

const handleScroll = () => {
    isSticky.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const groupedProducts = computed(() => {
    const groups: Record<string, any[]> = {
        'Ankapol 10 Serisi': [],
        'Ankapol 20 Serisi': [],
        'Bikamax Diomand 10 Serisi': [],
        'Bikamax Diomand 20 Serisi': [],
        'Bikamax Flex 10 Serisi': [],
        'Bikamax Ekstra': [],
        'Bikamax': [],
        'Anıl Plas Drenaj Levhası': []
    };

    productsData.forEach(product => {
        const name = product.name.toLowerCase();
        if (name.includes('ankapol')) {
            if (name.includes('pp') || name.includes('pc')) groups['Ankapol 10 Serisi']!.push(product);
            else if (name.includes('ep') || name.includes('ec')) groups['Ankapol 20 Serisi']!.push(product);
        } else if (name.includes('diamond') || name.includes('diomand')) {
            if (name.includes('pp') || name.includes('pc')) groups['Bikamax Diomand 10 Serisi']!.push(product);
            else if (name.includes('ep') || name.includes('ec')) groups['Bikamax Diomand 20 Serisi']!.push(product);
        } else if (name.includes('flex')) {
            groups['Bikamax Flex 10 Serisi']!.push(product);
        } else if (name.includes('ekstra')) {
            groups['Bikamax Ekstra']!.push(product);
        } else if (name.startsWith('bikamax')) {
            groups['Bikamax']!.push(product);
        } else if (name.includes('polietilen') || name.includes('naylon') || name.includes('drenaj')) {
            groups['Anıl Plas Drenaj Levhası']!.push(product);
        }
    });

    return groups;
});

const categories = Object.keys(groupedProducts.value);

const items = computed(() => [
    { label: t('nav.home'), icon: 'pi pi-home', route: '/' },
    { label: t('nav.products'), icon: 'pi pi-box', route: '/products', isMega: true },
    { label: t('nav.about'), icon: 'pi pi-info-circle', route: '/about' },
    { label: t('nav.references'), icon: 'pi pi-check-circle', route: '/references' },
    { label: t('nav.certificates'), icon: 'pi pi-verified', route: '/certificates' },
    { label: t('nav.contact'), icon: 'pi pi-envelope', route: '/contact' }
]);
</script>

<template>
    <header class="site-header" :class="{ 'sticky-nav': isSticky, 'mobile-menu-active': showMobileMenu }">
        <nav class="main-navigation">
            <div class="container nav-inner">
                <div class="logo">
                   <router-link to="/" @click="closeMobileMenu">
                        <img src="https://static.wixstatic.com/media/dcd026_7bd800261d4d4ba78498496e66efd890~mv2.png" alt="Anıl Plas Logo" class="logo-img" />
                   </router-link>
                </div>
                
                <div class="nav-links-desktop">
                    <Menubar :model="items" class="custom-menubar">
                        <template #item="{ item, props }">
                            <div 
                                class="nav-item-wrapper"
                                @mouseenter="item.isMega ? showMegaMenu = true : null"
                                @mouseleave="item.isMega ? showMegaMenu = false : null"
                            >
                                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                                    <a :href="href" v-bind="props.action" @click="navigate" class="nav-link">
                                        <span :class="['nav-icon', item.icon]" />
                                        <span class="nav-label">{{ item.label }}</span>
                                        <i v-if="item.isMega" class="pi pi-angle-down" style="font-size: 0.7rem; margin-left: 0.3rem;" />
                                    </a>
                                </router-link>

                                <!-- Mega Menu Dropdown -->
                                <div v-if="item.isMega && showMegaMenu" class="mega-menu animate-fade-in">
                                    <div class="mega-menu-inner">
                                        <div class="mega-sidebar">
                                            <div 
                                                v-for="cat in categories" 
                                                :key="cat"
                                                class="mega-cat-item"
                                                :class="{ active: activeCategory === cat }"
                                                @mouseenter="activeCategory = cat"
                                            >
                                                {{ cat }}
                                                <i class="pi pi-chevron-right" />
                                            </div>
                                        </div>
                                        <div class="mega-content">
                                            <div class="mega-category-title">{{ activeCategory }}</div>
                                            <div class="mega-product-grid">
                                                <router-link 
                                                    v-for="product in groupedProducts[activeCategory]" 
                                                    :key="product.id"
                                                    :to="`/products/${product.id}`"
                                                    class="mega-product-link"
                                                    @click="showMegaMenu = false"
                                                >
                                                    <div class="product-dot"></div>
                                                    {{ product.name }}
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Menubar>
                </div>

                <div class="nav-actions">
                    <div class="lang-switcher">
                        <span class="lang-item" :class="{ active: currentLang === 'TR' }" @click="setLanguage('TR')">TR</span>
                        <span class="lang-divider">/</span>
                        <span class="lang-item" :class="{ active: currentLang === 'EN' }" @click="setLanguage('EN')">EN</span>
                    </div>
                    <Button :label="t('nav.getQuote')" severity="primary" size="small" rounded class="cta-button hide-mobile" @click="$router.push('/contact')" />
                    
                    <button class="menu-toggle" @click="toggleMobileMenu" :class="{ 'is-active': showMobileMenu }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div class="header-svg-wrapper hide-mobile">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="5.044 157.664 370.206 64.325" height="100%" viewBox="5.044 157.664 370.206 64.325" width="auto" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                            <g>
                                <defs>
                                    <clipPath id="euroonplus-clip">
                                        <path d="M329.004 157.664H375v46.246h-45.996Zm0 0"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#euroonplus-clip)">
                                    <path d="M374.063 173.93H358.98v-15.078a.905.905 0 0 0-.914-.915h-11.878a.903.903 0 0 0-.915.915v15.078h-15.082a.905.905 0 0 0-.914.914v11.883c0 .511.403.914.914.914h15.082v15.082c0 .511.399.914.914.914h11.88a.905.905 0 0 0 .913-.914V187.64h15.082a.905.905 0 0 0 .915-.914v-11.883a.905.905 0 0 0-.914-.914Zm0 0" fill="#24b1e2"></path>
                                    <path d="M358.066 203.91h-11.878c-.66 0-1.192-.531-1.192-1.187v-14.809h-14.805c-.66 0-1.187-.527-1.187-1.187v-11.883c0-.656.527-1.188 1.187-1.188h14.805v-14.804c0-.66.531-1.188 1.192-1.188h11.878c.66 0 1.188.527 1.188 1.188v14.804h14.808c.657 0 1.188.531 1.188 1.188v11.883c0 .66-.531 1.187-1.188 1.187h-14.808v14.809c0 .656-.527 1.187-1.188 1.187Zm-27.875-29.703c-.347 0-.64.29-.64.637v11.883c0 .347.293.64.64.64h15.082c.145 0 .274.13.274.274v15.082c0 .347.293.64.64.64h11.88c.347 0 .64-.293.64-.64V187.64c0-.145.129-.274.273-.274h15.082a.649.649 0 0 0 .641-.64v-11.883a.645.645 0 0 0-.64-.637H358.98a.283.283 0 0 1-.273-.277v-15.078a.649.649 0 0 0-.64-.641h-11.88a.649.649 0 0 0-.64.64v15.079a.283.283 0 0 1-.274.277Zm0 0" fill="#000000"></path>
                                </g>
                                <path d="M15.622 177.942v6.203h12.156v8.047H15.622v6.86h13.765v8.468H5.044v-38.047h24.343v8.469Zm0 0" fill="#000000"></path>
                                <path d="M65.604 177.239v30.281H54.979v-4.313c-.906 1.368-2.152 2.47-3.734 3.313-1.586.844-3.403 1.266-5.453 1.266-3.524 0-6.297-1.157-8.329-3.47-2.03-2.32-3.047-5.483-3.047-9.483v-17.594h10.516v16.25c0 1.73.457 3.09 1.375 4.078.914.992 2.129 1.484 3.64 1.484 1.552 0 2.774-.492 3.673-1.484.906-.988 1.359-2.348 1.359-4.078v-16.25Zm0 0" fill="#000000"></path>
                                <path d="M82.22 182.583c1.188-1.727 2.626-3.094 4.313-4.094 1.696-1.008 3.52-1.516 5.469-1.516v11.281h-2.969c-2.304 0-4.015.454-5.14 1.36-1.118.898-1.672 2.46-1.672 4.687v13.219H71.643v-30.281H82.22Zm0 0" fill="#000000"></path>
                                <path d="M109.861 207.895c-3.023 0-5.73-.629-8.125-1.89a13.857 13.857 0 0 1-5.64-5.391c-1.367-2.344-2.047-5.098-2.047-8.266 0-3.125.691-5.851 2.078-8.187 1.383-2.344 3.27-4.145 5.656-5.407 2.395-1.257 5.102-1.89 8.125-1.89 3.031 0 5.739.633 8.125 1.89 2.395 1.262 4.285 3.063 5.672 5.407 1.383 2.336 2.078 5.062 2.078 8.187 0 3.137-.695 5.883-2.078 8.234-1.387 2.356-3.289 4.165-5.703 5.422-2.406 1.262-5.121 1.891-8.14 1.891Zm0-9.172c1.477 0 2.707-.547 3.688-1.64.988-1.102 1.484-2.68 1.484-4.735 0-2.039-.496-3.601-1.484-4.687-.98-1.082-2.195-1.625-3.64-1.625-1.438 0-2.641.543-3.61 1.625-.969 1.086-1.453 2.648-1.453 4.687 0 2.094.46 3.684 1.39 4.766.938 1.074 2.145 1.61 3.625 1.61Zm0 0" fill="#000000"></path>
                                <path d="M144.186 207.895c-3.023 0-5.73-.629-8.125-1.89a13.857 13.857 0 0 1-5.64-5.391c-1.367-2.344-2.047-5.098-2.047-8.266 0-3.125.691-5.851 2.078-8.187 1.383-2.344 3.27-4.145 5.656-5.407 2.395-1.257 5.102-1.89 8.125-1.89 3.031 0 5.739.633 8.125 1.89 2.395 1.262 4.285 3.063 5.672 5.407 1.383 2.336 2.078 5.062 2.078 8.187 0 3.137-.695 5.883-2.078 8.234-1.387 2.356-3.289 4.165-5.703 5.422-2.406 1.262-5.121 1.891-8.14 1.891Zm0-9.172c1.477 0 2.707-.547 3.688-1.64.988-1.102 1.484-2.68 1.484-4.735 0-2.039-.496-3.601-1.484-4.687-.98-1.082-2.195-1.625-3.64-1.625-1.438 0-2.641.543-3.61 1.625-.969 1.086-1.453 2.648-1.453 4.687 0 2.094.46 3.684 1.39 4.766.938 1.074 2.145 1.61 3.625 1.61Zm0 0" fill="#000000"></path>                                <path d="M184.23 176.973c3.488 0 6.258 1.164 8.313 3.484 2.05 2.325 3.078 5.465 3.078 9.422v17.641h-10.578v-16.25c0-1.719-.454-3.07-1.36-4.063-.898-.988-2.101-1.484-3.61-1.484-1.585 0-2.827.496-3.734 1.484-.898.993-1.343 2.344-1.343 4.063v16.25h-10.578v-30.281h10.578v4.328c.937-1.375 2.195-2.484 3.781-3.328 1.582-.844 3.398-1.266 5.453-1.266Zm0 0" fill="#000000"></path>
                                <path d="M212.019 181.458c.832-1.407 2.004-2.52 3.515-3.344 1.508-.832 3.29-1.25 5.344-1.25 2.406 0 4.586.633 6.547 1.89 1.969 1.262 3.516 3.063 4.64 5.407 1.133 2.336 1.704 5.062 1.704 8.187 0 3.137-.57 5.883-1.703 8.234-1.125 2.356-2.672 4.165-4.641 5.422-1.96 1.262-4.14 1.891-6.547 1.891-2.055 0-3.828-.41-5.328-1.234-1.492-.832-2.668-1.946-3.531-3.344v18.672H201.44v-44.75h10.578Zm11.015 10.89c0-1.976-.53-3.516-1.593-4.61-1.063-1.093-2.368-1.64-3.907-1.64-1.554 0-2.859.559-3.921 1.672-1.063 1.117-1.594 2.64-1.594 4.578 0 1.98.531 3.531 1.594 4.656 1.062 1.118 2.367 1.672 3.921 1.672 1.54 0 2.844-.566 3.907-1.703 1.062-1.133 1.593-2.676 1.593-4.625Zm0 0" fill="#000000"></path>
                                <path d="M248.719 167.583v39.937H238.14v-39.938Zm0 0" fill="#000000"></path>
                                <path d="M285.748 177.239v30.281h-10.625v-4.313c-.906 1.368-2.152 2.47-3.734 3.313-1.586.844-3.403 1.266-5.454 1.266-3.523 0-6.296-1.157-8.328-3.47-2.03-2.32-3.047-5.483-3.047-9.483v-17.594h10.516v16.25c0 1.73.457 3.09 1.375 4.078.914.992 2.129 1.484 3.64 1.484 1.552 0 2.774-.492 3.673-1.484.906-.988 1.359-2.348 1.359-4.078v-16.25Zm0 0" fill="#000000"></path>
                                <path d="M304.693 207.895c-2.742 0-5.184-.457-7.328-1.375-2.137-.914-3.824-2.172-5.063-3.766a9.826 9.826 0 0 1-2.078-5.437h10.266c.133.969.578 1.726 1.328 2.266.758.542 1.695.812 2.812.812.864 0 1.547-.176 2.047-.531.508-.364.766-.832.766-1.406 0-.758-.418-1.317-1.25-1.672-.824-.364-2.188-.758-4.094-1.188-2.156-.437-3.953-.922-5.39-1.453-1.438-.54-2.688-1.422-3.75-2.64-1.063-1.227-1.594-2.891-1.594-4.985 0-1.79.484-3.414 1.453-4.875.969-1.457 2.394-2.617 4.281-3.484 1.895-.864 4.176-1.297 6.844-1.297 3.957 0 7.066.976 9.328 2.922 2.27 1.937 3.582 4.492 3.938 7.656h-9.547c-.18-.969-.602-1.711-1.266-2.234-.668-.52-1.559-.782-2.672-.782-.867 0-1.523.164-1.969.485-.449.324-.671.773-.671 1.343 0 .72.41 1.274 1.234 1.657.82.375 2.156.761 4 1.156 2.187.469 4.008.992 5.469 1.562 1.457.575 2.734 1.5 3.828 2.782 1.101 1.273 1.656 3.007 1.656 5.203 0 1.761-.516 3.344-1.547 4.75-1.023 1.406-2.48 2.515-4.375 3.328-1.887.805-4.105 1.203-6.656 1.203Zm0 0" fill="#000000"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu Overlay -->
        <transition name="mobile-menu-fade">
            <div v-if="showMobileMenu" class="mobile-menu-overlay" @click.self="closeMobileMenu">
                <div class="mobile-menu-content animate-slide-left">
                    <div class="mobile-menu-header">
                        <img src="https://static.wixstatic.com/media/dcd026_7bd800261d4d4ba78498496e66efd890~mv2.png" alt="Anıl Plas Logo" class="logo-img" />
                        <button class="close-menu" @click="closeMobileMenu">
                            <i class="pi pi-times"></i>
                        </button>
                    </div>
                    
                    <div class="mobile-nav-links">
                        <router-link 
                            v-for="item in items" 
                            :key="item.label" 
                            :to="item.route" 
                            class="mobile-nav-item"
                            @click="closeMobileMenu"
                        >
                            <i :class="item.icon"></i>
                            {{ item.label }}
                        </router-link>
                    </div>

                    <div class="mobile-menu-footer">
                        <Button :label="t('nav.getQuote')" severity="primary" rounded class="mobile-cta-btn" @click="$router.push('/contact'); closeMobileMenu();" />
                        <div class="mobile-socials">
                            <a href="https://www.instagram.com/anilplas_a.s/" target="_blank"><i class="pi pi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </header>
</template>

<style scoped>
.site-header {
    width: 100%;
    z-index: 1000;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.sticky-nav {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    animation: slideDown 0.4s ease-out;
}

@keyframes slideDown {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Main Navigation */
.main-navigation {
    padding: 15px 0;
    transition: padding 0.3s ease;
}

.sticky-nav .main-navigation {
    padding: 10px 0;
}

.nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Logo */
.logo-img {
    height: 50px;
    width: auto;
    transition: height 0.3s ease;
    filter: brightness(0.1); /* Make logo dark for white bg if needed, or check if logo has a dark version */
}

.sticky-nav .logo-img {
    height: 40px;
}

/* Custom Menubar Reset */
:deep(.custom-menubar) {
    background: transparent;
    border: none;
    flex-grow: 1;
    justify-content: center;
}

:deep(.p-menubar-root-list) {
    gap: 0.5rem;
    flex-wrap: nowrap !important;
}

.nav-link {
    padding: 8px 14px !important;
    white-space: nowrap !important;
    font-weight: 700 !important;
    color: #000000 !important;
    transition: all 0.2s ease;
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 0.9rem;
    background: transparent !important;
}

.nav-link:hover {
    color: #ffffff !important;
    background: #021a44 !important;
}

/* Reset any active/highlight backgrounds from PrimeVue or Router */
:deep(.p-menuitem-content), 
:deep(.p-menuitem-link),
:deep(.p-highlight > .p-menuitem-content),
:deep(.p-highlight > .p-menuitem-link) {
    background: transparent !important;
    box-shadow: none !important;
}

:deep(.p-menuitem-content:hover) {
    background: transparent !important;
}

.nav-icon {
    font-size: 1.1rem;
    margin-right: 8px;
    color: #000000;
    transition: color 0.2s ease;
}

.nav-link:hover .nav-icon {
    color: #ffffff;
}

/* Actions */
.nav-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.lang-switcher {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--text-main);
    cursor: default;
}

.lang-item {
    cursor: pointer;
    transition: color 0.2s ease;
    opacity: 0.6;
}

.lang-item:hover, .lang-item.active {
    opacity: 1;
    color: var(--primary-color);
}

.lang-divider {
    opacity: 0.3;
    font-weight: 400;
}

.cta-button {
    padding: 10px 24px;
    background: var(--primary-color) !important;
    color: #ffffff !important;
    border: none;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    box-shadow: 0 10px 20px rgba(3, 69, 174, 0.15);
}

.cta-button:hover {
    background: #02368a !important;
    transform: translateY(-2px);
    box-shadow: 0 15px 25px rgba(3, 69, 174, 0.3);
}

.header-svg-wrapper {
    height: 18px;
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
}

.header-svg-wrapper svg {
    height: 100%;
    width: auto;
}

/* Mega Menu Styling */
.nav-item-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
}

.mega-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.05);
    overflow: hidden;
    z-index: 2000;
    padding: 1rem;
    margin-top: 10px;
}

.mega-menu::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 100px; /* Invisible hover bridge */
    z-index: -1;
}

.mega-menu-inner {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1rem;
    min-height: 450px;
}

.mega-sidebar {
    background: #f8faff;
    border-radius: 18px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.mega-cat-item {
    padding: 1rem 1.2rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--text-main);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    cursor: pointer;
}

.mega-cat-item i {
    font-size: 0.8rem;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
}

.mega-cat-item:hover, .mega-cat-item.active {
    background: var(--primary-color);
    color: #ffffff;
}

.mega-cat-item:hover i, .mega-cat-item.active i {
    opacity: 1;
    transform: translateX(0);
}

.mega-content {
    padding: 1.5rem 2rem;
}

.mega-category-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-main);
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f0f4f8;
}

.mega-product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
}

.mega-product-link {
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    color: var(--text-light);
    font-weight: 600;
    font-size: 0.92rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.product-dot {
    width: 6px;
    height: 6px;
    background: var(--primary-color);
    border-radius: 50%;
    margin-right: 12px;
    opacity: 0.5;
}

.mega-product-link:hover {
    background: #f8faff;
    color: var(--primary-color);
}

.mega-product-link:hover .product-dot {
    opacity: 1;
    transform: scale(1.3);
}

/* Mobile Toggle */
.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2001;
}

.menu-toggle span {
    width: 100%;
    height: 3px;
    background-color: var(--text-main);
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-toggle.is-active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.menu-toggle.is-active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.is-active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(2, 26, 68, 0.4);
    backdrop-filter: blur(8px);
    z-index: 10000;
    display: flex;
    justify-content: flex-end;
}

.mobile-menu-content {
    width: 85%;
    max-width: 400px;
    height: 100%;
    background: #ffffff;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    box-shadow: -10px 0 50px rgba(0, 0, 0, 0.2);
}

.mobile-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
}

.close-menu {
    background: #f1f5f9;
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--text-main);
    cursor: pointer;
    transition: all 0.3s ease;
}

.close-menu:hover {
    background: #e2e8f0;
    transform: rotate(90deg);
}

.mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: auto;
}

.mobile-nav-item {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-main);
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1rem;
    border-radius: 15px;
    transition: all 0.3s ease;
}

.mobile-nav-item i {
    font-size: 1.3rem;
    color: var(--primary-color);
}

.mobile-nav-item:hover {
    background: #f8faff;
    color: var(--primary-color);
    padding-left: 1.5rem;
}

.mobile-menu-footer {
    padding-top: 3rem;
    border-top: 1px solid #f1f5f9;
}

.mobile-cta-btn {
    width: 100%;
    padding: 1.2rem !important;
    font-weight: 800 !important;
    font-size: 1.1rem !important;
    margin-bottom: 2rem;
}

.mobile-socials {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.mobile-socials a {
    width: 50px;
    height: 50px;
    background: #f8faff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-color);
    transition: all 0.3s ease;
}

.mobile-socials a:hover {
    background: var(--primary-color);
    color: #ffffff;
    transform: translateY(-5px);
}

/* Utilities */
.hide-mobile {
    display: flex;
}

@media (max-width: 1100px) {
    .nav-links-desktop {
        display: none;
    }
    .menu-toggle {
        display: flex;
        margin-left: 1rem;
    }
    .hide-mobile {
        display: none !important;
    }
    .nav-actions {
        gap: 1rem;
    }
}

@media (max-width: 991px) {
    .container {
        padding: 0 1.5rem;
    }
}

/* Animations */
.animate-slide-left {
    animation: slideLeft 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes slideLeft {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

.mobile-menu-fade-enter-active,
.mobile-menu-fade-leave-active {
    transition: opacity 0.3s ease;
}

.mobile-menu-fade-enter-from,
.mobile-menu-fade-leave-to {
    opacity: 0;
}
</style>
