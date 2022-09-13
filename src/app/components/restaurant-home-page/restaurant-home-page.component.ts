import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/utility/cart.service';
import { FoodService } from 'src/app/utility/food.service';
import { IFood } from 'src/app/utility/IFood';

@Component({
  selector: 'app-restaurant-home-page',
  templateUrl: './restaurant-home-page.component.html',
  styleUrls: ['./restaurant-home-page.component.scss']
})
export class RestaurantHomePageComponent implements OnInit {

  foodArray:any;
  restaurantId:any;

  constructor(private _foodService:FoodService, private _cartService:CartService, private _router:Router) { }

  ngOnInit(): void {
    this.restaurantId = sessionStorage.getItem('restId');
    this._foodService.getFoodMenusByRestId( this.restaurantId).subscribe(data=>{
      this.foodArray =  data;
    });
  }

   addToCart(food:IFood){
    this._cartService.addFoodToCart(food);
    alert('Food added to cart2')
  }

  editPage(value:any){
    sessionStorage.setItem('foodId', value);
    this._router.navigateByUrl('editFood');
  }

  deleteFood(value:any){
    console.log(value);
    this._router.navigateByUrl('restaurantHome');
    this._foodService.deleteFood(value).subscribe(data=>{
      // console.log(data);
    });
    // this._router.onSameUrlNavigation = 'reload';   
    window.location.reload();
    
  }

  signOut(){
    sessionStorage.removeItem('restId');
  }

}
