import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PlayerType } from 'src/app/evolutionOfTrust/enum/PlayerTypes';
import { Game } from 'src/app/evolutionOfTrust/Game';
import { Player } from 'src/app/evolutionOfTrust/Player';

@Component({
  selector: 'app-one2one',
  templateUrl: './one2one.component.html',
  styleUrls: ['./one2one.component.scss']
})
export class One2oneComponent implements OnInit {

  Players: Array<PlayerType> = [PlayerType.CHEATER, PlayerType.COPYCAT, PlayerType.DETECTIVE, PlayerType.GRUDGER, PlayerType.INNOCENT];

  player1: PlayerType = PlayerType.COPYCAT;
  player2: PlayerType = PlayerType.CHEATER;
  roundValue: number;
  p1ImgPath: string = "";
  p2ImgPath: string = "";
  result: Array<Player> = new Array();
  resultReady = false;
  constructor() {

  }

  ngOnInit(): void {
  }

  play() {
    let game = new Game();
    this.result = game.doOne2One(game.generateNewInstance(this.player1), game.generateNewInstance(this.player2), this.roundValue);
    this.resultReady = true;
  }
  getImgSrc(playerType: PlayerType): string {
    switch (playerType) {

      case (PlayerType.COPYCAT): {
        return "../assets/copycat.png";
      }
      case (PlayerType.CHEATER): {
        return "../assets/cheater.png";
      }
      case (PlayerType.GRUDGER): {
        return "../assets/grudger.png";
      }
      case (PlayerType.INNOCENT): {
        return "../assets/innocent.png";
      }
      default: {
        return "../assets/detector.png";

      }

    }
  }

}
