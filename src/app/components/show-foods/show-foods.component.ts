import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/utility/cart.service';
import { FoodService } from 'src/app/utility/food.service';
import { IFood } from 'src/app/utility/IFood';

@Component({
  selector: 'app-show-foods',
  templateUrl: './show-foods.component.html',
  styleUrls: ['./show-foods.component.scss']
})
export class ShowFoodsComponent implements OnInit {

  foodArray:any;
  restaurantId:any;
  searchBy:string="";

  constructor(private _foodService:FoodService, private _cartService:CartService, private _router:Router) { }

  ngOnInit(): void {
    this.restaurantId = sessionStorage.getItem('restId');
    this._foodService.getFoodMenusByRestId( this.restaurantId).subscribe(data=>{
      this.foodArray =  data;
    });
  }

  //  addToCart(food:IFood){
  //   this._cartService.addFoodToCart(food);
  //   alert('Food added to cart')
  // }

  addToCart(food:IFood){
    if(sessionStorage.getItem('userId') === null){
      alert('Please login to order')
      this._router.navigateByUrl("login");
    }else{
      this._cartService.addFoodToCart(food);
      alert('Food added to cart')
    }   
  }

  addToFavourites(food:IFood){
    if(sessionStorage.getItem('userId') === null){
      alert('Please login to order')

    }else{
      this._cartService.addFoodToFav(food);
      alert('Added to favourites')
    }   
  }

  exportFoodDetail(){
    this._foodService.exportFoodDetail().subscribe(data=>{
      console.log(data);
      alert('Food Details Exported to Food_Item_Details excel file')
    })
  }

  signOut(){
    sessionStorage.removeItem('userId');
  }
  


}
