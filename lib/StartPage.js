//var webdriver = require("selenium-webdriver"),
   var By = require("selenium-webdriver").By;
    //driver = webdriver.Builder;
 

 var config = require("config"),
     BasePage = require("./BasePage.js");


class StartPage extends BasePage {
   constructor(driver) {
        super(driver);
        this.contactUsLink = ".//*[@id='menu-item-6154']/a";
   }

   clickContactUsLink() {
       this.driver.findElement(By.xpath(this.contactUsLink)).click();
       //return this.driver.promise.fulfilled(true);
   }
}

module.exports = StartPage;