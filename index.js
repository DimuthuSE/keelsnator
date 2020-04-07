const {Builder} = require('selenium-webdriver');
require('chromedriver');

(async function run() {
    let driver = await new Builder().forBrowser('chrome').build();
    let url = 'https://int.keellssuper.net/Sorry.aspx?handler=orderfull';
    while(url === 'https://int.keellssuper.net/Sorry.aspx?handler=orderfull') {
        console.log(url);
        await driver.sleep(5000);
        url = await checkPage(driver);
    }
    //await driver.quit();
})();

async function checkPage(driver) {
    let url;
    try {
        await driver.get('https://int.keellssuper.net/');
    } finally {
        url = await driver.getCurrentUrl();
    }
    return url;
}