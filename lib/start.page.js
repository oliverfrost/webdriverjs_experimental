//import driver from 'selenium-webdriver';
import config from 'config';
import {By} from "../node_modules/selenium-webdriver/lib/by";
import {WebDriver as driver} from "../node_modules/selenium-webdriver/lib/webdriver";


class StartPage extends BasePage {
  const until = driver.until;
  const By = driver.By;

    

  const contactUsLink = ".//*[@id='menu-item-6154']/a";


   clickContactUsLink() {
       driver.findElement(By.xpath(contactUsLink)).click();
   }




}