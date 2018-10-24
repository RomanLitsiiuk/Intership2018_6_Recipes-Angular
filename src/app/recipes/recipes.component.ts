import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  public recipes = this.activatedRoute.snapshot.data['recipes'];
  private children = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  goToAddRecipe() {
    this.router.navigate(['recipes/add-recipe']);
  }

  onActivate() {
    this.children = true;
  }

  onDeactivate() {
    this.children = false;
  }

  ngOnInit() {
  }

}
