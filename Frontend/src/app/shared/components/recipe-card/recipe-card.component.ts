import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.interface';
import {Router} from '@angular/router';
import {RecipesService} from '../../services/recipes.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnDestroy {

  @Input() recipeData: Recipe;
  @Output() removeRecipe: EventEmitter<any> = new EventEmitter;
  private subscriptions: Subscription[] = [];

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) { }

  onRemoveRecipe(id: string): void {
    this.removeRecipe.emit(id);
  }

  showRecipe(recipe): void {
    this.router.navigate(['/recipes', recipe.id]);
  }

  editRecipe(recipe): void {
    this.router.navigate(['/recipes', recipe.id, 'edit']);
  }

  like(id): void {
    const subscribe = this.recipesService.upLike(id).subscribe();
    this.subscriptions.push(subscribe);
  }

  dislike(id): void {
    const subscribe = this.recipesService.downLike(id).subscribe();
    this.subscriptions.push(subscribe);
  }

  ngOnInit() {
    const subscribe1 = this.recipesService.likesUp.subscribe((recipe: Recipe) => {
      if (this.recipeData.id === recipe.id) {
        this.recipeData = recipe;
      }
    });
    const subscribe2 = this.recipesService.likesDown.subscribe((recipe: Recipe) => {
      if (this.recipeData.id === recipe.id) {
        this.recipeData = recipe;
      }
    });
    this.subscriptions.push(subscribe1, subscribe2);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

}
