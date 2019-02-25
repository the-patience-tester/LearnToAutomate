import { CloneOrDownloadFlow } from './CloneOrDownloadFlow';
import { HomePage } from '@PageObjects/HomePage';

describe('the clone or download button and dialog appear and can be interacted with', function () {
    
    beforeEach(async function () {
        const h = new HomePage();
        await h.openAndWaitForGitHub();
    });

    it('should show the clone or  download panel', async function () {
        const f = new CloneOrDownloadFlow();
        await f.searchGithub('angular');
        await f.openTheRepoFromTheSearchResult('angular/angular');
        await f.checkCloneOrDownloadPanelLoads();
    });

});
