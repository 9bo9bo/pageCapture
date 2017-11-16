'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

const urls = [
  'http://www.yahoo.co.jp',
  'https://www.rakuten.co.jp/'
];

(async() => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(devices['iPhone 6']);
  let fname = null;
  for(let url of urls){
    console.log(url);
    fname = url.replace(/\//g, '_').replace(/:/g,'');
    await page.goto(url);
    await page.screenshot({path: `${fname}.png`, fullPage: true});
  }
  await browser.close();

})();
