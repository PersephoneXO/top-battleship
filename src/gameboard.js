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

    return {
        board,

    }
};
