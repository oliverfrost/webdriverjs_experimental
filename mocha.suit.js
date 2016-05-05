// var webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until,
//     assert = require("chai").assert;
//
// var capabilities = {
//     'browserName' : 'firefox',
//     'name' : 'serge',
//     'surname' : 'frost'
// };
//
// var driver;
//
// beforeEach(function() {
//     console.log("Before Test" + new Date());
//
//     driver = new webdriver.Builder()
//         .forBrowser('firefox')
//         .build();
//
//     driver.manage().window().maximize();
// });
//
//
// afterEach(function() {
//     console.log("Test Ended" + new Date());
//     driver.quit();
// });
//
// describe('Test Elementary Actions', function() {
//         it('Should type a text, start search and check title', function () {
//             console.log("Test Started!!" + new Date());
//
//             driver.get('https://www.sencha.com/');
//             driver.wait(function () {
//                 return driver.isElementPresent(By.css(".rdp-gcs-search-term"));
//             }, 10000);
//
//             var searchField = driver.findElement(By.css(".rdp-gcs-search-term"));
//             searchField.sendKeys('why');
//             searchField.submit();
//             driver.wait(until.titleContains('Search Results why'), 3000);
//
//             var promise = driver.getTitle();
//             promise.then(function(title) {
//                assert.equal(title, "Search Results why | Page 0 | Sencha", "[ERROR!] Title is different!!!");
//             });
//         });
// });


// DOESN`T WORK. WHY ???