import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {FavoritesComponent} from "./favorites.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {path: '', component: FavoritesComponent},
];

@NgModule ({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFontAwesomeModule,
    SharedModule
  ]
})

export class FavoritesModule {}
