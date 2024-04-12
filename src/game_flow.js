import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

export function gameFlow(){
    //initialize game elements
    let player1=Player().newPlayer();
    let player2=Player().newPlayer();
    let round=0;
    let currentPlayer;
    let winner;



}


//gameFlow helper functions
const flowHelpers=(function(){

    //determine which player's turn it is
    function whosTurn(round,player1,player2){
        if(round%2==0){
            return player1;
        }else{return player2};
    }


    return{
        whosTurn,

    }
}());
