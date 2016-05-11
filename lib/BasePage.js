var config = require("config"),
    By = require("selenium-webdriver").By;

class BasePage {
    constructor(driver) {
        this.driver = driver;
        this.baseurl = config.get('baseUrl');
        this.explicitWaitMS = config.get('explicitWaitMS')
    }

    // var selectByValue = function (locator, value) {
    //     var selElement = driver.findElement(locator);
    //     selElement.findElement(webdriver.By.css("option[value='" + value + "']"))
    //         .click();
    // };

    selectByValue (locator, value) {
        var selElement = this.driver.findElement(locator);
        selElement.findElement(By.css("option[value='" + value + "']")).click();
    };

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
