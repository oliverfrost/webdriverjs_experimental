import config from 'config';

// BasePage = function BasePage(driver) {
//     this.driver = driver;
//     this.baseurl = config.get('baseurl');
//     this.explicitWaitMS = config.get('explicitWaitMS')
// };
//
//
// BasePage.prototype.visit = function() {
//     this.driver.get(this.url);
//     return webdriver.promise.fulfilled(true);
// };
//
// module.exports = BasePage;


export default class BasePage {

    constructor(driver) {
        this.driver = driver;
        this.baseurl = config.get('baseurl');
        this.explicitWaitMS = config.get('explicitWaitMS')
    }
}

module.exports = BasePage;