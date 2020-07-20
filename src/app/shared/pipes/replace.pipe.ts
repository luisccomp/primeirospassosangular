import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(content: string, valueToBeReplaced: string, replacer: string) {
    return content.replace(valueToBeReplaced, replacer);
  }

}
