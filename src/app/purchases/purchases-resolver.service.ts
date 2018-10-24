import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";
import {PurchasesService} from "../shared/services/purchases.service";

@Injectable({
  providedIn: 'root'
})

export class PurchasesResolverService implements Resolve<any> {

  constructor(private purchasesSevice: PurchasesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> | Promise<string[]> | string[] {
    return this.purchasesSevice.purchases;
  }

}
