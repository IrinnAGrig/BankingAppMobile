import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
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
