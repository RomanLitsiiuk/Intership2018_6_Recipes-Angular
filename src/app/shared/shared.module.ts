import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {RecipeCardComponent} from "./components/recipe-card/recipe-card.component";
import {HeaderComponent} from "./components/header/header.component";
import {HighlightDirective} from "./directives/highlight.directive";
import {RouterModule} from "@angular/router";

@NgModule ({
  declarations: [
    RecipeCardComponent,
    HeaderComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule
  ],
  exports: [
    RecipeCardComponent,
    HeaderComponent,
    HighlightDirective
  ]
})

export class SharedModule {}
