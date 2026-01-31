import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const BASE_URL = 'https://www.anilplas.com.tr';
const POTENTIAL_PATHS = [
    '/urunler',
    '/products',
    '/urunlerimiz',
    '/store',
    '/shop',
    '/magaza' // Turkish common paths
];

async function findProductPage() {
    console.log('Searching for product page...');
    
    // First check homepage for any immediate links
    try {
        const { data } = await axios.get(BASE_URL);
        const $ = cheerio.load(data);
        const links = $('a').map((i, el) => $(el).attr('href')).get();
        
        console.log('Found homepage links:', links.filter(l => l && (l.includes('urun') || l.includes('product'))));
    } catch (e) {
        console.error('Error fetching homepage:', e.message);
    }

    // Check potential paths
    for (const path of POTENTIAL_PATHS) {
        try {
            const url = `${BASE_URL}${path}`;
            console.log(`Checking ${url}...`);
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            
            // Heuristic: Check if page has product-like elements or titles
            const pageTitle = $('title').text().toLowerCase();
            const productCount = $('.product-item, .card, .shop-item').length;
            
            console.log(`- Title: ${$('title').text()}`);
            
            if (pageTitle.includes('ürün') || pageTitle.includes('product') || productCount > 0) {
                console.log('>>> MATCH FOUND!');
                return url;
            }
        } catch (e) {
            // Ignore 404s
        }
    }
    return null;
}

findProductPage().then(url => {
    if (url) console.log('Best guess URL:', url);
    else console.log('No direct product page found. Using fallback data.');
});
