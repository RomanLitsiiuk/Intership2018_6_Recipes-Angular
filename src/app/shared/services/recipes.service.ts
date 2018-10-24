import {Recipe} from "../components/recipe-card/recipe.interface";
import RecipesData from '../../../assets/js/recipes.js';
import {Subject} from "rxjs/index";

export class RecipesService {
  recipes: Recipe[] = RecipesData;
  favorites: Recipe[] = [RecipesData[2], RecipesData[4]];

  likesUp = new Subject<Recipe>();
  likesDown = new Subject<Recipe>();

  addRecipe(data: Recipe) {
    this.recipes.push(data);
  }

  deleteRecipe(title) {
    const deleteRecipe: number = this.recipes.indexOf(this.recipes.find((recipe) => {
      return recipe.title === title;
    }));
    this.recipes.splice(deleteRecipe, 1);
  }

  getNewID() {
    const idArray = this.recipes.map((recipe) => {
      return +recipe.id;
    });
    return Math.max(...idArray) + 1;
  }

  getRecipe(value) {
    return this.recipes.find((recipe) => {
      return recipe.id === value;
    });
  }

  addToFavorites(recipe: Recipe) {
    this.favorites.push(recipe);
  }

  changeRecipe(recipeData) {
    const target = this.recipes.find((recipe) => {
      return recipe.id === recipeData.id;
    });
    if (target) {
      console.log(this.recipes.indexOf(target));
      this.recipes.splice(this.recipes.indexOf(target), 1, recipeData);
    } else {
      this.recipes.push(recipeData);
    }
    console.log(recipeData);
  }

  upLike(id) {
    const recipe = this.recipes.find((recipeData: Recipe) => {
      return recipeData.id === id;
    });
    return this.likesUp.next(recipe);
  }

  downLike(id) {
    const recipe = this.recipes.find((recipeData: Recipe) => {
      return recipeData.id === id;
    });
    if (recipe.likes > 0) {
      return this.likesDown.next(recipe);
    }
  }

  removeFromFavorites (title: string) {
    const deleteRecipe: number = this.favorites.indexOf(this.favorites.find((recipe) => {
      return recipe.title === title;
    }));
    this.favorites.splice(deleteRecipe, 1);
  }
}
