import * as cheerio from 'cheerio';
import fs from 'fs';
import axios from 'axios';

const PRODUCTS = [
    { name: "Ankapol PP 300", url: "https://www.anilplas.com.tr/anıl-plas-400-drenaj-levhası" },
    { name: "Ankapol PP 400", url: "https://www.anilplas.com.tr/anıl-plas-500-drenaj-levhası" },
    { name: "Ankapol PC 200", url: "https://www.anilplas.com.tr/anıl-plas-600-drenaj-levhası" },
    { name: "Ankapol PC 300", url: "https://www.anilplas.com.tr/anıl-plas-700-drenaj-levhası" },
    { name: "Ankapol PP 40 MK", url: "https://www.anilplas.com.tr/anıl-plas-800-drenaj-levhası" },
    { name: "Ankapol PP 40 MY", url: "https://www.anilplas.com.tr/anıl-plas-900-drenaj-levhası" },
    { name: "Ankapol PP 40 MG", url: "https://www.anilplas.com.tr/anıl-plas-1000-drenaj-levhası" },
    { name: "Ankapol PP 40 MK Yonca Desenli", url: "https://www.anilplas.com.tr/op-2000-pvs-kiremit-altı" },
    { name: "Ankapol PP 40 MY Yonca Desenli", url: "https://www.anilplas.com.tr/polietilen-naylon" },
    { name: "Ankapol PP 40 MG Yonca Desenli", url: "https://www.anilplas.com.tr/kopyası-ankapol-pp-40-my-yonca-desenli" },
    { name: "Anıl Plas Drenaj Levhası", url: "https://www.anilplas.com.tr/kopyası-bikamax-c-300" },
    { name: "Ankapol EP 300", url: "https://www.anilplas.com.tr/kopyası-ankapol-pp-40-mg-yonca-desenli" },
    { name: "Ankapol EP 400", url: "https://www.anilplas.com.tr/kopyası-ankapol-ep-300-3" },
    { name: "Ankapol EC 200", url: "https://www.anilplas.com.tr/kopyası-ankapol-ep-300-2" },
    { name: "Ankapol EC 300", url: "https://www.anilplas.com.tr/kopyası-ankapol-ep-300-1" },
    { name: "Ankapol EP 40 MK", url: "https://www.anilplas.com.tr/kopyası-ankapol-ep-300" },
    { name: "Ankapol EP 40 MY", url: "https://www.anilplas.com.tr/kopyası-ankapol-ep-40-mk-2" },
    { name: "Ankapol EP 40 MG", url: "https://www.anilplas.com.tr/kopyası-ankapol-ep-40-mk-1" },
    { name: "Ankapol EP 40 MK Yonca Desenli", url: "https://www.anilplas.com.tr/kopyası-ankapol-ep-40-mk" },
    { name: "Ankapol EP 40 MY Yonca Desenli", url: "https://www.anilplas.com.tr/polietilen-naylon" },
    { name: "Ankapol EP 40 MG Yonca Desenli", url: "https://www.anilplas.com.tr/kopyası-ankapol-ep-40-my-yonca-desenli" },
    { name: "Bikamax Diomand PP 300", url: "https://www.anilplas.com.tr/kopyası-ankapol-ep-40-mg-yonca-desenli" },
    { name: "Bikamax Diomand PP 400", url: "https://www.anilplas.com.tr/kopyası-kopyası-ankapol-ep-40-mg-yo" },
    { name: "Bikamax Diomand PC 200", url: "https://www.anilplas.com.tr/kopyası-kopyası-kopyası-ankapol-ep" },
    { name: "Bikamax Diomand PC 300", url: "https://www.anilplas.com.tr/kopyası-kopyası-kopyası-kopyası-a" },
    { name: "Bikamax Diomand EP 300", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-pc-300-6" },
    { name: "Bikamax Diomand EP 400", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-pc-300-5" },
    { name: "Bikamax Diomand EC 200", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-pc-300-4" },
    { name: "Bikamax Diomand EC 300", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-pc-300-3" },
    { name: "Bikamax Diomand EP 40 MK", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-pc-300-2" },
    { name: "Bikamax Diomand EP 40 MY", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-pc-300-1" },
    { name: "Bikamax Diomand EP 40 MG", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-pc-300" },
    { name: "Bikamax Flex PP 300", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ec-300-4" },
    { name: "Bikamax Flex PP 400", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ec-300-3" },
    { name: "Bikamax Flex PC 200", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ec-300-2" },
    { name: "Bikamax Flex PC 300", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ec-300-1" },
    { name: "Bikamax Flex PAL 300", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ec-300" },
    { name: "Bikamax Flex PP 40 MK", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ep-40-mg-5" },
    { name: "Bikamax Flex PP 40 MY", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ep-40-mg-4" },
    { name: "Bikamax Flex PP 40 MG", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ep-40-mg-3" },
    { name: "Bikamax Flex PP 40 MK Yonca Desenli", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ep-40-mg-2" },
    { name: "Bikamax Flex PP 40 MY Yonca Desenli", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ep-40-mg-1" },
    { name: "Bikamax Flex PP 40 MG Yonca Desenli", url: "https://www.anilplas.com.tr/kopyası-bikamax-diamond-ep-40-mg" },
    { name: "Bikamax Ekstra P 300", url: "https://www.anilplas.com.tr/kopyası-bikamax-flex-pal-300-1" },
    { name: "Bikamax Ekstra C 200", url: "https://www.anilplas.com.tr/kopyası-bikamax-ekstra-p-300" },
    { name: "Bikamax Ekstra C 300", url: "https://www.anilplas.com.tr/kopyası-bikamax-ekstra-c-200" },
    { name: "Bikamax P 300", url: "https://www.anilplas.com.tr/kopyası-bikamax-ekstra-c-300" },
    { name: "Bikamax C 200", url: "https://www.anilplas.com.tr/kopyası-kopyası-bikamax-ekstra-c-300" },
    { name: "Bikamax C 300", url: "https://www.anilplas.com.tr/kopyası-bikamax-ekstra-c-200" }
];

async function main() {
    const detailedProducts = [];

    for (const [index, product] of PRODUCTS.entries()) {
        console.log(`[${index + 1}/${PRODUCTS.length}] Scraping ${product.name}...`);
        try {
            const encodedUrl = encodeURI(product.url);
            const { data: html } = await axios.get(encodedUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                },
                timeout: 15000
            });
            
            const $ = cheerio.load(html);

            // Extract Description
            let description = $('meta[name="description"]').attr('content') || '';
            
            // Extract Image
            let image = '';
            const imgElement = $('img.bHLGFC').first();
            const rawImgSrc = imgElement.attr('src') || imgElement.attr('data-src') || $('meta[property="og:image"]').attr('content');
            
            const getHighResUrl = (url: string | undefined) => {
                if (!url) return '';
                if (url.includes('static.wixstatic.com/media/')) {
                    // Wix URLs often look like: https://static.wixstatic.com/media/ID~mv2.png/v1/crop/...
                    // We want everything up to the extension
                    const parts = url.split('/');
                    const mediaIndex = parts.indexOf('media');
                    if (mediaIndex !== -1 && parts[mediaIndex + 1]) {
                        const filePart = parts[mediaIndex + 1];
                        return `https://static.wixstatic.com/media/${filePart}`;
                    }
                }
                return url;
            };

            image = getHighResUrl(rawImgSrc);
            if (image) {
                console.log(`   Found image: ${image.substring(0, 60)}...`);
            }
            
            // Regex-based technical data extraction from the whole HTML
            // This is more resilient for Wix's varied structures
            const specs: string[] = [];
            
            // Clean HTML of tags for better regex matching
            const plainText = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
            
            const patterns = [
                /Ürün Kodu:\s*([^:]+?)(?=\s*(?:Boyut|Kalınlık|Malzeme|Renk|Ağırlık|Ambalaj|$))/gi,
                /Boyut:\s*([^:]+?)(?=\s*(?:Kalınlık|Malzeme|Renk|Ağırlık|Ambalaj|Ürün|$))/gi,
                /Kalınlık:\s*([^:]+?)(?=\s*(?:Malzeme|Renk|Ağırlık|Ambalaj|Ürün|Boyut|$))/gi,
                /Malzeme:\s*([^:]+?)(?=\s*(?:Renk|Ağırlık|Ambalaj|Ürün|Boyut|Kalınlık|$))/gi,
                /Ağırlık:\s*([^:]+?)(?=\s*(?:Ambalaj|Renk|Ürün|Boyut|Kalınlık|$))/gi,
                /Ambalaj:\s*([^:]+?)(?=\s*(?:Renk|Ürün|Boyut|Kalınlık|$))/gi
            ];

            const foundSpecsMap = new Map();

            patterns.forEach(regex => {
                let match;
                while ((match = regex.exec(plainText)) !== null) {
                    let matchedText = match[0].trim();
                    // Clean HTML entities manually if 'he' is not available
                    matchedText = matchedText
                        .replace(/&nbsp;/g, ' ')
                        .replace(/&Uuml;/g, 'Ü')
                        .replace(/&uuml;/g, 'ü')
                        .replace(/&Ouml;/g, 'Ö')
                        .replace(/&ouml;/g, 'ö')
                        .replace(/&Ccedil;/g, 'Ç')
                        .replace(/&ccedil;/g, 'ç')
                        .replace(/&Iuml;/g, 'İ')
                        .replace(/&amp;/g, '&');

                    if (matchedText.length > 5 && matchedText.length < 200 && !matchedText.includes('base64')) {
                        foundSpecsMap.set(matchedText.split(':')[0].trim(), matchedText);
                    }
                }
            });

            // Also search for numeric specs with units
            const unitPatterns = [
                /\d+\s*mm/gi,
                /\d+\s*gr\/m/gi,
                /\d+\s*mt\/rulo/gi,
                /\d+\s*kg/gi
            ];

            unitPatterns.forEach(regex => {
                let match;
                while ((match = regex.exec(plainText)) !== null) {
                    const matchedText = match[0].trim();
                    const start = Math.max(0, match.index - 30);
                    const end = Math.min(plainText.length, match.index + 50);
                    let context = plainText.substring(start, end).trim();
                    
                    context = context
                        .replace(/&nbsp;/g, ' ')
                        .replace(/&Uuml;/g, 'Ü')
                        .replace(/&uuml;/g, 'ü')
                        .replace(/&Ouml;/g, 'Ö')
                        .replace(/&ouml;/g, 'ö')
                        .replace(/&Ccedil;/g, 'Ç')
                        .replace(/&ccedil;/g, 'ç')
                        .replace(/&Iuml;/g, 'İ')
                        .replace(/&amp;/g, '&');

                    if (context.length > 5 && !context.includes('base64') && !context.includes('{') && !context.includes('}')) {
                        specs.push(context.replace(/\s+/g, ' '));
                    }
                }
            });

            const isClean = (str: string) => {
                if (str.length < 5) return false;
                if (str.includes('base64')) return false;
                if (str.includes('data:image')) return false;
                if (str.includes('{') || str.includes('}')) return false;
                // Heuristic: Must have at least one space if long, and not too many caps
                const spaceCount = (str.match(/ /g) || []).length;
                if (str.length > 20 && spaceCount === 0) return false;
                const upperRatio = (str.match(/[A-Z]/g) || []).length / str.length;
                if (upperRatio > 0.4 && str.length > 20) return false;
                return true;
            };

            const finalSpecs = [...foundSpecsMap.values(), ...new Set(specs)]
                .filter(isClean)
                .map(s => s.trim())
                .slice(0, 8);

            if (finalSpecs.length === 0) {
                console.log(`   Warning: No deep specs found for ${product.name}. HTML length: ${html.length}`);
            }

            // Clean content
            description = description.replace(/\s+/g, ' ').trim();

            detailedProducts.push({
                id: index + 1,
                name: product.name,
                description: description || `${product.name} - Professional isolation and water proofing solution by Anıl Plas.`,
                image: image || 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
                features: finalSpecs.length > 0 ? finalSpecs : ['Sektör standardında yüksek dayanıklılık', 'Kolay uygulama imkanı', 'Su ve ısı yalıtımına tam uyumluluk'],
                category: product.name.includes('Anıl') ? 'Anıl Plas' : product.name.split(' ')[0]
            });

            await new Promise(r => setTimeout(r, 1000));

        } catch (error) {
            const e = error as any;
            console.error(`Failed to scrape ${product.name}: ${e.message}`);
            detailedProducts.push({
                id: index + 1,
                name: product.name,
                description: 'Detaylı bilgi için teknik ekibimizle iletişime geçiniz.',
                image: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
                features: ['Müşteri temsilcimizden detaylı bilgi isteyiniz.'],
                category: product.name.includes('Anıl') ? 'Anıl Plas' : product.name.split(' ')[0]
            });
        }
    }

    console.log('Saving data...');
    const dataDirs = ['src/data', 'ravago-website/src/data'];
    for (const dir of dataDirs) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(`${dir}/products.json`, JSON.stringify(detailedProducts, null, 2));
    }
    console.log('Done!');
}

main();
