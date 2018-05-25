import { defineSupportCode } from 'cucumber'
import { browser } from "protractor";
import { config } from "../steps/config";
import { JsonFormatter } from "../reporting/CucumberReportExtension";

defineSupportCode(({ registerHandler, registerListener }) => {

    registerHandler('BeforeFeature', async () => {
        console.log("Executing before feature !!");
    });

    registerHandler('BeforeScenario', async () => {
        await browser.get(config.baseUrl);
    });

    registerHandler('AfterStep', async () => {
        console.log("Step executed")
    });

    registerHandler('AfterScenario', async () => {
        console.log("Scenario executed !!");
    });

    registerHandler('AfterFeature', async () => {
        console.log("Executing After feature !!");
    });

    registerListener(JsonFormatter);

});

