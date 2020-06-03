import { browser, element, by, ExpectedConditions as EC, ElementFinder } from 'protractor';

export class RepositoryPage {

    public static async navigateToRepository(repositoryName: string): Promise<void> {
        await browser.get('https://github.com/' + repositoryName);
        await this.waitForPage();
    }

    public static async waitForPage(): Promise<void> {
        return browser.wait(EC.visibilityOf(element(by.className('repository-content'))), 5000);
    }

    public static async waitForCloneOrDownloadPanel(): Promise<void> {
        await browser.wait(EC.visibilityOf(this.cloneOrDownloadPanel), 5000);
    }

    public static async clickCloneOrDownloadBtn(): Promise<void> {
        return this.cloneOrDownloadBtn.click();
    }

    public static async clickFindFileButton(): Promise<void> {
        return this.findFileBtn.click();
    }

    private static get cloneOrDownloadBtn(): ElementFinder {
        return element(by.css('get-repo-controller'))
    };

    private static get cloneOrDownloadPanel(): ElementFinder {
        return element(by.className('get-repo-modal'));
    }

    private static get findFileBtn(): ElementFinder {
        return element(by.css('.BtnGroup a:last-child'))
    };
};
