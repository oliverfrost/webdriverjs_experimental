var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var assert = require("chai").assert;
var _ = require('underscore');

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.manage().window().maximize();

driver.get('https://www.sencha.com/');
//driver.wait(until.elementIsVisible(By.css(".rdp-gcs-search-term")));

driver.wait(function () {
     return driver.isElementPresent(By.css(".rdp-gcs-search-term"));
 }, 10000);

var searchField = driver.findElement(By.css(".rdp-gcs-search-term"));
searchField.sendKeys('why');
searchField.submit();
driver.wait(until.titleContains('Search Results why'), 3000).then(function() { 
    console.log("IT WORKS!!")
    //assert.equal(driver.getTitle().toString(), "Search Results why | Page 0 | Sencha", "[ERROR!] Title is different!!!");
});


var promise = driver.getTitle();

promise.then(function(title) {
    console.log("TITLE IS: " + title);
    assert.equal(title, "Search Results why | Page 0 | Sencha", "[ERROR!] Title is different!!!");
});


// driver.findElement(By.xpath(".//*[@id='menu-item-6154']/a")).click();
// driver.findElement(By.xpath(".//*[@id='FirstName']")).sendKeys("Serge");
// driver.findElement(By.xpath(".//*[@id='LastName']")).sendKeys("Frost");
// driver.findElement(By.xpath(".//*[@id='Company']")).sendKeys("Some Company");
// driver.findElement(By.xpath(".//*[@id='Title']")).sendKeys("Just a Quality Assurance Engineer");
// driver.findElement(By.xpath(".//*[@id='Email']")).sendKeys("callmemaybe@aol.com");

//var articleTitles = driver.findElements(By.xpath(".//*[@id='cse']//article//h6/a"));
//var linkContact = driver.findElement(By.xpath(".//*[@id='menu-item-6154']/a"));

driver.quit();

