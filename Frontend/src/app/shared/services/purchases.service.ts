import {Observable, Subject} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class PurchasesService {

  constructor(private http: HttpClient) {}

  purchasesChanged = new Subject<any>();

  getData(link): Observable<any> {
    return this.http.get(link);
  }

  addPurchase(value: string): Observable<any> {
    return this.http.post('/purchases', {purchases: value});
  }

  addPurchases(array): Observable<any> {
    return this.http.post('/purchases', {purchases: array});
  }

  deletePurchase(id: string): Observable<any> {
    return this.http.delete(`/purchases/${id}`);
  }
}
