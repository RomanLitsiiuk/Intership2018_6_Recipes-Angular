import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {RecipesService} from '../../shared/services/recipes.service';
import {Recipe} from "../../shared/components/recipe-card/recipe.interface";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})

export class AddRecipeComponent implements OnInit {

  private addRecipeControl: FormControl;
  private ingredients = [];
  private recipe = this.getRecipe();
  private newRecipe: FormGroup;
  private edit = false;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) { }

  static addNewRecipe(form: FormGroup) {
    const formData = form.value;
    return {
      title: formData.newTitle,
      description: formData.newDescription,
      photoUrl: formData.newImage,
      ingredients: formData.newIngredients,
      instructions: formData.newInstructions,
      categoryId: formData.newCategory,
      id: '0',
      likes: 0
    };
  }

  getRecipe() {
    let recipe: Recipe;
    const subscription = this.activatedRoute.data.subscribe(params => recipe = params['recipe']);
    subscription.unsubscribe();
    return recipe;
  }

  addIngredientField(data = null) {
    const field = new FormControl(data, [Validators.required]);
    (this.newRecipe.controls['newIngredients'] as FormArray).push(field);
  }

  getArray() {
    return this.newRecipe.get('newIngredients') as FormArray;
  }

  getInputValue(value) {
    return this.newRecipe.get(value) as FormControl;
  }

  initEditForm(recipe) {
    this.newRecipe = new FormGroup({
      'newTitle': new FormControl(recipe.title, [Validators.required, Validators.maxLength(50)]),
      'newDescription': new FormControl(recipe.description, [Validators.required]),
      'newImage': new FormControl(recipe.photoUrl, [
        Validators.required,
        Validators.pattern(
          '^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$'
        )
      ]),
      'newIngredients': new FormArray([]),
      'newInstructions': new FormControl(recipe.instructions, [Validators.required]),
      'newCategory': new FormControl(recipe.categoryId, [Validators.required])
    });
    recipe.ingredients.forEach((ingredient) => {
      this.addIngredientField(ingredient);
    });
    this.edit = true;
  }

  initForm() {
    this.newRecipe = new FormGroup({
      'newTitle': new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
      'newDescription': new FormControl(null, [Validators.required]),
      'newImage': new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$'
        )
      ]),
      'newIngredients': new FormArray([]),
      'newInstructions': new FormControl(null, [Validators.required]),
      'newCategory': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(form) {
    const recipe: Recipe = AddRecipeComponent.addNewRecipe(form);
    if (!this.edit) {
      recipe.id = this.recipesService.getNewID().toString();
      recipe.likes = 0;
    } else {
      recipe.id = this.recipe.id;
      recipe.likes = this.recipe.likes;
    }
    this.recipesService.changeRecipe(recipe);
  }

  removeIngredient(i) {
    (this.newRecipe.controls['newIngredients'] as FormArray).controls.splice(+i, 1);
  }

  ngOnInit() {
    if (this.recipe) {
      this.initEditForm(this.recipe);
    } else {
      this.initForm();
    }
  }
}

