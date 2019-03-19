import { SpecReporter } from 'jasmine-spec-reporter';

export class Reporter extends SpecReporter {
    constructor() {
        super({
            suite: {
                displayNumber: true
            },
            spec: {
                displayPending: true,
                displayDuration: true,
                displayStacktrace: true
            },
            summary: {
                displayPending: true
            }
        });
    }
}
