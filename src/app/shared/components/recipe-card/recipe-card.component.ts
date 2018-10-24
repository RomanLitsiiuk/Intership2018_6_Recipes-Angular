import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipe.interface';
import {Router} from '@angular/router';
import {RecipesService} from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnDestroy {

  @Input() recipeData: Recipe;
  private subscribe1;
  private subscribe2;

  constructor(
    private mainService: RecipesService,
    private router: Router
  ) { }

  removeRecipe(title: string) {
    this.mainService.deleteRecipe(title);
  }

  showRecipe(recipe) {
    this.router.navigate(['/recipes', recipe.id]);
  }

  editRecipe(recipe) {
    this.router.navigate(['/recipes', recipe.id, 'edit']);
  }

  like(id) {
    this.mainService.upLike(id);
  }

  dislike(id) {
    this.mainService.downLike(id);
  }

  ngOnInit() {
    this.subscribe1 = this.mainService.likesUp.subscribe((recipe: Recipe) => {
      if (this.recipeData === recipe) {
        this.recipeData.likes++;
      }
    });
    this.subscribe2 = this.mainService.likesDown.subscribe((recipe: Recipe) => {
      if (this.recipeData === recipe) {
        this.recipeData.likes--;
      }
    });
  }

  ngOnDestroy() {
    this.subscribe1.unsubscribe();
    this.subscribe2.unsubscribe();
  }

}
