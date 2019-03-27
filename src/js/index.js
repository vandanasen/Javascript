import Search from './models/Search';
import * as searchView from './views/SearchView';
import  {elements} from './views/base';

const state={};
const controlSearch=async()=>{
    const query=searchView.getInput();
    console.log(query);
    if(query){
        state.search = new Search(query);
        searchView.clearInput();
        searchView.clearResults();
        await state.search.getResults();
        //console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }
}
elements.searchForm.addEventListener('submit',e=>{e.preventDefault();
controlSearch();
});