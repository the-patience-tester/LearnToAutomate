import { Config, browser } from 'protractor';
import { Configure } from './Reporters.config';

require('module-alias/register');

export let config: Config = {
    specs: ['../src/**/*Spec.js'],
    webDriverLogDir: 'logs/',

    onPrepare: function () {
        Configure.reporters();

        browser.waitForAngularEnabled(false);
        browser.driver.manage().timeouts().pageLoadTimeout(60000);
        browser.driver.manage().deleteAllCookies();
    }
};
