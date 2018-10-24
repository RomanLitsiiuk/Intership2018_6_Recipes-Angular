import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RecipesService} from "../shared/services/recipes.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  private favorites = this.mainService.favorites;

  constructor(
    private router: Router,
    private mainService: RecipesService
  ) { }

  ngOnInit() {
  }

}
