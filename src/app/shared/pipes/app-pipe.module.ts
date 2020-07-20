import { NgModule } from '@angular/core';
import { PriceFormatterPipe } from './priceFormatter.pipe';
import { ReplacePipe } from './replace.pipe';

@NgModule({
  declarations: [
    PriceFormatterPipe,
    ReplacePipe
  ],
  exports: [
    PriceFormatterPipe,
    ReplacePipe
  ]
})
export class AppPipe {

}
