import { Component, OnInit } from '@angular/core';
import { Player } from './evolutionOfTrust/Player';
import { Cheater } from './evolutionOfTrust/players/Cheater';
import { Copycat } from './evolutionOfTrust/players/Copycat';
import { Detective } from './evolutionOfTrust/players/Detective';
import { Grudger } from './evolutionOfTrust/players/Grudger';
import { Innocent } from './evolutionOfTrust/players/Innocent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  playerList = new Array<Player>();

  type = 'pie';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
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
  };

  ngOnInit(): void {

    this.playerList.push(new Cheater());
    this.playerList.push(new Detective());
    this.playerList.push(new Copycat());
    this.playerList.push(new Grudger());
    this.playerList.push(new Innocent());




  }
}
