import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceOrderService } from 'src/app/utility/place-order.service';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-orders-list-user',
  templateUrl: './orders-list-user.component.html',
  styleUrls: ['./orders-list-user.component.scss']
})
export class OrdersListUserComponent implements OnInit {

  orderList:any;
  userId:any;
  constructor(private _userService:UserServiceService, private _orderService:PlaceOrderService, private _router:Router) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    this._userService.showAllOrders(this.userId).subscribe(data=>{
      this.orderList = data;
    })
  }

  flag:any;


  checkOrderTimeStatus(value:any){
    this._orderService.checkOrderStatus(value).subscribe(data=>{
      console.log(data);
      this.flag = data;
      console.log("Flag "+this.flag);

      if(this.flag){
        console.log("visgalOrderCancel")
        alert('Order Cancelled')
        // this._router.navigateByUrl('userHome'); 
        window.location.reload();
        this._orderService.cancelOrderByUser(value, this.orderList).subscribe(data=>{
         console.log(value);
        
        //  this._router.navigateByUrl('userHome'); 
       })
      }else{
        alert('Order Cannot be cancelled after 15 minutes')
      }
    })
    console.log(this.flag);
   
  }

 

}













































  // checkOrderTimeStatus(value:any){
  //   this._orderService.checkOrderStatus(value).subscribe(data=>{
  //     console.log(data);
  //     this.flag = data;
  //   })
  // }

  // cancelOrder(value:any){
  //   this.checkOrderTimeStatus(value);
  //   console.log(this.flag);
  //   if(this.flag){
  //     this._router.navigateByUrl('userHome'); 
  //     this._orderService.cancelOrderByUser(value, this.orderList).subscribe(data=>{
  //      console.log(value);
  //      this._router.navigateByUrl('userHome'); 
  //    })
  //   }else{
  //     alert('Order Cannot be cancelled after 15 minutes')
  //   }
    
  // }
