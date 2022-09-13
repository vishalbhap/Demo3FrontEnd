export interface IPlaceOrder{
    // foodMenus:{
    //     restaurant :{
    //         restaurantId : number;
    //         address : {
    //             area : string;
    //         }
    //     }
    // };
    // total:number;
    // user : {
    //     userId:number;
    // }

    total : number;
    restaurant : {
        restId : any 
    };
    user : {
        userId : number
    }



  
}