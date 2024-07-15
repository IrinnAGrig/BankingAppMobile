import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
    },
    {
      sum: 300,
      valute: "$",
      emblem: "../../../assets/images/transactions/money-transfer.png",
      title: "Money Transfer",
      subtitle: "Transaction"
    },
  ];
}
