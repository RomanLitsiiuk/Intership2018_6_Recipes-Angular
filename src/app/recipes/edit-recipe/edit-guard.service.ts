import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";

@Injectable ({
  providedIn: 'root'
})

export class EditGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    return confirm('Are you sure you want to edit this recipe?');
  }
}
