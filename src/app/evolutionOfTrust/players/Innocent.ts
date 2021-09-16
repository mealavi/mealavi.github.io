import { Decision } from "../enum/Decision";
import { PlayerType } from "../enum/PlayerTypes";
import { Player } from "../Player";


export class Innocent extends Player {

    playerType = PlayerType.INNOCENT;
description="ALWAYS COOPERATE: Let's be best friends";
    play(): Decision {
        this.cooperate();
        this.lastDecision = Decision.COOPERATE;
        return this.lastDecision;
    }
}