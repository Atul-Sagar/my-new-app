import { Component, OnInit } from '@angular/core';
import { Builder, By, Key } from 'selenium-webdriver';
import 'chromedriver';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.automateWebApp()
  }

  async  automateWebApp() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://sbiluatposservices.sbilife.co.in/investigator/login.html');
    await driver.findElement(By.name('user ID')).sendKeys('myusername');
    await driver.findElement(By.name('password')).sendKeys('mypassword', Key.ENTER);
    // ... Perform additional interactions or assertions
  } finally {
    await driver.quit();
  }
}


}
