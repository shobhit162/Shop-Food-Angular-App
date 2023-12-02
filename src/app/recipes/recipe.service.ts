import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
      recipesChanged = new Subject<Recipe[]>();
    // recipeSelected = new Subject<Recipe>();
    // private recipes: Recipe[] = [
    //     new Recipe('A test Recipe',
    //      'This is simply a test',
    //       'https://st2.depositphotos.com/3889193/7173/i/950/depositphotos_71739083-stock-photo-healthy-vegetarian-home-made-food.jpg',
    //       [
    //         new Ingredients('Meat', 1),
    //         new Ingredients('French Fries', 20)
    //       ]),
    //     new Recipe('Big Fat Recipe',
    //      'Another Recipe hai ye',
    //       'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/8f05cb88-1a61-4d69-a75e-74be87e533e4/b3598f48-b8ca-4eda-b091-800804d2cba1/1280x720/match/image.jpg',
    //       [
    //         new Ingredients('Hehe', 1),
    //         new Ingredients('Burger King', 20)
    //       ])
    //   ];

    private recipes: Recipe[] = [];
      constructor(private slService: ShoppingListService){}
      
      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
      return this.recipes[index];
      }
      addIngre(ingredients:Ingredients[]){
        this.slService.addIngredientss(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice()); 
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice()); 
      }
}