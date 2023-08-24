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
    // console.log(state.recipe);
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
    console.log(state.search.results);
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
}