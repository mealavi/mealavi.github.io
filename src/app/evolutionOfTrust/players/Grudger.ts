import { Decision } from "../enum/Decision";
import { PlayerType } from "../enum/PlayerTypes";
import { Player } from "../Player";


// GRUDGER: Listen, pardner. I'll start cooperatin', and keep cooperatin', but if y'all ever cheat me, I'LL CHEAT YOU BACK 'TIL THE END OF TARNATION.

export class Grudger extends Player {

    playerType = PlayerType.GRUDGER;
    description = "Listen, pardner. I'll start cooperatin', and keep cooperatin', but if y'all ever cheat me, I'LL \
CHEAT YOU BACK 'TIL THE END OF TARNATION."
    play(): Decision {
        if (this.partnersDecisions.length == 0) {
            this.cooperate();
            this.lastDecision = Decision.COOPERATE;
        } else {
            if (this.partnersDecisions.find(v => v == Decision.CHEAT) != undefined) {
                this.cheat();
                this.lastDecision = Decision.CHEAT;
            } else {
                this.cooperate();
                this.lastDecision = Decision.COOPERATE;
            }
        }

        return this.lastDecision;
    }



}