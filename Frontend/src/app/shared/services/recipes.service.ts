import {Recipe} from '../components/recipe-card/recipe.interface';
import {Observable, Subject} from 'rxjs/index';
import {tap} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class RecipesService {

  likesUp = new Subject<Recipe>();
  likesDown = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  constructor(
    private http: HttpClient
  ) {}

  getData(link): Observable<any> {
    return this.http.get(link);
  }

  addRecipe(data: Recipe): Observable<any> {
    return this.http.post('/recipes', data);
  }

  editRecipe(data: Recipe): Observable<any> {
    return this.http.put('/recipes', data);
  }

  deleteRecipe(id) {
    return this.http.delete(`/recipes/${id}`, id);
  }

  getRecipe(value) {
    return this.http.get(`/recipes/${value}`);
  }

  upLike(recipeId): Observable<any> {
    return this.http.post<Recipe>(`/recipes/likes`, {id: recipeId})
      .pipe(
      tap((res: Recipe) => {
        this.likesUp.next(res);
      })
    );
  }

  downLike(recipeId): Observable<any> {
    return this.http.post('/recipes/dislikes', {id: recipeId})
      .pipe(
      tap((res: Recipe) => {
        this.likesUp.next(res);
      })
    );
  }

  addToFavorites(dataId: string) {
    return this.http.post('/favorites', {id: dataId});
  }

  removeFromFavorites (id: string) {
    return this.http.delete(`/favorites/${id}`);
  }
}
