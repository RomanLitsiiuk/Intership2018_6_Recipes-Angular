import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PurchasesService } from "../shared/services/purchases.service";

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {

  public purchases = this.activatedRoute.snapshot.data['purchases'];

  constructor(
    private purchasesService: PurchasesService,
    private activatedRoute: ActivatedRoute
  ) { }

  newPurchase(value: string) {
    this.purchasesService.addPurchase(value);
  }

  removePurchase(value: string) {
    this.purchasesService.deletePurchase(value);
  }

  ngOnInit() {
  }

}
