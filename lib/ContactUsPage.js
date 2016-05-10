//var driver = require("selenium-webdriver").Builder,
var By = require("selenium-webdriver").By;        
        
   var  config = require("config"),
    BasePage = require("./BasePage.js");


class ContactUsPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.firstNameFieldId = "FirstName";
        this.lastNameFieldId = "LastName";
        this.companyFieldId = "Company";
        this.titleFieldId = "Title";
        this.emailFieldId = "Email";
        this.phoneFieldId = "Phone";
        this.productInterestSelectId = "Product_Interest__c";
        this.countrySelectId = "Country";
        this.commentsTextAreaId = "Comments__c";
        this.submitButtonXpath = ".//*[@id='mktoForm_93']//button";
    }


    fillFirstNameField(name) {
        this.driver.findElement(By.id(this.firstNameFieldId)).sendKeys(name);
    }


    fillLastNameField(surname) {
        this.driver.findElement(By.id(this.lastNameFieldId)).sendKeys(surname);
    }


    fillCompanyField(company) {
        this.driver.findElement(By.id(this.companyFieldId)).sendKeys(company);
    }


    fillTitleField(title) {
        this.driver.findElement(By.id(this.titleFieldId)).sendKeys(title);
    }


    fillEmailField(email) {
        this.driver.findElement(By.id(this.emailFieldId)).sendKeys(email);
    }


    fillPhoneField(phone) {
        this.driver.findElement(By.id(this.phoneFieldId)).sendKeys(phone);
    }


    selectProductInterest() {

    }

    
    selectCountry() {

    }

    
    fillCommentsArea(comments) {
        this.driver.findElement(By.id(this.commentsTextAreaId)).sendKeys(comments);
    }
    
    
    clickSubmitButton() {
        this.driver.findElement(By.xpath(this.submitButtonXpath)).click();
    }
}

module.exports = ContactUsPage;