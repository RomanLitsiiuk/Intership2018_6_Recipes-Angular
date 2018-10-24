import {Subject} from 'rxjs/index';

export class PurchasesService {
  purchases: string[] = ['bread', 'milk', '1 cup fresh lime juice', '1/2 cup tequila', '1/4 cup chopped fresh cilantro'];

  purchasesChanged = new Subject<any>();

  addPurchase(value) {
    this.purchases.push(value);
  }

  deletePurchase(value) {
    this.purchases.splice(this.purchases.indexOf(value), 1);
  }
}
