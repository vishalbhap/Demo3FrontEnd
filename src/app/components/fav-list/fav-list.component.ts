import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/utility/cart.service';
import { IFood } from 'src/app/utility/IFood';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss']
})
export class FavListComponent implements OnInit {

  constructor(private _cartService:CartService) { }

  favList:any;

  ngOnInit(): void {
    this.favList = this._cartService.getfavList();
  }

  addToCart(food:IFood){
    this._cartService.addFoodToCart(food);
    alert('Food added to cart2')
  }

}
