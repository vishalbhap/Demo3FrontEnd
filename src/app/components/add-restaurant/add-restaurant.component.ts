import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../../utility/rest.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  constructor(private fb:FormBuilder, private _restService:RestService, private _router:Router) { }

  restForm:FormGroup=this.fb.group({   
    restaurantName:['', Validators.required],    
    restaurantUserName:['', Validators.required],
    restaurantPassword:['', Validators.required],
    restaurantEmail:['', Validators.required],
    address:this.fb.group({
      area:['', Validators.required],
      street:['', Validators.required],
      pincode:['', Validators.required]
    })   
  });


  get restaurantName() {
    return this.restForm.get('restaurantName');
  }
  get restaurantUserName() {
    return this.restForm.get('restaurantUserName');
  }
  get restaurantEmail() {
    return this.restForm.get('restaurantEmail');
  }
  get restaurantPassword() {
    return this.restForm.get('restaurantPassword');
  }
  
  get area() {
    return this.restForm.get('area');
  }
  get street() {
    return this.restForm.get('street');
  }
  get pincode() {
    return this.restForm.get('pincode');
  }
 

  onSubmit(){
    console.log(this.restForm.value);
    alert('Restaurant credentials sent to registered email ')
    this._restService.addRestaurant(this.restForm.value).subscribe(data=>{
      console.log(data);
      this._router.navigateByUrl("adminHome");
    });
        
  }

  ngOnInit(): void {
  }

}
