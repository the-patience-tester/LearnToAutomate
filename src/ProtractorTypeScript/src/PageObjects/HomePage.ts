import { browser, element, by, protractor, ExpectedConditions as EC } from 'protractor';

export class HomePage {

    get searchBox() { return element(by.name('q')); }

    public async openAndWaitForGitHub(){
        //This needs to be set before browser.get() if the page that's returned is not an Angular page
        await browser.waitForAngularEnabled(false);

        await browser.get('https://github.com/');
        await browser.wait(EC.visibilityOf(this.searchBox), 5000);
    }

    search(searchTerm: string){
        this.searchBox.sendKeys(searchTerm);
        this.searchBox.sendKeys(protractor.Key.ENTER);
    }
}
