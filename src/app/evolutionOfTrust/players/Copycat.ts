import { Decision } from "../enum/Decision";
import { PlayerType } from "../enum/PlayerTypes";
import { Player } from "../Player";


//I start with Cooperate, and afterwards, I just copy whatever you did in the last round. Meow
export class Copycat extends Player {

    playerType = PlayerType.COPYCAT;
description="Hello! I start with Cooperate, and afterwards, I just copy whatever you did in the last round."

    play(): Decision {
        if (this.partnersDecisions.length == 0) {
            this.cooperate();
            this.lastDecision = Decision.COOPERATE;
        } else {
            this.lastDecision = <Decision>this.partnersDecisions.pop();
            this.partnersDecisions.push(this.lastDecision)
            if (this.lastDecision == Decision.COOPERATE) {
                this.cooperate();
            }
            else {
                this.cheat();
            }
        }
        return this.lastDecision;
    }


}