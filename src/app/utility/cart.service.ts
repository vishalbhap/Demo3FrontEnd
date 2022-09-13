import { Injectable } from '@angular/core';
import { IFood } from './IFood';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartList:IFood[]=[
    
  ]; 

  getCartList():IFood[]{
    return this.cartList;
  }

  addFoodToCart(food:IFood){
    this.cartList.push(food);
  }

//FavList Details
  favList:IFood[]=[
    
  ];

  getfavList():IFood[]{
    return this.favList;
  }

  addFoodToFav(food:IFood){
    this.favList.push(food);
  }
}
