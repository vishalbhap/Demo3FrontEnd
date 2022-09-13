import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private _httpClient:HttpClient) { }

  getAllFoodMenu():Observable<any>{
    return this._httpClient.get<any>("http://localhost:8080/food-menu/allFoodMenus");
  }

  getFoodMenusByRestId(id:any):Observable<any>{
    return this._httpClient.get<any>("http://localhost:8080/food-menu/getFoodByRestaurant/"+id);
  }

  deleteFood(foodId:any){    
    return this._httpClient.delete<any>("http://localhost:8080/food-menu/delete/"+foodId);
  }

  exportFoodDetail():Observable<any>{
    return this._httpClient.get<any>("http://localhost:8080/admin/export-foodItem-details");
  }

}
