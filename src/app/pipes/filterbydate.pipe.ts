import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterbydate'
})

export class filterbydate implements PipeTransform {
    transform(value: any, param1: any): any {
        if(param1 == undefined){
         return value;
        }

        const filterdata: any[] = [];
        value.forEach((element: {timestamp: any}) => {
            if(element.timestamp === param1){
                filterdata.push(element);
            }
        });
        return filterdata;
    }
} 