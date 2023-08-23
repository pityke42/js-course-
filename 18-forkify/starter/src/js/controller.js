
import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recepieView from './views/recepieView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';


import 'core-js/stable'; //Polifilling everything
import 'regenerator-runtime/runtime'; //Polifilling async await

// if(module.hot){
//   module.hot.accept();
// };

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    
    if(!id) return;

    recepieView.renderSpinner();

    //1.Loading Recipe
   await model.loadRecipe(id);
   
    //2.Rendering Recipe
    recepieView.render(model.state.recipe);

  } catch (err) {
    recepieView.renderError();
  }
};

const controlSearchResults = async function(){
  try{

    resultsView.renderSpinner();


    //1. Get search Query
    const query = searchView.getQuery();
    if(!query) return;
    
    //2. Load search
    await model.loadSearchResults(query);

    //3. Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(3));
    
  } catch(err){
    console.error(err)
  }
}
controlSearchResults();

const init = function(){
  recepieView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();


