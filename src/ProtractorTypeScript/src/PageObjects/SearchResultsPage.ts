import { browser, element, by, ExpectedConditions as EC, ElementFinder } from 'protractor';

export class SearchResultsPage{

    public static async waitForPage(): Promise<void> {
       return browser.wait(EC.visibilityOf(this.resultsContainer), 5000);
    }

    public static async clickATopResult(repositoryName: string): Promise<void> {
        return element(by.linkText(repositoryName)).click();
    }

    private static get resultsContainer(): ElementFinder {
        return element(by.className('codesearch-results'))
    };
}
