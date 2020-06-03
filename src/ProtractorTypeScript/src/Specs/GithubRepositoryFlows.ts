import { SearchResultsPage } from '@PageObjects/SearchResultsPage';
import { HomePage } from '@PageObjects/HomePage';
import { RepositoryPage } from '@PageObjects/RepositoryPage';
import { FindFilePage } from '@PageObjects/FindFilePage';

export class GithubRepositoryFlows {

    static async searchGithub(searchTerm: string): Promise<void> {
        await  HomePage.search(searchTerm);
        await SearchResultsPage.waitForPage();
        await SearchResultsPage.clickATopResult(searchTerm);
    }

    static async openTheRepoFromTheSearchResult(searchTerm: string): Promise<void> {
        return SearchResultsPage.clickATopResult(searchTerm);
    }

    static async openTheCloneOrDownloadPanel(): Promise<void> {
        return RepositoryPage.clickCloneOrDownloadBtn();
    }

    static async checkCloneOrDownloadPanelLoads(): Promise<void> {
        return RepositoryPage.waitForCloneOrDownloadPanel();
    }

    static async clickTheFindFileButton(): Promise<void> {
        return RepositoryPage.clickFindFileButton();
    }

    static async checkTheFindFilePageLoads(): Promise<void> {
        return FindFilePage.waitForPage();
    }
}
