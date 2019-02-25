import { ScreenshotReporter } from './Screenshot.reporter';
import { Reporter as SpecReporter } from './Spec.reporter';

export namespace Configure {

    export function reporters() {
        jasmine.getEnv().clearReporters();

        jasmine.getEnv().addReporter(new SpecReporter());
        jasmine.getEnv().addReporter(new ScreenshotReporter());
    }
    
}