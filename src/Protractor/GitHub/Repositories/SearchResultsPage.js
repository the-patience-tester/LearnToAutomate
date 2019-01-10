'use strict';

const RepositoryPage = require('./RepositoryPage.js');
const EC = protractor.ExpectedConditions;

module.exports = class SearchResultsPage {

    static waitForPage(){
        let searchResultsPage = new SearchResultsPage();
        browser.wait(EC.visibilityOf(searchResultsPage.resultsContainer), 5000);
        return searchResultsPage;
    }

    get resultsContainer() {
        return element(by.className("codesearch-results"))
    };

    clickATopResult(repositoryName){
        element(by.linkText(repositoryName)).click();
        return RepositoryPage.waitForPage();
    }

};