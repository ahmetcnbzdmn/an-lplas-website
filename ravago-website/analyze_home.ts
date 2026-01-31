import * as cheerio from 'cheerio';
import fs from 'fs';

const html = fs.readFileSync('homepage.html', 'utf-8');
const $ = cheerio.load(html);

console.log('Analyzing links...');
const links = $('a').map((i, el) => {
    return {
        text: $(el).text().trim(),
        href: $(el).attr('href')
    };
}).get();

const productLinks = links.filter(l => 
    l.text.includes('Ankapol') || 
    l.text.includes('Bikamax') ||
    (l.href && l.href.includes('product-page'))
);

console.log(`Found ${productLinks.length} potential product links.`);
productLinks.slice(0, 10).forEach(l => console.log(l));

// Also check for JSON data if links are empty
if (productLinks.length === 0) {
    console.log('No direct links found. Checking scripts...');
    $('script').each((i, el) => {
        const content = $(el).html() || '';
        if (content.includes('Ankapol PP 300')) {
             console.log('Found product data in script tag index:', i);
             console.log('Snippet:', content.substring(content.indexOf('Ankapol PP 300') - 50, content.indexOf('Ankapol PP 300') + 100));
        }
    });
}
