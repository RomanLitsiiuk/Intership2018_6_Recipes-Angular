import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public pages = {
    recipes: 'All Recipes',
    purchases: 'Purchases',
    favorites: 'Favorites'
  };

  public page = this.pages.recipes;

  switchPage(event) {
    this.page = event.textContent;
  }
}
