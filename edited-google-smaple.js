var assert = require('assert')
    , fs = require('fs')
    , webdriver = require('selenium-webdriver')
    , By = webdriver.By
    , colors = require('colors')
    ,until = webdriver.until
    , expect = require('chai').expect;



var driver;


beforeEach(function(done) {
    driver = new webdriver
        .Builder()
        .usingServer('http://127.0.0.1:4444/wd/hub')
        .withCapabilities(
            {
                'browserName': 'firefox'
            })
        .build();


    // error handling
    process.on('uncaughtException', function(err) {
        console.log("My error handler... " + err);

        if (driver) {
            //recording screenshot
            driver.takeScreenshot().then(function(img) {
                fs.writeFileSync("/tmp/test.png", new Buffer(img, 'base64'));
            });
        }
    });

    // open start page
    driver.get('http://google.com').then(function() {
        console.log("open google.com...");
        done();
    });

});


// run it once after tests
afterEach(function(done) {
    // works with promise
    driver.quit().then(done);
});


// tests
describe('Google Search', function() {
    
    it('should work', function(done) {
        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('webdriver\n').then(function() {
            return searchBox.getAttribute('value');
        }).then(function(value) {
            assert.equal(value, 'webdriver');
            done();
        });
    });


    it('Should type a text, start search and check title', function () {
            driver.get('https://www.sencha.com/');
            driver.wait(function () {
                return driver.isElementPresent(By.css(".rdp-gcs-search-term"));
            }, 10000);

            var searchField = driver.findElement(By.css(".rdp-gcs-search-term"));
            searchField.sendKeys('why');
            searchField.submit();
            driver.wait(until.titleContains('Search Results why'), 3000);

            var promise = driver.getTitle();
            promise.then(function(title) {
               assert.equal(title, "Search Results why | Page 0 | Sencha", "[ERROR!] Title is different!!!");
               expect(title).to.not.equal("some string");
               expect(title).to.contain('search results');
            });
    });
    
});