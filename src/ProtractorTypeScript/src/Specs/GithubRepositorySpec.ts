import { GithubRepositoryFlows } from './GithubRepositoryFlows';
import { HomePage } from '@PageObjects/HomePage';

describe('Github repositories are presented and behave as expected', function () {
    
    beforeEach(async () => {
        await HomePage.openAndWaitForGitHub();
        await GithubRepositoryFlows.searchGithub('angular');
        await GithubRepositoryFlows.openTheRepoFromTheSearchResult('angular/angular');
    });

    it('Should show the clone or download panel', async () => {
        await GithubRepositoryFlows.openTheCloneOrDownloadPanel();
        await GithubRepositoryFlows.checkCloneOrDownloadPanelLoads();
    });

    it('Find file should load the find page', async () => {
        await GithubRepositoryFlows.clickTheFindFileButton();
        await GithubRepositoryFlows.checkTheFindFilePageLoads();
    });
});
