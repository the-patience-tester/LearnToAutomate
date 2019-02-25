import { CustomReporterResult } from 'jasmine-spec-reporter/built/spec-reporter';
import { browser } from 'protractor';
import * as fs from 'fs';

export class ScreenshotReporter implements jasmine.CustomReporter {
    async specDone(result: CustomReporterResult) {
        if (result.status === 'failed') {
            await this.takeScreenshot();
        }
    }

    private async takeScreenshot() {
        const screenshotData = await browser.takeScreenshot();
        fs.writeFile('screenshots/' + this.uniqueScreenshotName(), screenshotData, 'base64', function (error) {
            if (error) {
                throw error;
            }
        });
    }

    private uniqueScreenshotName(){
        return this.getDateTime() + '.png'
    }

    private getDateTime(){
        return new Date().toISOString().replace(/[:.]/g,'-');
    }
}
