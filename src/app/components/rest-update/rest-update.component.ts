import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/utility/rest.service';

@Component({
  selector: 'app-rest-update',
  templateUrl: './rest-update.component.html',
  styleUrls: ['./rest-update.component.scss']
})
export class RestUpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,private _restService:RestService, private _router:Router) { }

  updateRestForm:FormGroup=this.fb.group({       
    restaurantName:['',Validators.required],
    restaurantUserName:['',Validators.required]
  });

  get restaurantName() {
    return this.updateRestForm.get('restaurantName');
  }
  get restaurantUserName() {
    return this.updateRestForm.get('restaurantUserName');
  }



  ngOnInit(): void {

  }


  restId:any;

  onSubmit(){
    console.log(this.updateRestForm.value);
    // this.restId = sessionStorage.getItem('foodId');
    // this._restService.editFood(this.foodId, this.updateRestForm.value).subscribe(data=>{
    //   console.log(data);
    //   this._router.navigateByUrl('restaurantHome');
    // });

    this.restId = sessionStorage.getItem('restId');
    this._restService.updateRestaurant(this.restId, this.updateRestForm.value).subscribe(data=>{
      console.log(data);
    })

    
  }

  signOut(){
    sessionStorage.removeItem('restId');
  }

}
