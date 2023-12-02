import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { Injectable, inject } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})

// export class RecipeResolverService implements Resolve<Recipe[]>{
//     constructor(private dataStorageService: DataStorageService){}

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
//         return this.dataStorageService.fetchRecipes();
//     }
// }

// export class RecipeResolverService {
 
//     constructor() { }
    
//     static fetchRecipes: ResolveFn<Recipe[]> = 
//     (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//       const recipes = inject(RecipeService).getRecipes();
//       if (recipes.length === 0) {
//         return inject(DataStorageService).fetchRecipes();
//       } else {
//         return recipes;
//       }
//     };
//   }
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
