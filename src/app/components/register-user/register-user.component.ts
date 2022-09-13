import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  
  hide = true;
  regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  constructor(private fb:FormBuilder, private _userService:UserServiceService, private _router:Router) { }

  userForm:FormGroup=this.fb.group({       
    userName:['', Validators.required],
    // userPassword:['', Validators.required, Validators.maxLength(10),Validators.minLength(5)],
    // userEmail:['', Validators.required,Validators.pattern(this.regexp)],
    userPassword:['', Validators.required],
    userEmail:['', Validators.required],
    userMobileNo:['', Validators.required],  
    address:this.fb.group({
      area:['', Validators.required],
      street:['', Validators.required],
      pincode:['', Validators.required]
    })   
  });

  get userName() {
    return this.userForm.get('userName');
  }
  get userEmail() {
    return this.userForm.get('userEmail');
  }
  get userPassword() {
    return this.userForm.get('userPassword');
  }
  get userMobileNo() {
    return this.userForm.get('userMobileNo');
  }
  get userArea() {
    return this.userForm.get('userArea');
  }
  get userStreet() {
    return this.userForm.get('userStreet');
  }
  get userPincode() {
    return this.userForm.get('userPincode');
  }
 

  onSubmit(){
    console.log(this.userForm.value);
    this._userService.registerUser(this.userForm.value).subscribe(data=>{
      console.log(data);
      this._router.navigateByUrl('login');
    });
    
  }

  ngOnInit(): void {
  }

}
