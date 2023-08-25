import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';
import { RES_PER_PAGE } from './config.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    if(state.bookmarks.some(bookmark => bookmark.id === id)){
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    };

  } catch (err) {
    console.error(err);
    //Temporary error handling
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    // console.log(data);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  //This logic works for every page
  const start = (page - 1) * state.search.resultsPerPage; //result = 0;
  const end = page * state.search.resultsPerPage; //result 9

  return state.search.results.slice(start, end);
};

export const updateServings = function(newServings){
  state.recipe.ingredients.forEach(ing => {
    // new quantity = old quantity * new serevings / old servings// 2*8/4=4
    ing.quantity = ing.quantity * newServings / state.recipe.servings;

  });

  state.recipe.servings = newServings;
};

export const addBookmark = function(recipe){
  //Add bookmark
  state.bookmarks.push(recipe);

  //Mark current recipe as bookmark
  if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;
}

export const deleteBookmark = function(id){
  //Delete bookmark
  const index = state.bookmarks.findIndex(element => element.id === id);
  state.bookmarks.splice(index, 1);

  //Delete the bookmarked Mark
  if(id === state.recipe.id) state.recipe.bookmarked = false;

}