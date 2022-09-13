import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/utility/cart.service';
import { FoodService } from 'src/app/utility/food.service';
import { IFood } from 'src/app/utility/IFood';
import { RestService } from 'src/app/utility/rest.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit {
  foodMenuArray:any;
  restArray:any;
  restaurantId:any;
  // food!:IFood;

  searchBy:string="";


  constructor(private _foodService:FoodService, private _cartService:CartService, private _restService:RestService, private _router:Router) { }

  ngOnInit(): void {
    this._restService.getAllRestaurants().subscribe(data=>{
      this.restArray = data;
  
    })
  }


  showFoods(value:any){
    this.restaurantId = value;
    sessionStorage.setItem('restId', this.restaurantId);
    this._router.navigateByUrl('showAllFoodsByRestId');   
  }

  signOut(){
    sessionStorage.removeItem('userId');
  }

 



}
