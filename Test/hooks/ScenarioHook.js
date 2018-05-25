"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var config_1 = require("../steps/config");
var CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
var protractor_1 = require("protractor");
cucumber_1.defineSupportCode(function (_a) {
    var registerHandler = _a.registerHandler, registerListener = _a.registerListener, setDefaultTimeout = _a.setDefaultTimeout;
    setDefaultTimeout(50000);
    registerHandler('BeforeFeature', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("Executing before feature !!");
            return [2 /*return*/];
        });
    }); });
    registerHandler('BeforeScenario', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get(config_1.config.baseUrl)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    registerHandler('AfterStep', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("Step executed");
            return [2 /*return*/];
        });
    }); });
    registerHandler('AfterScenario', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("Scenario executed !!");
            return [2 /*return*/];
        });
    }); });
    registerHandler('AfterFeature', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("Executing After feature !!");
            return [2 /*return*/];
        });
    }); });
    registerHandler('StepResult', function (StepResult) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (StepResult.isFailed()) {
                return [2 /*return*/, protractor_1.browser.takeScreenshot().then(function (screenshot) {
                        var decodedImage = new Buffer(screenshot, 'base64');
                        StepResult.attachments.push({
                            data: decodedImage.toString('base64'),
                            mimeType: 'image/png'
                        });
                    })];
            }
            return [2 /*return*/];
        });
    }); });
    registerListener(CucumberReportExtension_1.JsonFormatter);
});
//# sourceMappingURL=ScenarioHook.js.map