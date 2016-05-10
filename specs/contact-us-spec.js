var assert = require('assert'),
    webdriver = require('selenium-webdriver'),
    StartPage = require('../lib/StartPage.js'),
    ContactUsPage = require('../lib/ContactUsPage.js'),
    assert = require("chai").assert;

var capabilities = {
    'browserName' : 'firefox',
    'name' : 'serge',
    'surname' : 'frost'
};

var driver;


before(function(done) {
    driver = new webdriver.Builder()
        .withCapabilities(capabilities)
        .build();
    
    driver.manage().window().maximize();
    driver.manage().timeouts().implicitlyWait(10000);

    driver.get("https://www.sencha.com/").then(function () {
        console.log("Driver Started");
        done();
    });
});


after(function(done) {
    driver.quit().then(done);
});


// beforeEach(function() {
//   driver.get("https://www.sencha.com/");
// });


// tests { Just browse the website, fill the form and click button }
describe('Try to submit contact us form with incorrect data', function() {
    it('Should not submit form with incorrect email', function(done) {
        
        var startPage = new StartPage(driver);
        startPage.clickContactUsLink();
        
        var contactPage = new ContactUsPage(driver);

        contactPage.fillFirstNameField(capabilities.name);
        contactPage.fillLastNameField(capabilities.surname);
        contactPage.fillCompanyField("Some Company");
        contactPage.fillTitleField("Some Title");
        contactPage.fillEmailField("some@email@com");
        contactPage.fillPhoneField("+380333333333");
        contactPage.selectProductInterest();
        contactPage.selectCountry();
        contactPage.fillCommentsArea("Just some random text.");
        contactPage.clickSubmitButton();

        driver.get("http://google.com").then(function(){
            console.log("TEST FINISHED");
            done();
        });
    });


});

