import { Component, OnInit, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { PlayerType } from './evolutionOfTrust/enum/PlayerTypes';

import { Player } from './evolutionOfTrust/Player';
import { Cheater } from './evolutionOfTrust/players/Cheater';
import { Copycat } from './evolutionOfTrust/players/Copycat';
import { Detective } from './evolutionOfTrust/players/Detective';
import { Grudger } from './evolutionOfTrust/players/Grudger';
import { Innocent } from './evolutionOfTrust/players/Innocent';
import { PlayerSubjectService } from './service/player-subject.service';
import { UtilService } from './service/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  playerList = new Array<Player>();

  population: Map<PlayerType, number> = new Map();

  constructor(private playerService: PlayerSubjectService, private util: UtilService) {
    this.population.set(PlayerType.CHEATER, 1);
    this.population.set(PlayerType.COPYCAT, 1);
    this.population.set(PlayerType.DETECTIVE, 1);
    this.population.set(PlayerType.INNOCENT, 1);
    this.population.set(PlayerType.GRUDGER, 1);
  }

  ngOnInit(): void {

    this.playerList.push(new Cheater());
    this.playerList.push(new Detective());
    this.playerList.push(new Copycat());
    this.playerList.push(new Grudger());
    this.playerList.push(new Innocent());

    this.playerService.getMessage().subscribe(message => {
      let key = Array.from(message.keys())[0]
      let number: number = Number(Array.from(message.values())[0]);
      this.population.set(key, number);
    });

  }
  tabChanged(e: MatTabChangeEvent) {
    this.util.sendGameMode(e.index)
  }


}
