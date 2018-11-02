import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {RecipesService} from '../../shared/services/recipes.service';
import {Recipe} from '../../shared/components/recipe-card/recipe.interface';

@Injectable({
  providedIn: 'root'
})

export class RecipeResolverService implements Resolve<any> {

  constructor(private mainService: RecipesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> | Promise<Recipe> | Recipe {
    const id = route.params['id'];
    return this.mainService.getRecipe(id);
  }

}
