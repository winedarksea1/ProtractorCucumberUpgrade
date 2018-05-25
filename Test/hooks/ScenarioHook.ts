import { config } from "../steps/config";
import { browser } from 'protractor';
const { BeforeAll } = require('cucumber');
import { defineSupportCode, setDefaultTimeout, Before, AfterAll, After, Status } from 'cucumber';
import { CucumberReportExtension } from "../reporting/CucumberReportExtension";

setDefaultTimeout(50000);

BeforeAll(async () => {
    await browser.get('http://localhost:8808');
    let jsonDir = process.cwd() + '/reports/json';
    CucumberReportExtension.CreateReportFile(jsonDir);
    console.log('Starting the application');
});

AfterAll(async () => {
    browser.quit();
    console.log("Cleanup!!")
});

After(async function (Scenario) {
    console.log('Executing After feature!!');
    if (Scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, 'image/png');
    }
});




