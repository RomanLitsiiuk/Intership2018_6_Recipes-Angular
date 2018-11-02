import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../../shared/components/recipe-card/recipe.interface';
import {RecipesService} from '../../shared/services/recipes.service';
import {Subscription} from 'rxjs/index';
import {PurchasesService} from '../../shared/services/purchases.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  private recipe: Recipe = this.getRecipe();

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private purchasesService: PurchasesService,
    private router: Router
  ) { }

  getRecipe(): Recipe {
    let recipe: Recipe;
    const subscription = this.activatedRoute.data.subscribe(params => recipe = params['recipe']);
    this.subscriptions.push(subscription);
    return recipe;
  }

  editRecipe(): void {
    this.router.navigate(['/recipes', this.recipe.id, 'edit']);
  }

  addToFavorites(recipe): void {
    const subscription = this.recipesService.addToFavorites(recipe.id).subscribe();
    this.subscriptions.push(subscription);
  }

  addToPurchases(ingredients): void {
    const subscription = this.purchasesService.addPurchases(ingredients).subscribe();
    this.subscriptions.push(subscription);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

}
