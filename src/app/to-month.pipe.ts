import { OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearsTo'
})

export class ToMonthPipe implements PipeTransform {

  transform(value: number, arrg?: string): string { 
    if (arrg == 'months') {
      return 'lives on Earth for more than ' + (value * 12).toString() + ' months';
    }
    else if (arrg == 'weeks') {
      return 'lives on Earth for more than ' + ((value * 365) / 7).toFixed(0).toString() + ' weeks';
    }
    else if (arrg == 'days') {
      return 'lives on Earth for more than ' + (value * 365).toString() + ' days';
    }
    else if (arrg == 'hours') {
      return 'lives on Earth for more than ' + (value * 365 * 24).toString() + ' hours';
    }
    else if (arrg == 'minutes') {
      return 'lives on Earth for more than ' + (value * 365 * 24 * 60).toString() + ' minutes';
    }
    else if (arrg == 'seconds') {
      return 'lives on Earth for more than ' + (value * 365 * 24 * 60 * 60).toString() + ' seconds';
    }
    return '';
  }

}
