import { Decision } from "../enum/Decision";
import { PlayerType } from "../enum/PlayerTypes";
import { Player } from "../Player";

export class Cheater extends Player {

    playerType = PlayerType.CHEATER;
    lastDecision=Decision.CHEAT;
    description="ALWAYS CHEAT: the strong shall eat the weak.";
    
    play(): Decision {
        this.lastDecision = Decision.CHEAT;
        return this.lastDecision;
    }

}