var config = require("config"),
    By = require("selenium-webdriver").By;

class BasePage {
    constructor(driver) {
        this.driver = driver;
        this.baseurl = config.get('baseUrl');
        this.explicitWaitMS = config.get('explicitWaitMS')
    }

    selectByValue (locator, value) {
        var selElement = this.driver.findElement(locator);
        selElement.findElement(By.css("option[value='" + value + "']")).click();
    };

    
    // not sure if it works
    waitFor(miliseconds) {
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
             console.log(`[INFO] Waiting for ${miliseconds} miliseconds`);
                resolve();
            }, miliseconds);
        });
    }
 }

module.exports = BasePage;
