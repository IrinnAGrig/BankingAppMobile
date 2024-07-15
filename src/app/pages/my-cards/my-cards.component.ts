import { Component } from '@angular/core';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent {
  amount: number = 0;
  transactions = [
    {
      sum: -12.99,
      valute: "$",
      emblem: "../../../assets/images/transactions/spotify.svg",
      title: "Spotify",
      subtitle: "Music"
    },
    {
      sum: 300,
      valute: "$",
      emblem: "../../../assets/images/transactions/money-transfer.png",
      title: "Money Transfer",
      subtitle: "Transaction"
    },
    {
      sum: -12.99,
      valute: "$",
      emblem: "../../../assets/images/transactions/spotify.svg",
      title: "Spotify",
      subtitle: "Music"
    }
  ];
}
