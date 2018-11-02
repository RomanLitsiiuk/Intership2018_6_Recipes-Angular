import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {RecipesService} from '../../shared/services/recipes.service';
import {Recipe} from '../../shared/components/recipe-card/recipe.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})

export class AddRecipeComponent implements OnInit, OnDestroy {

  private ingredients = [];
  private recipe = this.getRecipe();
  private newRecipe: FormGroup;
  private edit = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  static addNewRecipe(form: FormGroup): Recipe {
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

  getRecipe(): Recipe {
    let recipe: Recipe;
    const subscription = this.activatedRoute.data.subscribe(params => recipe = params['recipe']);
    subscription.unsubscribe();
    return recipe;
  }

  addIngredientField(data = null): void {
    const field = new FormControl(data, [Validators.required]);
    (this.newRecipe.controls['newIngredients'] as FormArray).push(field);
  }

  getArray(): FormArray {
    return this.newRecipe.get('newIngredients') as FormArray;
  }

  getInputValue(value): FormControl {
    return this.newRecipe.get(value) as FormControl;
  }

  initEditForm(recipe): void {
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

  initForm(): void {
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

  onSubmit(form): void {
    const recipe: Recipe = AddRecipeComponent.addNewRecipe(form);
    let subscription;
    if (!this.edit) {
      recipe.likes = 0;
      subscription = this.recipesService.addRecipe(recipe).subscribe(() => {
        this.router.navigate(['recipes']);
      });
    } else {
      recipe.id = this.recipe.id;
      recipe.likes = this.recipe.likes;
      subscription = this.recipesService.editRecipe(recipe).subscribe(() => {
        this.router.navigate(['recipes']);
      });
    }
    this.subscriptions.push(subscription);
  }

  removeIngredient(i): void {
    (this.newRecipe.controls['newIngredients'] as FormArray).controls.splice(+i, 1);
  }

  ngOnInit() {
    if (this.recipe) {
      this.initEditForm(this.recipe);
    } else {
      this.initForm();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}

