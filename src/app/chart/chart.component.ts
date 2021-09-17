import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PlayerType } from '../evolutionOfTrust/enum/PlayerTypes';
import { Player } from '../evolutionOfTrust/Player';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  totalCoin = new Map<PlayerType, number>();
  population = new Map<PlayerType, number>();

  playerList = new Array<Player>();



/*      type = 'pie';
    data = {
      labels: Array.of(),
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    options = {
      responsive: true,
      maintainAspectRatio: false
    };  */
  constructor() {

    for (let i = 0; i < this.playerList.length; i++) {
      if (this.totalCoin.get(this.playerList[i].playerType) != undefined) {
        this.totalCoin.set(this.playerList[i].playerType, this.totalCoin.get(this.playerList[i].playerType) + this.playerList[i].coin)
      } else {
        this.totalCoin.set(this.playerList[i].playerType, this.playerList[i].coin);
      }

      if (this.population.get(this.playerList[i].playerType) != undefined) {
        this.population.set(this.playerList[i].playerType, this.population.get(this.playerList[i].playerType) + 1);
      }
      else {
        this.population.set(this.playerList[i].playerType, 1);
      }
    }
  }

  ngOnInit(): void {


  }

}
