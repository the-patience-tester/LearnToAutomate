'use strict';

const EC = protractor.ExpectedConditions;

module.exports = class RepositoryPage {

    static  waitForPage() {
        let repositoryPage = new RepositoryPage();
        browser.wait(EC.visibilityOf(element(by.className('repository-content'))), 5000);
        return repositoryPage;
    }

    static navigateToRepository(repositoryName) {
        browser.get('https://github.com/' + repositoryName);
        return this.waitForPage();
    }

    get cloneOrDownloadBtn() {
       return element(by.className("get-repo-select-menu"))
    };

    get cloneOrDownloadPanel(){
        return element(by.className("get-repo-modal"));
    }

    clickCloneOrDownloadBtn(){
        this.cloneOrDownloadBtn.click();
    }
};