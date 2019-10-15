import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[],field?:string,descending?:boolean): any[] {
    
    
        var fiedlType=typeof(array[0][field]);

        console.log("FieldType :"+fiedlType);

        if(fiedlType=='number')
        array.sort((e1,e2)=>e1[field]-e2[field]);
        else if(fiedlType=='string')
        array.sort((e1,e2)=>e1[field].localeCompare(e2[field]));
        else if(fiedlType=='object')
        array.sort((e1,e2)=>e1[field].getTime()-e2[field].getTime());
             

    





    if(descending)
    array.reverse();


    return array;

  }

}
