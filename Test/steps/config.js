"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
exports.config = {
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
    onComplete: function () {
        CucumberReportExtension_1.CucumberReportExtension.GenerateCucumberReport();
    }
};
//# sourceMappingURL=config.js.map