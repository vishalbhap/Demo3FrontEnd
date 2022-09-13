import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { RestService } from 'src/app/utility/rest.service';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-rest-login',
  templateUrl: './rest-login.component.html',
  styleUrls: ['./rest-login.component.scss']
})
export class RestLoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private _restService:RestService, private router:Router, private _matSnackBar:MatSnackBar) { }
  hide = true;
  regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  
  loginForm:FormGroup=this.fb.group({       
    restaurantEmail:['', [
      Validators.required,
      Validators.pattern(this.regexp),
    ]],
    restaurantPassword:['', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3),
    ]]
  });

  get restaurantEmail() {
    return this.loginForm.get('restaurantEmail');
  }
  get restaurantPassword() {
    return this.loginForm.get('restaurantPassword');
  }

  get restaurantId() {
    return this.loginForm.get('restId');
  }
 
  restId:any;


  onSubmit(){
    console.log(this.loginForm.value);
      this._restService.login(this.loginForm.value).subscribe(data=>{
      console.log(data); 
      
        // if(this.loginForm.controls['restaurantEmail'].value == data.restaurantEmail && this.loginForm.controls['restaurantPassword'].value == data.restaurantPassword){
          if(this.loginForm.controls['restaurantPassword'].value == data.restaurantPassword){     
        console.log("Vaibhav1")
        // alert("Restaurant Login Successful")
        this._matSnackBar.open(data.restaurantName +" Logged In", "close", { duration: 2000, panelClass: ['snackBar-success'], horizontalPosition: 'center', verticalPosition: 'top' });
        this.restId = data.restId;
        sessionStorage.setItem('restId', this.restId);
        this.router.navigateByUrl('restaurantHome'); 
      }else{
        alert('Invalid credentials')
      }   
          
    });        
  }

 
  // }
  ngOnInit(): void {
  }

}


