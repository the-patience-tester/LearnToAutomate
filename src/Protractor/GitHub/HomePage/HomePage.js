'use strict';

const SearchResultsPage = require('../Repositories/SearchResultsPage.js');
const EC = protractor.ExpectedConditions;

module.exports = class HomePage {

    get searchBox() { return element(by.name("q")); }

    static waitForPage(){
        let homePage = new HomePage();
        browser.wait(EC.visibilityOf(homePage.searchBox), 5000);
        return homePage;
    }

    search(searchTerm){
        this.searchBox.sendKeys(searchTerm);
        this.searchBox.sendKeys(protractor.Key.ENTER);
        return SearchResultsPage.waitForPage();
    }
};