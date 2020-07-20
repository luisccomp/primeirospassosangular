import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatter'
})
export class PriceFormatterPipe implements PipeTransform {

  transform(value: number) {
    return `R$ ${String(value.toFixed(2)).replace('.', ',')}`
  }

}
