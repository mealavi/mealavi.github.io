import { Decision } from "../enum/Decision";
import { PlayerType } from "../enum/PlayerTypes";
import { Player } from "../Player";

export class Detective extends Player {
    playerType = PlayerType.DETECTIVE;
    description = "First: I analyze you. I start: Cooperate, Cheat, Cooperate, Cooperate. If you cheat back, I'll act like \
Copycat. If you never cheat back, I'll act like Always Cheat, to exploit you. Elementary, my dear \
Watson."

    play(): Decision |undefined {

        switch (this.partnersDecisions.length) {
            case 0: {
                this.lastDecision = Decision.COOPERATE;
                break;
            }
            case 1: {
                this.lastDecision = Decision.CHEAT;
                break;
            }
            case 2: {
                this.lastDecision = Decision.COOPERATE;
                break;
            }
            case 3: {

                this.lastDecision = Decision.COOPERATE;
                break;
            }
            default: {
                if (this.partnersDecisions.find(v => v == Decision.CHEAT) != undefined) {
                    this.lastDecision = this.partnersDecisions.pop();
                    this.partnersDecisions.push(this.lastDecision);
                }
                else {
                    this.lastDecision = Decision.CHEAT;
                }
            }
        }

        if (this.lastDecision == Decision.CHEAT) {
            this.cheat();
        } else {
            this.cooperate();
        }
        return this.lastDecision;

    }

}