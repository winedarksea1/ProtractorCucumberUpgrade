import { defineSupportCode, TableDefinition } from 'cucumber'
import { HomePage } from "../pages/HomePage";
import { expect, assert } from 'chai'
import { CourseDetailsPage } from "../pages/CourseDetails";

defineSupportCode(({Given, When, Then}) => {
    
    let homePage = new HomePage();
    let coursedetails = new CourseDetailsPage();

    Given(/^I navigate to application$/, async () => {
        await homePage.OpenBrowser("http://localhost:8808/");
    });

    When(/^I get all the heading$/, async () => {
        await homePage.GetAllHeadings();
    });

    When(/^I click the '([^\"]*)' course$/, async (headingText) => {
        await homePage.ClickFirstHeading(headingText.toString());
    });

    Then(/^I should see '([^\"]*)' course in coursedetails page$/, async (course) => {
        expect(coursedetails.GetCourseHeading).to.be.not.null;
    });

    Then(/^I should see all course information in coursedetails page$/, async (table: TableDefinition) => {
        let localTable = [
            [ 'Selenium', '2' ],
            [ 'Java' , '3']
        ]
        table.rows().forEach(row => {
            console.log(row);
        });

        assert.deepEqual(localTable, table.rows(), 'The datasource does not math with the step definition table');
    });

    When(/^I enter text in search from external data source$/, async () => {
        await homePage.EnterDataInSearchFromJson();
    });
    
    // When(/^I enter text in search from external excel source$/, async () => {
    //     await homePage.EnterDataInSearchFromExcel();
    // });
        

});