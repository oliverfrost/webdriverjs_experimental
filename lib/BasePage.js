var config = require("config");

class BasePage {
    constructor(driver) {
        this.driver = driver;
        this.baseurl = config.get('baseUrl');
        this.explicitWaitMS = config.get('explicitWaitMS')
    }
}

module.exports = BasePage;
