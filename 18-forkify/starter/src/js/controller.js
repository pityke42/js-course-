
import * as model from './model.js';
import recepieView from './views/recepieView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';


import 'core-js/stable'; //Polifilling everything
import 'regenerator-runtime/runtime'; //Polifilling async await
import { async } from 'regenerator-runtime';

// if(module.hot){
//   module.hot.accept();
// };

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    
    if(!id) return;

    recepieView.renderSpinner();
    
    //0. Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    //1. Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);
    
    //2.Loading Recipe
    await model.loadRecipe(id);
    
    //3.Rendering Recipe
    recepieView.render(model.state.recipe);
    
  } catch (err) {
    recepieView.renderError();
    console.error(err)
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
    resultsView.render(model.getSearchResultsPage());

    //4. Render initial pagination buttons
    paginationView.render(model.state.search);
    
  } catch(err){
    console.error(err)
  }
}
const controlPagination = function(goToPage){
  //1. Render NEW results
    resultsView.render(model.getSearchResultsPage(goToPage));

  //2. Render NEW pagination buttons
    paginationView.render(model.state.search);
}

const controlServings = function(newServings){
  //Update the recipe servings (in state)
    model.updateServings(newServings);

  //Update the View
  // recepieView.render(model.state.recipe);
  recepieView.update(model.state.recipe);
}

const controlAddBookmark = function(){
  //1. Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2. Update recipeView
  recepieView.update(model.state.recipe);

  //3. Render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function(){
  bookmarksView.render(model.state.bookmarks)
}

const init = function(){
  bookmarksView.addHandlerRender(controlBookmarks);
  recepieView.addHandlerRender(controlRecipes);
  recepieView.addHandlerUpdateServings(controlServings);
  recepieView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  
}
init();


