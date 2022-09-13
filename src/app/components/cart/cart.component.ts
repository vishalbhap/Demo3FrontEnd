import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/utility/cart.service';
import { FoodService } from 'src/app/utility/food.service';
import { IFood } from 'src/app/utility/IFood';
import { IPlaceOrder } from 'src/app/utility/IPlaceOrder';
import { PlaceOrderService } from 'src/app/utility/place-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartArrayForRestId!:IFood[];

  // cartArray:any;
  cartArray!:IFood[];
  restaurantId:any = 0;
  userId:any;
  orderDetail! :IPlaceOrder;
  total!:number; 
  id!:number;
  placeOrderObj2!:IPlaceOrder;

  totalBill:any;

  constructor(private _foodService:FoodService, private _cartService:CartService, private _placeOrder:PlaceOrderService, private _router:Router) { }

  ngOnInit(): void {
    this.totalBill = 0;
    this.restaurantId = sessionStorage.getItem('restId');
    console.log(this.restaurantId);
    this.userId = sessionStorage.getItem('userId');
    this.cartArray = this._cartService.getCartList();     
    this.cartArrayForRestId = this._cartService.getCartList();

    this.cartArray.forEach(element => {
      this.totalBill = this.totalBill + element.offer;
    });
    
    this.placeOrderObj2={
      total:this.totalBill, restaurant:{restId : this.restaurantId}, user : {userId : this.userId}
    }

    
   
   
  }

  // placeOrderObj:IPlaceOrder={
  //   foodMenus:{restaurant : {restaurantId : 28, address :{area : "Pune"}}}, total:10, user:{userId:22} 
  // }

  // placeOrderObj:IPlaceOrder={
  //   total:120, restaurant:{restId : 30}, user : {userId : 16}
  // }


 
 getRestId(){       
   return this.id;   
 }

  placeOrderFunc(){  
    if(sessionStorage.getItem('userId') === null){
      alert('Please login to order')
      this._router.navigateByUrl("login");
    }else{
      alert('Order Placed')
    console.log("vishalPlaceOrder1")
    console.log(this.placeOrderObj2)
    this._placeOrder.placeOrder(this.placeOrderObj2).subscribe(data=>{
      console.log(data);
    });
    console.log("vishalPlaceOrder2")
    }  
    
  }

  signOut(){
    sessionStorage.removeItem('userId');
  }


}


