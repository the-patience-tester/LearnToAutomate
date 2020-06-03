import { browser, element, by, protractor, ExpectedConditions as EC, ElementFinder } from 'protractor';

export class HomePage {

    public static async openAndWaitForGitHub(): Promise<void> {
        //This needs to be set before browser.get() if the page that's returned is not an Angular page
        await browser.waitForAngularEnabled(false);

        await browser.get('https://github.com/');
        await browser.wait(EC.visibilityOf(this.searchBox), 5000);
    }

    public static async search(searchTerm: string): Promise<void> {
        await this.searchBox.sendKeys(searchTerm);
        await this.searchBox.sendKeys(protractor.Key.ENTER);
    }

    private static get searchBox(): ElementFinder {
        return element(by.name('q'));
    }
}
