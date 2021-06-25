import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  locale: string = "en"
  transform(b: boolean, locale: string = "en"): string {

    if(locale == "en")
    {
      return (b) ? "YES" : "NO";
    }
    else if(locale == "fr")
    {
      return (b) ? "oui" : "non";
    }else
    {
      return "who knows"
    }
  }

}
