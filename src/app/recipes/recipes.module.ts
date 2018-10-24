import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecipesComponent} from "./recipes.component";
import {RecipesResolverService} from "./recipes-resolver.service";
import {RecipeComponent} from "./recipe/recipe.component";
import {RecipeResolverService} from "./recipe/recipe-resolver.service";
import {AddRecipeComponent} from "./add-recipe/add-recipe.component";
import {EditGuardService} from "./edit-recipe/edit-guard.service";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: '', component: RecipesComponent, resolve: {recipes: RecipesResolverService}, children: [
    {path: 'add-recipe', component: AddRecipeComponent},
    {path: ':id', component: RecipeComponent, resolve: {recipe: RecipeResolverService}},
    {path: ':id/edit', component: AddRecipeComponent,  resolve: {recipe: RecipeResolverService}, canActivate: [EditGuardService]}
  ]},
];

@NgModule ({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    AddRecipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class RecipesModule {}
