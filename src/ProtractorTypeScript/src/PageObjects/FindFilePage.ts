import { browser, by, element, ElementFinder, ExpectedConditions as EC } from 'protractor';

export class FindFilePage {

    public static async waitForPage(): Promise<void> {
        return browser.wait(EC.visibilityOf(this.findFileField), 5000);
    }

    private static get findFileField(): ElementFinder {
        return element(by.id('tree-finder-field'))
    };
}
