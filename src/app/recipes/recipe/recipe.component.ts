import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../shared/components/recipe-card/recipe.interface";
import {RecipesService} from "../../shared/services/recipes.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  private recipe: Recipe = this.getRecipe();

  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: RecipesService,
    private router: Router
  ) { }

  getRecipe() {
    let recipe: Recipe;
    const subscription = this.activatedRoute.data.subscribe(params => recipe = params['recipe']);
    subscription.unsubscribe();
    return recipe;
  }

  editRecipe() {
    this.router.navigate(['/recipes', this.recipe.id, 'edit']);
  }

  addToFavorites(recipe) {
    this.mainService.addToFavorites(recipe);
  }

  goToPurchase() {
    this.router.navigate([`/purchases`]);
  }

  ngOnInit() {
  }

}
