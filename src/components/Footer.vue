<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="col footer-brand">
                    <img src="https://static.wixstatic.com/media/dcd026_7bd800261d4d4ba78498496e66efd890~mv2.png" alt="Anıl Plas Logo" class="footer-logo" />
                    <p class="brand-desc">{{ t('footer.desc') }}</p>
                </div>
                <div class="col">
                    <h4>{{ t('footer.quickLinks') }}</h4>
                    <ul>
                        <li><router-link to="/">{{ t('nav.home') }}</router-link></li>
                        <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
                        <li><router-link to="/products">{{ t('nav.products') }}</router-link></li>
                        <li><router-link to="/references">{{ t('nav.references') }}</router-link></li>
                    </ul>
                </div>
                <div class="col footer-contact">
                    <h4>{{ t('footer.contact') }}</h4>
                    <div class="contact-items">
                        <p class="contact-item">
                            <i class="pi pi-map-marker"></i> 
                            <a href="https://www.google.com/maps/search/?api=1&query=Saray+Mah.,+Saraykent+Cad.,+No:4+Kahramankazan/Ankara" target="_blank">
                                Saray Mah., Saraykent+Cad., No:4 Kahramankazan/Ankara
                            </a>
                        </p>
                        <p class="contact-item"><i class="pi pi-phone"></i> <a href="tel:+905303175543">0530 317 55 43</a></p>
                        <p class="contact-item"><i class="pi pi-envelope"></i> <a href="mailto:info@anilplas.com">info@anilplas.com</a></p>
                        <p class="contact-item"><i class="pi pi-instagram"></i> <a href="https://www.instagram.com/anilplas_a.s/" target="_blank">@anilplas_a.s</a></p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Anıl Plas Plastik A.Ş. {{ t('footer.rights') }}</p>
                <div class="footer-bottom-links">
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.site-footer {
    background: #021a44;
    color: #ffffff;
    padding: 8rem 0 2rem;
    margin-top: auto;
    position: relative;
    overflow: hidden;
}

.site-footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
    position: relative;
    z-index: 1;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1.2fr;
    gap: 6rem;
    margin-bottom: 6rem;
}

.footer-brand .footer-logo {
    height: 60px;
    margin-bottom: 2rem;
    filter: brightness(0) invert(1);
}

.brand-desc {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.6);
    max-width: 400px;
}

h4 {
    margin-bottom: 2.5rem;
    color: #ffffff;
    font-weight: 800;
    font-size: 1.3rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
}

h4::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--primary-color);
    border-radius: 2px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: 1.2rem;
}

a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

a:hover {
    color: #ffffff;
    transform: translateX(8px);
}

.contact-item a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-item a:hover {
    color: #ffffff;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    line-height: 1.5;
    transition: all 0.3s ease;
}

.contact-item:hover {
    color: #ffffff;
}

.contact-item i {
    color: #ffffff !important;
    font-size: 1.2rem;
    flex-shrink: 0;
    margin-top: 3px;
    opacity: 0.9;
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.4);
    text-align: center;
}

.footer-bottom-links {
    display: flex;
    gap: 2rem;
}

.footer-bottom-links a {
    font-size: 0.9rem;
    font-weight: 500;
}

@media (max-width: 1200px) {
    .footer-grid {
        gap: 3rem;
    }
}

@media (max-width: 991px) {
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 4rem;
    }
    .footer-bottom {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }
}
</style>
