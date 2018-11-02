import {Component, OnDestroy, OnInit} from '@angular/core';
import { PurchasesService } from '../shared/services/purchases.service';
import {Subscription} from 'rxjs/index';
import {Purchase} from './purchase.interface';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})

export class PurchasesComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public purchases: Purchase[] = [];

  constructor(
    private purchasesService: PurchasesService,
  ) { }

  getPurchases(): Purchase[] {
    const subscription = this.purchasesService.getData('/purchases').subscribe((data) => {
      this.purchases = data;
    });
    this.subscriptions.push(subscription);
    return this.purchases;
  }

  newPurchase(value: string): void {
    const subscription = this.purchasesService.addPurchase(value).subscribe(() => {
      this.purchases = this.getPurchases();
    });
    this.subscriptions.push(subscription);
  }

  removePurchase(value: string): void {
    const subscription = this.purchasesService.deletePurchase(value).subscribe(() => {
      const index = this.purchases.find((purchase) => {
        return purchase.id === value;
      });
      this.purchases.splice(this.purchases.indexOf(index), 1);
    });
    this.subscriptions.push(subscription);
  }

  ngOnInit() {
    this.purchases = this.getPurchases();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
