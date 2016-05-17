var config = require("config"),
    By = require("selenium-webdriver").By,
    BasePage = require("../../BasePage.js"),
    webdriver = require('selenium-webdriver');


class TasksPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.newTaskInputXpath = ".//*[@id='textfield-1037-inputEl']";
    }


    typeNameOfNewTask(taskName) {
        this.driver.findElement(By.xpath(this.newTaskInputXpath)).sendKeys(taskName);
    }


    chooseTaskList(taskListName) {
        if (taskListName != null) {

            console.log("Implement me.");
        }
    }


    setDueDate(date) {
        if (date != null) {
            console.log("Implement me.");

        }
    }


    addNewTask(taskName, taskListName = null, date = null) {
        this.typeNameOfNewTask(taskName);
        this.chooseTaskList(taskListName);
        this.setDueDate(date);
        this.driver.findElement(By.xpath(this.newTaskInputXpath)).sendKeys(webdriver.Key.ENTER);
        return webdriver.promise.fulfilled(true);
    }


    get listOfTasks() {
        var tasks = this.driver.findElements(By.xpath(".//*[@id='tableview-1034']//table//tr")).then(function (elements) {
            return elements.slice(0, 1); // remove table`s title
        });
        return tasks;
    }


    get lastTaskTitle() {
        return this.driver.findElement(By.xpath("((.//*[@id='tableview-1034']//table//tr)[last()])/td[2]")).getText();
    }
}

module.exports = TasksPage;
