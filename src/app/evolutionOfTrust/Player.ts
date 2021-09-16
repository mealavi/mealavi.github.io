import { Decision } from "./enum/Decision";
import { PlayerType } from "./enum/PlayerTypes";


export abstract class Player {

    playerType: PlayerType =PlayerType.COPYCAT;
    coin: number = 0;
    description:String="";
    partnersDecisions: Array<Decision | undefined> = new Array();
    lastDecision: Decision | undefined = Decision.COOPERATE;

    abstract play(): Decision | undefined;

    cooperate() {
        if(this.coin<0){
            throw new Error("out of money!")
        }
        this.coin = this.coin - 1;
       
    }
    cheat() {
        // player won't spend a coin, cause he is cheating
    }

    reward(prize: number) {
        this.coin = this.coin + prize;
    }
    storePartnerDecision(partnerDecision: Decision) {

        this.partnersDecisions.push(partnerDecision);
    
    }


}