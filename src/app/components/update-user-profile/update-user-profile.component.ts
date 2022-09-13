import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.scss']
})
export class UpdateUserProfileComponent implements OnInit {

  constructor(private fb:FormBuilder,private _userService:UserServiceService, private _router:Router) { }

  userUpdateForm:FormGroup=this.fb.group({       
    userName:['',Validators.required],
    userMobileNo:['',Validators.required] 
  });

  get userName() {
    return this.userUpdateForm.get('userName');
  }
  get userMobileNo() {
    return this.userUpdateForm.get('userMobileNo');
  }


  ngOnInit(): void {

  }
  // rest=[{id:sessionStorage.getItem('restId')}]

  // id:any = sessionStorage.getItem('restId');

  userId:any;

  onSubmit(){
    console.log(this.userUpdateForm.value);
    this.userId = sessionStorage.getItem('userId');
    this._userService.updateProfile(this.userId, this.userUpdateForm.value).subscribe(data=>{
      console.log(data);
      this._router.navigateByUrl('userHome');
    });
    alert('Pfofile updated successfully')
  }

}
