import {NgModule} from "@angular/core";
import {PurchasesComponent} from "./purchases.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {PurchasesResolverService} from "./purchases-resolver.service";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: PurchasesComponent, resolve: {purchases: PurchasesResolverService}},
];

@NgModule ({
  declarations: [
    PurchasesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class PurchasesModule {}
