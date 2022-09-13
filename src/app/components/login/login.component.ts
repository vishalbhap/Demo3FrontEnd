import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IUser } from 'src/app/utility/IUser';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private fb:FormBuilder, private _userService:UserServiceService, private router:Router, private _matSnackBar:MatSnackBar) { }
  hide = true;
  regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  loginForm:FormGroup=this.fb.group({       
    userEmail:['' , [
      Validators.required,
      Validators.pattern(this.regexp),
    ]],
    userPassword:['']  
  })

  get userEmail() {
    return this.loginForm.get('userEmail');
  }
  get userPassword() {
    return this.loginForm.get('userPassword');
  }

  otp:any;
  email:any;
  backendOtp:any;
  otpUser!:IUser;
 
  userId:any;
  count=3;

  onSubmit(){   
         this._userService.login(this.loginForm.value).subscribe(data=>{
           console.log(data);
           if(this.otp == this.backendOtp){                  
                  if(data.attemptsCount >=3){
                    alert('Account Blocked!!!  Please contact admin')
                  }else{
                        this._userService.setLoginAttemptsZero(this.loginForm.value).subscribe(data2=>{
                        console.log(data2);                                  
                        this._matSnackBar.open(data.userName +" Logged In", "close", { duration: 2000, panelClass: ['snackBar-success'], horizontalPosition: 'center', verticalPosition: 'top' });
                        this.userId = data.userId;
                        sessionStorage.setItem('userId', this.userId);
                        this.router.navigateByUrl('userHome'); 
                     })
                  }                  

                 
                }else{
                  if(data.attemptsCount >= 3){
                    alert('Account Blocked!!!  Please contact admin');
                  }else{
                    this._userService.loginAttempts(this.loginForm.value).subscribe(data=>{
                      console.log(data);
                    })
                    alert('Invalid Otp!!! '+this.count+' attempts left') 
                    this.count--;
                  }   
                                   
                }  
         })      
  }

  sendOtp(){   
    console.log(this.loginForm.value);    
    this._userService.loginOtp(this.loginForm.value).subscribe(data=>{
      console.log(data);
      this.backendOtp = data;
      alert('OTP sent to your registered Email')
    })
  }


  ngOnInit(): void {
  }

}


















// onSubmit(){
//   console.log(this.loginForm.value);
//     console.log(this.otp);      
//     this._userService.login(this.loginForm.value).subscribe(data=>{
//     console.log(data);
//     if(this.otp == data){
//       console.log("Vaibhav1")
//       alert("Login Successful")
//       this.userId = data.userId;
//       sessionStorage.setItem('userId', this.userId);
//       this.router.navigateByUrl('userHome'); 
//     }else{
//       alert('Invalid Otp')
//     }           
//   });        
// }