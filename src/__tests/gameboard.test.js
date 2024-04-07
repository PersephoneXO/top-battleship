import { Gameboard } from "../gameboard.js";

let thisGameboard=Gameboard();
thisGameboard.placeShip(thisGameboard.carrier,[1,2],[5,2]);
thisGameboard.placeShip(thisGameboard.battleship,[4,3],[4,7]);

console.log(thisGameboard.board);
test(`the gameboard should have 10 rows and 10 columns`,()=>{
    expect(thisGameboard.board).toHaveLength(10);
    expect(thisGameboard.board[0]).toHaveLength(10);
});

test(`placeShip(chosenShip,startCoord,endCoord) should place the chosen ship at the specified coordinates`,()=>{
    expect(thisGameboard.board[2][1]).toBe(1);
    expect(thisGameboard.board[3][4]).toBe(1);
});
