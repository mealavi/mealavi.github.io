import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { PlayerType } from '../evolutionOfTrust/enum/PlayerTypes';
import { Player } from '../evolutionOfTrust/Player';
import { Cheater } from '../evolutionOfTrust/players/Cheater';
import { Copycat } from '../evolutionOfTrust/players/Copycat';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player = new Copycat();
  img: string = "";
  subject = new Subject<Map<PlayerType, number>>()

  constructor() { }

  ngOnInit(): void {
    switch (this.player.playerType) {

      case (PlayerType.COPYCAT): {
        this.img = "../assets/copycat.png";
        break;
      }
      case (PlayerType.CHEATER): {
        this.img = "../assets/cheater.png";
        break;

      }
      case (PlayerType.GRUDGER): {
        this.img = "../assets/grudger.png";
        break;

      }
      case (PlayerType.INNOCENT): {
        this.img = "../assets/innocent.png";
        break;

      }
      default: {
        this.img = "../assets/detector.png";
        break;
      }

    }
  }
  onLeave(e: any) {
    let log = new Map<PlayerType, number>();
    log.set(this.player.playerType, e.value);
    this.subject.next(log);
    console.log(log)
  }
}
