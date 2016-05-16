var config = require("config"),
    By = require("selenium-webdriver").By,
    BasePage = require("../../BasePage.js");


class TasksPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.newTaskInputXpath = ".//*[@id='textfield-1037-inputEl']";
    }



    typeNameOfNewTask(taskName) {
        this.driver.findElement(By.xpath(this.newTaskInputXpath)).sendKeys(taskName);
    }


    chooseTaskList(taskListName) {
        if(taskListName != null) {

            console.log("Implement me.");
        }
    }

    setDueDate(date) {
        if(date != null) {
            console.log("Implement me.");

        }
    }

    addNewTask(taskName, taskListName = null, date = null) {
        this.typeNameOfNewTask(taskName);
        this.chooseTaskList(taskListName);
        this.setDueDate(date);
        this.driver.findElement(By.xpath(this.newTaskInputXpath)).submit().then(() => console.log("[INFO] Submitted!"));
    }


    get listOfTasks() {
        // let tables = this.driver.findElements(By.xpath(".//*[@id='tableview-1034']//table"));
        // tables.shift();
        // return tables;
        this.driver.findElements(By.xpath(".//*[@id='tableview-1034']//table//tr")).then(function(elems){
            console.log(elems);
        });
        var tasks = [];
        tasks = this.driver.findElements(By.xpath(".//*[@id='tableview-1034']//table//tr"));
        //tasks.slice(0,1);
 

        //shift(); // first row is table`s title
        return tasks;
    }
    
    
    // get lastTaskText() {
    //     var tasks = this.listOfTasks;
    //    
    // }


    taskTitle(index) {
        var tasks = this.listOfTasks; 
        var xpathToTaskTitle = "./td[2]/div";

        // not null, is integer and <= array with all tasks
        if(index != null && this.isInt(index) && index <= tasks.size()) {
             let currentTask = tasks[index];
             return currentTask.findElement(By.xpath(xpathToTaskTitle)).getText();
        } else {
            //get title of last task
            console.log("[INFO] Getting last task");
            //return tasks.pop().findElement(By.xpath(xpathToTaskTitle)).getText();
           
            return tasks[0].findElement(By.xpath(xpathToTaskTitle)).getText();
        }
    }
}

module.exports = TasksPage;
