'use strict';

const EC = protractor.ExpectedConditions;

describe('the clone or download button and dialog appear and can be interacted with', function() {

    beforeEach(function () {
        browser.waitForAngularEnabled(false); //This needs to be set before browser.get() if the page that's returned is not an Angular page
        browser.get('https://github.com/');
    });

    it('should show clone or download panel', function() {
        // Home page
        let searchBox = element(by.name("q"));

        browser.wait(EC.visibilityOf(searchBox), 5000);

        searchBox.sendKeys("angular");
        searchBox.sendKeys(protractor.Key.ENTER);

        // Transition from home page to search results
        let angularResult = element(by.linkText("angular/angular"));
        browser.wait(EC.visibilityOf(angularResult), 5000);

        // Search Results page
        angularResult.click();

        //Transition from search results to repository
        browser.wait(EC.visibilityOf(element(by.className('repository-content'))), 5000);

        //Angular repo page
        let cloneOrDownloadBtn = element(by.className("get-repo-select-menu"));
        cloneOrDownloadBtn.click();
        expect(element(by.className("get-repo-modal")).isPresent()).toBe(true, "unable to find: get-repo-modal");
    });
});