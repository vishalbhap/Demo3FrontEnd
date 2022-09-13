import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,private _userService:UserServiceService, private _router:Router) { }

  updatePassword:FormGroup=this.fb.group({       
    userPassword:['',Validators.required] 
  });

  get userPassword() {
    return this.updatePassword.get('userPassword');
  }



  ngOnInit(): void {

  }
  // rest=[{id:sessionStorage.getItem('restId')}]

  // id:any = sessionStorage.getItem('restId');

  userId:any;

  onSubmit(){
    console.log(this.updatePassword.value);
    this.userId = sessionStorage.getItem('userId');
    this._userService.updatePassword(this.userId, this.updatePassword.value).subscribe(data=>{
      console.log(data);
      this._router.navigateByUrl('userHome');
    });
    alert('Password updated successfully')
    
  }

}
