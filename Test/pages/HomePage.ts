//import the class
import { browser, element, by, protractor, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from "./BasePage";
import { ExcelUtil } from '../utilities/ExcelUtil';
// import * as json from 'load-json-file';
const json = require('load-json-file');

const Locators = {
    heading: {
        type:IdentificationType[IdentificationType.Xpath],
        value: "//course-thumb/div/h2[text()=' Selenium Framework development ']"
    },

    headings: {
        type: IdentificationType[IdentificationType.Css],
        value: ".well.hoverwell.thumbnail>h2"
    },

    searchText: {
        type: IdentificationType[IdentificationType.Css],
        value: "[class='form-control']"
    }
}


export class HomePage extends BasePage {

    //Selenium framework development course heading
    heading = this.ElementLocator(Locators.heading).element(by.xpath("//span[contains(text(),'4th')]"));

    //All heading                           
    headings = this.ElementLocator(Locators.headings);

    // Search Textbox
    searchText = this.ElementLocator(Locators.searchText);

    //Open browser
    async OpenBrowser(url: string){
        await browser.get(url);
    }

    async GetAllHeadings(){
        await this.headings.getText().then((text) => {
            console.log("The heading is :" + text);
        });
    }

    async ClickFirstHeading(heading: string){
        console.log("Can I print the input value from StepDefinition, if yes, this is it" + heading);
        await this.heading.click();
    }

    async EnterDataInSearchFromJson() {
        json('./data.json')
        .then(data => {
            // console.log(data);
            // console.log(this.searchText);
            this.searchText.sendKeys((<any>data).SearchValue);
        });
    }

    async EnterDataInSearchFromExcel() {
        let sheet = <SearchData>ExcelUtil.ReadExcelSheet('./data.xlsx')
        // console.log(sheet.SearchValue);
        this.searchText.sendKeys(sheet.SearchValue);
    }
}


interface SearchData {
    SearchValue: string,
    CourseTitle: string,
    Durations: string
}

