import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/utility/rest.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent implements OnInit {

  constructor(private fb:FormBuilder,private _restService:RestService, private _router:Router) { }

  foodForm:FormGroup=this.fb.group({       
    foodName:['',Validators.required],
    price:['',Validators.required],
    foodCategory:['',Validators.required]   
  });


  get foodName() {
    return this.foodForm.get('foodName');
  }
  get price() {
    return this.foodForm.get('price');
  }
  get foodCategory() {
    return this.foodForm.get('foodCategory');
  }



  ngOnInit(): void {

  }
  // rest=[{id:sessionStorage.getItem('restId')}]

  // id:any = sessionStorage.getItem('restId');

  foodId:any;

  onSubmit(){
    console.log(this.foodForm.value);
    this.foodId = sessionStorage.getItem('foodId');
    this._restService.editFood(this.foodId, this.foodForm.value).subscribe(data=>{
      console.log(data);
      this._router.navigateByUrl('restaurantHome');
    });
    
  }

  signOut(){
    sessionStorage.removeItem('restId');
  }

}
