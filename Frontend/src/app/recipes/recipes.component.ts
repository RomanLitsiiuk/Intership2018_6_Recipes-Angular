import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipesService} from '../shared/services/recipes.service';
import {Subscription} from 'rxjs/index';
import {Recipe} from '../shared/components/recipe-card/recipe.interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public recipes: Recipe[];
  private children = false;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  getRecipes(): Recipe[] {
    const subscription = this.recipesService.getData('/recipes').subscribe(data => {
      this.recipes = data;
    });
    this.subscriptions.push(subscription);
    return this.recipes;
  }

  removeRecipe(id: string): void {
    const subscription = this.recipesService.deleteRecipe(id).subscribe(() => {
      this.recipes = this.getRecipes();
    });
    this.subscriptions.push(subscription);
  }

  goToAddRecipe(): void {
    this.router.navigate(['recipes/add-recipe']);
  }

  onActivate(): void {
    this.children = true;
  }

  onDeactivate(): void {
    this.children = false;
  }

  ngOnInit() {
    const subscription =  this.route.data.subscribe((data) => {
      this.recipes = data.recipes;
      }
    );
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

}
