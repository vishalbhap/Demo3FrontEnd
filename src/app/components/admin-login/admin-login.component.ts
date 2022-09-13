import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private _userService:UserServiceService, private router:Router, private _matSnackBar:MatSnackBar) { }

  loginForm:FormGroup=this.fb.group({       
    userEmail:[''],
    userPassword:['']  
  })
 

  onSubmit(){
    console.log(this.loginForm.value);
     
    if(this.loginForm.controls['userEmail'].value == 'admin' && this.loginForm.controls['userPassword'].value == "admin"){
      // alert("Welxome Admin");
      this._matSnackBar.open("Admin Logged In", "close", { duration: 2000, panelClass: ['snackBar-success'], horizontalPosition: 'center', verticalPosition: 'top' });
      this.router.navigateByUrl('adminHome'); 
    }else{
      alert("Invalid admin credentials")
      this.loginForm.reset();
      this.router.navigateByUrl('adminLogin');
    }     
  }

  ngOnInit(): void {
  }

}
