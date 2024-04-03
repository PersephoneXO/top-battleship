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


    return {
        board,

    }
};
