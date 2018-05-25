"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["../features/*.feature"],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: "http://localhost:8808/",
    multiCapabilities: [
        {
            browserName: "firefox",
        },
        {
            browserName: "chrome"
        }
    ],
    suites: {
        "homepage": "../features/Home.feature",
        "coursedetails": "../features/CourseDetail.feature"
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../steps/*.js', '../hooks/*.js'],
        tags: '@smoke or @regression'
    }
};
//# sourceMappingURL=config.js.map