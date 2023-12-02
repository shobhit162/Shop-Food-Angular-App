import { Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredients[];
  private idChanged:Subscription

constructor(private shoppingListService: ShoppingListService){}
  ngOnDestroy(): void {
   this.idChanged.unsubscribe();
  }
ngOnInit() {
 this.ingredients=this.shoppingListService.getIngredients();
this.idChanged =  this.shoppingListService.ingredientsChanged.subscribe(
  (ingredients:Ingredients[])=>{
    this.ingredients=ingredients;
  }
 )
}
onEditItem(index: number){
this.shoppingListService.startedEditing.next(index);
}

}
