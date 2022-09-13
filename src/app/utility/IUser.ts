export interface IUser{
    userName:string;
    userPassword:string;
    userEmail:number;
    userMobileNo:number,
    attemptsCount:number;
    address:{
        area:string;   
        street: number;     
        pincode: number;
    }   
  
}