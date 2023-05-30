const { Builder, By, Key, until } = require('selenium-webdriver');
var fs = require('fs');


// Specify the file path
const filePath = 'C:\\Users\\e49373\\Downloads\\example.txt';

var jsonString

// Read the contents of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Print the contents of the file
  jsonString = data;
  console.log(data);
});

function getActionList(){
  // return localStorage.getItem("ActionList")
  // actionString = `[{"name":"name","value":"Atul"},{"name":"sex","value":"male"},{"name":"country","value":"australia"},{"name":"message","value":"12345678"},{"name":"newsletter","value":"on"}]`
  // return JSON.parse(actionString)

  // const actionString = `[{"name":"name","value":"Atul"},{"name":"sex","value":"male"},{"name":"country","value":"australia"},{"name":"message","value":"12345678"},{"name":"newsletter","value":"on"}]`;

  // const parsedAction = JSON.parse(actionString);
  // return parsedAction;

  // const actionString = '[{"name":"name","value":"Atul"},{"name":"sex","value":"male"},{"name":"country","value":"australia"},{"name":"message","value":"12345678"},{"name":"newsletter","value":"on"}]';

  // const parsedAction = JSON.parse(actionString);
  // console.log(parsedAction);

  // const actionString = '{"name":"name","value":"Atul"},{"name":"sex","value":"male"},{"name":"country","value":"australia"},{"name":"message","value":"12345678"},{"name":"newsletter","value":"on"}';
  const actionString = "[{\"name\":\"name\",\"value\":\"Atul\"},{\"name\":\"sex\",\"value\":\"male\"},{\"name\":\"country\",\"value\":\"australia\"},{\"name\":\"message\",\"value\":\"12345678\"},{\"name\":\"newsletter\",\"value\":\"on\"}]"

  const parsedAction = JSON.parse(actionString);
  // console.log(parsedAction);
  return parsedAction

}

async function example() {

  
  let driver = await new Builder().forBrowser('chrome').build();
  
  
  try {
    // await driver.get('http://127.0.0.1:5500/ExampleForm/index.html');
    await driver.get('http://localhost:4200/');
    await driver.sleep(5000);
    debugger
    
    let actionList0 = JSON.parse(jsonString)
    let actionList = JSON.parse(actionList0)
    console.log(actionList);
    // await driver.sleep(5000);

    // await driver.wait(until.elementLocated(By.name('UserID')), 5000); // Wait for 5 seconds for the element to be located
    await driver.sleep(2000);

    // getting inputs 

    let nameInput = await driver.findElement(By.name('name'))
    let sexInput = await driver.findElement(By.name('sex'))
    let countryInput = await driver.findElement(By.name('country'))
    let messageInput = await driver.findElement(By.name('message'))
    let newsletterInput = await driver.findElement(By.name('newsletter'))


    // setting values

    await nameInput.sendKeys(actionList.name);
    await sexInput.sendKeys(actionList.sex);
    await countryInput.sendKeys(actionList.country);
    await messageInput.sendKeys(actionList.message);
    await newsletterInput.sendKeys(actionList.newsletter);


    // Find the username and password input fields by their CSS selector or XPath
    // let usernameInput = await driver.findElement(By.xpath('//input[@name="UserID"]'));

    // let usernameInput = await driver.findElement(By.name('UserID'))

    // let passwordInput = await driver.findElement(By.xpath('//input[@name="UserPassword"]'));

    // let passwordInput = await driver.findElement(By.name('UserPassword'));

    // Enter the username and password

    // await usernameInput.sendKeys('VI12');
    // await passwordInput.sendKeys('Vijay@123');

    // Submit the form (if needed)
    // await passwordInput.sendKeys(Key.ENTER);

    // Wait for a certain condition after submitting the form
    await driver.wait(until.titleIs('ClaimsAngular'), 5000);

    // Get the page title and print it
    let title = await driver.getTitle();
    console.log('Page title:', title);
  } finally {
    // await driver.quit();
  }
}

example();
