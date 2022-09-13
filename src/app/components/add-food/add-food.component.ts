import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/utility/rest.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

  constructor(private fb:FormBuilder,private _restService:RestService, private _router:Router) { }

  foodForm:FormGroup=this.fb.group({       
    foodName:['',Validators.required],
    // userPassword:['', Validators.required, Validators.maxLength(10),Validators.minLength(5)],
    // userEmail:['', Validators.required,Validators.pattern(this.regexp)],
    price:['',Validators.required],
    offer:['',Validators.required],
    foodCategory:['',Validators.required],  
    quantity:['',Validators.required],  
    restaurant:this.fb.group({
      restId:[''],
    })   
  });


  get foodName() {
    return this.foodForm.get('foodName');
  }
  get price() {
    return this.foodForm.get('price');
  }
  get offer() {
    return this.foodForm.get('offer');
  }
  get foodCategory() {
    return this.foodForm.get('foodCategory');
  }
  get quantity() {
    return this.foodForm.get('quantity');
  }



  ngOnInit(): void {
    // var PassedId=sessionStorage.getItem('restId')
    // console.log(PassedId)
  }
  rest=[{id:sessionStorage.getItem('restId')}]

  id:any = sessionStorage.getItem('restId');

  onSubmit(){
    console.log(this.foodForm.value); 
    this.foodForm.get('restaurant')?.get('restId')?.setValue(this.id);
    this._restService.addFoodMenus(this.foodForm.value).subscribe(data=>{
      console.log(data);
      this._router.navigateByUrl('restaurantHome');

    });
    
  }

  signOut(){
    sessionStorage.removeItem('restId');
  }

}
