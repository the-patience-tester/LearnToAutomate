import { browser, element, by, ExpectedConditions as EC } from 'protractor';

export class SearchResultsPage{

    get resultsContainer() {
        return element(by.className('codesearch-results'))
    };

    async waitForPage(){
       await  browser.wait(EC.visibilityOf(this.resultsContainer), 5000);
    }

    async clickATopResult(repositoryName: string){
        await element(by.linkText(repositoryName)).click();
    }
}
