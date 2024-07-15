import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  @Input() transactions: any;
  
  setMoney(valute: string, money: number): string {
    const formattedMoney = Math.abs(money).toFixed(2).replace('.', ',');
    return money < 0 ? `-${valute}${formattedMoney}` : `${valute}${formattedMoney}`;
  }
}
