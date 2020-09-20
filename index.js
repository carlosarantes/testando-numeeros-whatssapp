const puppeteer = require('puppeteer');
const phones = require('./phones');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://web.whatsapp.com');

    await new Promise(resolve => setTimeout(resolve, 15000));

    for(let i = 0;i<phones.length;i++) {
        console.log('i - ', i);
        await page.goto(phones[i], { waitUntil: 'networkidle2' });
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
})();