import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/utility/user-service.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss']
})
export class UsersInfoComponent implements OnInit {


  constructor(private _httpClient:HttpClient, private _userService:UserServiceService) {

   }
  
   userArray:any;

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(data=>{    
      this.userArray = data;      
      console.log(this.userArray);    
    });
  }

  unblockAccount(user:any){
    this._userService.unblockUserAccount(user).subscribe(data=>{
      console.log(data);
      alert('Account Unlocked')
    })
    window.location.reload();
  }


  blockAccount(user:any){
    this._userService.blockUserAccount(user).subscribe(data=>{
      console.log(data);
      alert('Account Blocked')
    })
    window.location.reload();
  }

  exportUserDetail(){
    this._userService.exportUserDetail().subscribe(data=>{
      console.log(data);
      alert('user Details Exported to User_Details excel file')
    })
    
  }


}
