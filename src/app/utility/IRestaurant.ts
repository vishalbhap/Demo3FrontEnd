export interface IRestaurant{
    restaurantName : string;
    restaurantUserName : string;
    restaurantPassword : string;
    restaurantEmail : string;
    thumbnail : string;
    address : {
        area : string;
        street : string;
        pincode : string;
    };   
}