import { Ingredients } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredients[]>();
    startedEditing=new Subject<number>();
    private ingredients: Ingredients[] = [
        new Ingredients('Apples', 5),
        new Ingredients('Tomatoes', 10)
      ];
    getIngredients(){
        return this.ingredients.slice();
      }

    getIngredient(index:number){
      return this.ingredients[index];
    }
    addIngredients(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredientss(ingredients:Ingredients[]){
// for(let ingredient of ingredients){
//     this.addIngredients(ingredient);
// }
this.ingredients.push(...ingredients);
this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number, newIngredient: Ingredients){
      this.ingredients[index]=newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredients(index:number){
      this.ingredients.splice(index,1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}