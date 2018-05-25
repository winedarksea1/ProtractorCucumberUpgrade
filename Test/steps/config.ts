import { Config } from 'protractor';
import { CucumberReportExtension } from '../reporting/CucumberReportExtension';

export let config: Config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["../features/*.feature"],
    
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    baseUrl: "http://localhost:8808/",

    // multiCapabilities: [
    //     {
    //         browserName: "firefox",
    //     },
    //     {
    //         browserName: "chrome"
    //     }
    // ],

    suites: {
        "homepage": "../features/Home.feature",
        "coursedetails": "../features/CourseDetail.feature"
    },
    
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        // format: ['pretty'],
        format: 'json:./reports/json/cucumber_report.json',
        require: ['../steps/*.js', '../hooks/*.js'],
        tags: '@smoke or @regression'
    },

    onComplete: () => {
        CucumberReportExtension.GenerateCucumberReport();
    }
}