import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(
    value: string, 
    defaultURL: string, 
    forceHTTPS: boolean
  ): string {

    let finalURL = '';
    if (value) {
      finalURL = value;
    } else {
      finalURL = defaultURL;
    }
    if (forceHTTPS) {
      if (finalURL.indexOf('https') === -1){
        if (finalURL.indexOf('http') >= 0 ) {
          finalURL = finalURL.replace('http', 'https');
        } else {
          finalURL = 'https://' + finalURL;
        }
      }        
    }

    return finalURL;

  }

}
