import { Pipe, PipeTransform } from '@angular/core';
import { IFood } from '../utility/IFood';

@Pipe({
  name: 'searchFood'
})
export class SearchFoodPipe implements PipeTransform {

  transform(value: IFood[], args: string): any {
    if(!value) return null;
    if(!args) return value;

    let search = args.toLowerCase();

    return value.filter(food =>{
      let foodName = food.foodName.toLowerCase();
      return foodName.indexOf(search) !!== -1;
    })
  }

}
