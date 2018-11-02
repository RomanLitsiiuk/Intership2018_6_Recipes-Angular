import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {RecipesService} from '../shared/services/recipes.service';
import {Recipe} from '../shared/components/recipe-card/recipe.interface';


@Injectable({
  providedIn: 'root'
})

export class RecipesResolverService implements Resolve<any> {

  constructor(private recipesService: RecipesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    return this.recipesService.getData('/recipes');
  }

}
