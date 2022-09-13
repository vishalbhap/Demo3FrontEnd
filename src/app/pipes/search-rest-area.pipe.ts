import { Pipe, PipeTransform } from '@angular/core';
import { IRestaurant } from '../utility/IRestaurant';

@Pipe({
  name: 'searchRestArea'
})
export class SearchRestAreaPipe implements PipeTransform {

  transform(value: IRestaurant[], args: string): any {
    if(!value) return null;
    if(!args) return value;

    let search = args.toLowerCase();

    return value.filter(restaurant =>{
      let area = restaurant.address.area.toLowerCase();
      return area.indexOf(search) !!== -1;
    })
    
  
  }

}
