import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../shared/components/recipe-card/recipe.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  private recipe: Recipe = this.getRecipe();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  getRecipe() {
    let recipe: Recipe;
    const subscription = this.activatedRoute.data.subscribe(params => recipe = params['recipe']);
    subscription.unsubscribe();
    return recipe;
  }

  goToAllRecipes() {
    this.router.navigate(['/recipes']);
  }

  editRecipe() {
    console.log('edit!');
  }

  ngOnInit() {
  }

}
