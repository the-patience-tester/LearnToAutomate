'use strict';

const chai = require('chai');
const  chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);

const HomePage = require('../HomePage/HomePage.js');

describe('Goodest: the clone or download button and dialog appear and can be interacted with', function() {

    beforeEach(function () {
        browser.waitForAngularEnabled(false); //This needs to be set before browser.get() if the page that's returned is not an Angular page
        browser.get('https://github.com/');
    });

    it('Goodest: should show clone or download panel', function() {
        // Given
        let homePage = HomePage.waitForPage();
        let searchResultsPage = homePage.search("angular");
        let repositoryPage =  searchResultsPage.clickATopResult("angular/angular");

        // When
        repositoryPage.clickCloneOrDownloadBtn();

        // Then
        repositoryPage.cloneOrDownloadPanel.isPresent().should.eventually.equal(true, "unable to find Clone/Download Panel");
    });
});