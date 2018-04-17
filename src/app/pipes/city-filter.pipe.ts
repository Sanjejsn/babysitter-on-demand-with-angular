import { Pipe, PipeTransform } from '@angular/core';
import { Bebysitter } from '../models/bebysitter';

@Pipe({
  name: 'cityFilter',
  pure: false
})
export class CityFilterPipe implements PipeTransform {

  transform(array: Bebysitter[], city) {
    if (city.length) {
      return array.filter(sitter => sitter.city.toLowerCase() === city.toString());

    } else {
      return array;
    }
  }

}


