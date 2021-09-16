import { Decision } from "./enum/Decision";
import { PlayerType } from "./enum/PlayerTypes";
import { Player } from "./Player";
import { Cheater } from "./players/Cheater";
import { Copycat } from "./players/Copycat";
import { Detective } from "./players/Detective";
import { Grudger } from "./players/Grudger";
import { Innocent } from "./players/Innocent";


export class Game {

    doOne2One(p1: Player, p2: Player, round: number) {
        for (let i = 0; i < round; i++) {
            try {
                this.run(p1, p2);
            }
            catch (e) {
                // game is over
            }

        }

    }


    doLeague(playersList: Array<Player>, round: number): Array<Player> {

        for (let i = 0; i < playersList.length; i++) {
            for (let j = i + 1; j < playersList.length; j++) {
                this.doOne2One(playersList[i], playersList[j], round)
                this.resetPlayersMemories(playersList);
            }
        }
        return playersList;
    }

    doEvolution(playersList: Array<Player>, matchsRound: number, evolutionsRound: number): Array<Player> {
        let newList = new Array<Player>();
        for (let i = 0; i < evolutionsRound; i++) {

            if (i == 0) {
                newList = this.doLeagueAndReplaceTheWeakests(playersList, matchsRound);
            }
            else {
                newList = this.doLeagueAndReplaceTheWeakests(newList, matchsRound);
            }

        }
        return newList;
    }


    doLeagueAndReplaceTheWeakests(playersList: Array<Player>, round: number): Array<Player> {
        this.doLeague(playersList, round);
        return this.removeAndAdd(playersList);
    }


    public removeAndAdd(playersList: Array<Player>): Array<Player> {
        playersList.sort((p1, p2) => p1.coin > p2.coin ? -1 : 1);


        let numberOfRemovedItem = Math.round(playersList.length / 5);
        for (let i = 0; i < numberOfRemovedItem; i++) {
            playersList.pop();
        }
        for (let i = 0; i < numberOfRemovedItem; i++) {
            playersList.push(this.generateNewInstance(playersList[0].playerType));
        }
        return Array.from(playersList);

    }

    run(p1: Player, p2: Player) {
        p1.play();
        p2.play();
        if ((p1.lastDecision === p2.lastDecision) && (p1.lastDecision === Decision.CHEAT)) {
            // nothing happens to player's coin
        }
        if ((p1.lastDecision === p2.lastDecision) && (p1.lastDecision === Decision.COOPERATE)) {
            p1.reward(3);
            p2.reward(3);
        }
        if ((p1.lastDecision === Decision.COOPERATE) && (p2.lastDecision === Decision.CHEAT)) {
            p2.reward(3);
        }
        if ((p1.lastDecision === Decision.CHEAT) && (p2.lastDecision === Decision.COOPERATE)) {
            p1.reward(3);
        }

        p1.storePartnerDecision(p2.lastDecision);
        p2.storePartnerDecision(p1.lastDecision);

    }

    createList(grudger: number = 1, cheater: number = 1, copycat: number = 1, detective: number = 1, innoncent: number = 1): Array<Player> {
        let playerList: Array<Player> = new Array<Player>();

        for (let i = 0; i < grudger; i++) {
            playerList.push(new Grudger());
        }
        for (let i = 0; i < cheater; i++) {
            playerList.push(new Cheater());
        }
        for (let i = 0; i < detective; i++) {
            playerList.push(new Detective());
        }
        for (let i = 0; i < copycat; i++) {
            playerList.push(new Copycat());
        }
        for (let i = 0; i < innoncent; i++) {
            playerList.push(new Innocent());
        }
        return playerList;

    }

    resetPlayersMemories(playersList: Array<Player>) {

        for (let i = 0; i < playersList.length; i++) {
            if (playersList[i].playerType == PlayerType.CHEATER) {
                playersList[i].lastDecision = Decision.CHEAT;
            } else {
                playersList[i].lastDecision = Decision.COOPERATE;
            }
            if (playersList[i].coin < 0) {
                playersList[i].coin = 0;
            }
            playersList[i].partnersDecisions = new Array<Decision>();
        }

    }

    generateNewInstance(playerType: PlayerType): Player {
        switch (playerType) {
            case PlayerType.CHEATER: {
                return new Cheater();
            }
            case PlayerType.COPYCAT: {
                return new Copycat();
            }
            case PlayerType.DETECTIVE: {
                return new Detective();
            }
            case PlayerType.GRUDGER: {
                return new Grudger();
            }
            default: {
                return new Innocent();
            }

        }
    }

}