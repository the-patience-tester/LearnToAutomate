import { browser, element, by, ExpectedConditions as EC } from 'protractor';

export class RepositoryPage {

    get cloneOrDownloadBtn() {
        return element(by.className('get-repo-select-menu'))
    };

    get cloneOrDownloadPanel(){
        return element(by.className('get-repo-modal'));
    }

    async waitForPage() {
        await browser.wait(EC.visibilityOf(element(by.className('repository-content'))), 5000);
    }
    async waitFornCloneOrDownloadPanel(){
        await browser.wait(EC.visibilityOf(this.cloneOrDownloadPanel), 5000);
    }

    async navigateToRepository(repositoryName: string) {
        browser.get('https://github.com/' + repositoryName);
        await this.waitForPage();
    }

    async clickCloneOrDownloadBtn(){
        await this.cloneOrDownloadBtn.click();
    }
};
