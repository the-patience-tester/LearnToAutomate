import { SwitchTo } from '@PageObjects/Common/SwitchToWindow';
import { SearchResultsPage } from '@PageObjects/SearchResultsPage';
import { HomePage } from '@PageObjects/HomePage';
import { RepositoryPage } from '@PageObjects/RepositoryPage';

export class CloneOrDownloadFlow {

    async searchGithub(searchTerm: string) {
        const h = new HomePage();
        await  h.search(searchTerm);
        const s = new SearchResultsPage();
        await s.waitForPage();
        await s.clickATopResult(searchTerm);
    }

    async openTheRepoFromTheSearchResult(searchTerm: string) {
        const s = new SearchResultsPage();
        await s.clickATopResult(searchTerm);
    }

    async checkCloneOrDownloadPanelLoads(){
        const r =  new RepositoryPage();
        await r.clickCloneOrDownloadBtn();
        await r.waitFornCloneOrDownloadPanel();
    }

}
