import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipesService} from '../shared/services/recipes.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  private favorites = this.getFavorites();

  constructor(
    private recipesService: RecipesService
  ) { }

  getFavorites(): void {
    const subscription = this.recipesService.getData('/favorites').subscribe(data => {
      this.favorites = data;
    });
    this.subscriptions.push(subscription);
  }

  removeRecipe(id: string): void {
    const subscription = this.recipesService.removeFromFavorites(id).subscribe(() => {
      this.favorites = this.getFavorites();
    });
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
