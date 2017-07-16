import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cardId: string;
  searched: boolean = false;
  lastRefreshDate: Date;

  cashlessData = {
    cardId: "0",
    saldo: 239,
    dates: [
      {
        date: "2015-10-27T22:00:00.000Z",
        transactions: [
          {
            description: "7UP medlem",
            quantity: 1,
            amount: -35,
            location: "Intimen",
            balance: 0,
            timestamp: "2015-10-27T21:16:52.000Z"
          },
        ]
      },
      {
        date: "2015-10-26T22:00:00.000Z",
        transactions: [
          {
            description: "Carlsberg ikke medlem",
            quantity: 1,
            amount: -69,
            location: "Intimen",
            balance: 0,
            timestamp: "2015-10-26T20:58:43.000Z"
          },
          {
            description: "Carlsberg medlem",
            quantity: 1,
            amount: -59,
            location: "Intimen",
            balance: 0,
            timestamp: "2015-10-26T21:58:17.000Z"
          },
        ]
      },
      {
        date: "2015-10-25T22:00:00.000Z",
        transactions: [
          {
            description: "Carlsberg medlem",
            quantity: 2,
            amount: -118,
            location: "Intimen",
            balance: 0,
            timestamp: "2015-10-25T20:57:32.000Z"
          }
        ]
      }
    ]
  }

  constructor(public navCtrl: NavController) {
  }

  sok() {
    console.log(this.cardId);
    this.searched = true;
    this.lastRefreshDate = new Date();
  }

  avbryt() {
    this.searched = false;
    this.cardId = "";
  }

  getClassName(element: any) {
    console.log(element);
    if (element) {
      return "first";
    }
  }
}
