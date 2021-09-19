import { Component, OnInit } from '@angular/core';
import { PlayerType } from 'src/app/evolutionOfTrust/enum/PlayerTypes';
import { Game } from 'src/app/evolutionOfTrust/Game';
import { Player } from 'src/app/evolutionOfTrust/Player';
import { PlayerSubjectService } from 'src/app/service/player-subject.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  roundValue = 1;
  grudgerNumber: number = 1;
  cheaterNumber: number = 1;
  innocentNumber: number = 1;
  detectiveNumber: number = 1;
  copycatNumber: number = 1;
  playerList: Array<Player> = new Array();
  sumOfPlayer: number = 5;
  matchPairs = 10;
  totalWealth: number = 0;
  averageWealth: number = 0;




  type = 'polarArea';
  data: any;
  options = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: false,
      text: ''
    },
    legend: {
      display: true,
      labels: {
        fontColor: "black"
      }
    }
  };

  constructor(private playerServie: PlayerSubjectService) { }

  ngOnInit(): void {
    this.playerServie.getMessage().subscribe(message => {
      let type: PlayerType = Array.from(message.keys())[0]
      let q: number = Array.from(message.values())[0]
      switch (type) {
        case (PlayerType.COPYCAT): {
          this.copycatNumber = q;
          break;
        }
        case (PlayerType.CHEATER): {
          this.cheaterNumber = q;
          break;
        }
        case (PlayerType.GRUDGER): {
          this.grudgerNumber = q;
          break;
        }
        case (PlayerType.INNOCENT): {
          this.innocentNumber = q;
          break;
        }
        default: {
          this.detectiveNumber = q;
          break;

        }

      };
      this.sumOfPlayer = Number(this.grudgerNumber) + Number(this.cheaterNumber)
        + Number(this.copycatNumber) + Number(this.innocentNumber) + Number(this.detectiveNumber);
      this.matchPairs = this.calculateMatchPairs(this.sumOfPlayer);

    })
  }
  play() {
    let game = new Game();

    let totalCoin = new Map<PlayerType, number>();
    this.playerList = Game.createList(this.grudgerNumber, this.cheaterNumber, this.copycatNumber, this.detectiveNumber, this.innocentNumber);
    let result = game.doLeague(this.playerList, this.roundValue);
    this.totalWealth = result.map(p => p.coin).reduce((c1, c2) => c1 + c2);
    for (let i = 0; i < result.length; i++) {
      if (totalCoin.get(result[i].playerType) == undefined) {
        totalCoin.set(result[i].playerType, result[i].coin)
      }
    }

    this.data = {
      labels: Array.from(totalCoin.keys()),
      datasets: [
        {
          backgroundColor: ["#ef5350", "#42a5f5", "#9ccc65", "#26a69a", "#ab47bc"],
          data: Array.from(totalCoin.values())
        }
      ]
    };
    this.options.title.text = "Socity' total point: " + Array.from(totalCoin.values()).reduce((c1, c2) => c1 + c2);
    this.averageWealth = Math.round(this.totalWealth / this.sumOfPlayer);
  }

  calculateMatchPairs(population: number) {
    let matchPairs = 0;
    while (population > 0) {
      population = population - 1;
      matchPairs = matchPairs + population;
    }
    return matchPairs;
  }
}
