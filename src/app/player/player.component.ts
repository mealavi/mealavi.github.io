import { Component, Input, OnInit, Output } from '@angular/core';
import { PlayerType } from '../evolutionOfTrust/enum/PlayerTypes';
import { Game } from '../evolutionOfTrust/Game';
import { Player } from '../evolutionOfTrust/Player';
import { Copycat } from '../evolutionOfTrust/players/Copycat';
import { PlayerSubjectService } from '../service/player-subject.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player = new Copycat();
  img: string = "";
  gameMode: boolean;

  constructor(private playerService: PlayerSubjectService, private util: UtilService) { }

  ngOnInit(): void {
    this.img = this.getImgSrc(this.player.playerType);
    this.util.getGameMode().subscribe(b => {
      this.gameMode = b == 0 ? false : true;
    })

  }
  onLeave(e: any) {
    this.sendPlayerNumber(e.value);
  }
  sendPlayerNumber(q: number) {
    let log = new Map<PlayerType, number>();
    log.set(this.player.playerType, q);
    this.playerService.sendMessage(log);
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
