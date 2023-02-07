import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trancket'
})
export class TrancketPipe implements PipeTransform {

  transform(value: any,limit=100,completeWords:boolean=false,ellipsis="....") {
    if(completeWords){
      // limit=value.substring(0,limit).lastIndexOf(' ');
      return value
    }
    if(value.split(" ").length >limit){

      return value.split(" ").splice(0,limit).join(" ")+ellipsis;
    }
    return value;
  }

}

