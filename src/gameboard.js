import { Ship } from "./ship.js";

export const Gameboard=function(){
    let board=initBoard();

    //helper function for generating each row
    function initRow(){
        let row=[];
        for(let i=0;i<10;i++){
            row.push(0);
        }
        return row;
    }
    //helper function for creating the board
    function initBoard(){
        let thisBoard=[];
        for(let i=0;i<10;i++){
            thisBoard.push(initRow());
        }
        return thisBoard;
    }

    /*
    types of ships:
    - Carrier (5 hits)
    - Battleship (4 hits)
    - Destroyer (3 hits)
    - Submarine (3 hits)
    - Patrol Boat (2 hits)
    */

    let carrier=Ship().newShip(5);
    let battleship=Ship().newShip(4);
    let destoryer=Ship().newShip(3);
    let submarine=Ship().newShip(3);
    let patrolboat=Ship().newShip(2);

    /*
    board number meanings:
    - 0 = empty square
    - 1 = part of a ship
    - 2 = sunken part of a ship
    - 3 = missed shot
    */

    //function to place ships at specific coordinates
    function placeShip(chosenShip,startCoord,endCoord){
        //board[startCoord[1]][startCoord[0]]=1;
        //board[endCoord[1]][endCoord[0]]=1;

        if(startCoord[1]==endCoord[1]){
            for(let i=startCoord[0];i<=endCoord[0];i++){
                board[startCoord[1]][i]=1;
                chosenShip.coordinates.push([startCoord[1],i]);
            }
        }
        else{
            for(let i=startCoord[1];i<=endCoord[1];i++){
                board[i][endCoord[0]]=1;
                chosenShip.coordinates.push([i,endCoord[0]]);
            }
        }

        return board;
    }

    return {
        board,
        carrier,
        battleship,
        destoryer,
        submarine,
        patrolboat,
        placeShip
    }
};
