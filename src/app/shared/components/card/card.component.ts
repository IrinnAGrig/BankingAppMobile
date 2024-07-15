import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  serie: string = '6986';

  transformCardNumber(nr: string) {
    let newstr = '';
    for (let i = 0; i < nr.length; i += 4) {
      newstr += nr.slice(i, i + 4) + ' ';
    }
    return newstr.trim(); // trim() to remove any trailing space
  }
}
