//http://examples.sencha.com/extjs/6.0.2/examples/classic/simple-tasks/index.html

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    StartPage = require('../../lib/StartPage.js'),
    ContactUsPage = require('../../lib/ContactUsPage.js'),
    TasksPage = require('../../lib/senchaExamples/simple-task/TasksPage.js'),
    assert = require("chai").assert,
    until = webdriver.until,
    driver;

var capabilities = {
    'browserName' : 'firefox',
    'name' : 'serge',
    'surname' : 'frost',
    'currentUrl' : 'http://examples.sencha.com/extjs/6.0.2/examples/classic/simple-tasks/index.html'
};


before(function(done) {
    console.log("TEST STARTED!\n");
    driver = new webdriver.Builder()
        .withCapabilities(capabilities)
        .build();

    driver.manage().window().maximize();
    driver.manage().timeouts().implicitlyWait(10000).then(done);
});


beforeEach(function(done) {
    driver.manage().deleteAllCookies();
    driver.get(capabilities.currentUrl);
    driver.wait(() => driver.findElement(By.id("taskGrid-1025")).isDisplayed(), 10000).then(() => done());
});



after(function(done) {
    driver.quit().then(done);
});



describe('Add/remove new List; Add/Remove new Task', function() {

    it('Should add new task into the list', function() {
        
        let taskName = "My Task";
        
        var tasksPage = new TasksPage(driver);
        tasksPage.addNewTask(taskName);
        // tasksPage.taskTitle().then(taskTitle => assert.equal(taskName, "[ERROR] Task title do not match."));//.then(done));
        // //done();


        console.log("TEST HANDLED!\n");
        
        
    });


    it('aaa', function() {
        console.log("SECOND TEST HANDLED!");
    });
   
});

