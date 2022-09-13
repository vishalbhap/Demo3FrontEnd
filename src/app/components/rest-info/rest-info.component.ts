import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/utility/rest.service';

@Component({
  selector: 'app-rest-info',
  templateUrl: './rest-info.component.html',
  styleUrls: ['./rest-info.component.scss']
})
export class RestInfoComponent implements OnInit {

  constructor(private _httpClient:HttpClient, private _restService:RestService) { }

  restArray:any;

  ngOnInit(): void {
    this._restService.getAllRestaurants().subscribe(data=>{    
      this.restArray = data;      
      console.log(this.restArray);    
    });
  }

  deleteRestaurant(value:any){
    this._restService.deleteRestaurant(value).subscribe(data=>{
      console.log(data);
    })
    alert('Do you want to delete this restaurant')
    window.location.reload();
  }

  exportRestaurantDetails(){
    this._restService.exportRestaurantDetail().subscribe(data=>{
      console.log(data);
      alert('Restaurant Details Exported to Restaurant_Details excel file')
    })
  }

}
