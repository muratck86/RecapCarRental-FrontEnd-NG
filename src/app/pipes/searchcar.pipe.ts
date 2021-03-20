import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/carDto';

@Pipe({
  name: 'searchcar'
})
export class SearchcarPipe implements PipeTransform {

  transform(value: CarDto[], searchText:string): CarDto[] {
    searchText = searchText ? searchText.toLocaleLowerCase() : ""
    return searchText.length > 1
    ?
    value.filter((c:CarDto) => 
    (c.colorName.toLocaleLowerCase().indexOf(searchText) !== -1 ||
    c.brandName.toLocaleLowerCase().indexOf(searchText) !== -1 ||
    c.modelName.toLocaleLowerCase().indexOf(searchText) !== -1))
    :
    value
  }

}
