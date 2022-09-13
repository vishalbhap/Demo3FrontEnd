import { Component, OnInit } from '@angular/core';
import { PlaceOrderService } from 'src/app/utility/place-order.service';
import { RestService } from 'src/app/utility/rest.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orderList:any;
  restId:any;
  constructor(private _restService:RestService, private _orderService:PlaceOrderService) { }

  ngOnInit(): void {
    this.restId = sessionStorage.getItem('restId');
    this._restService.getAllOrders(this.restId).subscribe(data=>{
      this.orderList = data;
    })
  }

  acceptOrder(value:any){    
    this._orderService.acceptOrderStatus(value, this.orderList).subscribe(data=>{
      console.log(value);     
    })
    alert('Order Accepted')
    window.location.reload();
  }

  rejectOrder(value:any){
    
    this._orderService.rejectOrderStatus(value, this.orderList).subscribe(data=>{
      console.log(value);      
    })
    alert('Order Rejected')
    window.location.reload();
  }

  signOut(){
    sessionStorage.removeItem('userId');
  }

}
