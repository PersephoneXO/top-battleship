import { Gameboard } from "../gameboard.js";

let thisGameboard=Gameboard();


//console.log(thisGameboard.board);
test(`the gameboard should have 10 rows and 10 columns`,()=>{
    expect(thisGameboard.board).toHaveLength(10);
    expect(thisGameboard.board[0]).toHaveLength(10);
});

test(`placeShip(chosenShip,startCoord,endCoord) should place the chosen ship at the specified coordinates`,()=>{
    thisGameboard.placeShip(thisGameboard.carrier,[1,2],[5,2]);
    thisGameboard.placeShip(thisGameboard.battleship,[4,3],[4,6]);
    expect(thisGameboard.board[2][1]).toBe(1);
    expect(thisGameboard.board[3][4]).toBe(1);
});



test(`receiveAttack(coord) should determine whether or not the attack hit a ship and record the coord`,()=>{
    thisGameboard.receiveAttack([1,2]);
    thisGameboard.receiveAttack([1,1]);
    expect(thisGameboard.board[2][1]).toBe(2);
    expect(thisGameboard.board[1][1]).toBe(3);
});

test(`Gameboard should be able to keep track of missed attacks`,()=>{
    expect(thisGameboard.misses).toStrictEqual([[1,1]]);
});

test(`Gameboard should be able to report whether or not all of their ships have been sunk`,()=>{
    expect(thisGameboard.isAllShipsSunk()).toBe(false);
    //sink carrier
    thisGameboard.receiveAttack([2,2]);
    thisGameboard.receiveAttack([3,2]);
    thisGameboard.receiveAttack([4,2]);
    thisGameboard.receiveAttack([5,2]);
    //sink battleship
    thisGameboard.receiveAttack([4,3]);
    thisGameboard.receiveAttack([4,4]);
    thisGameboard.receiveAttack([4,5]);
    thisGameboard.receiveAttack([4,6]);
    //place and sink destroyer
    thisGameboard.placeShip(thisGameboard.destoryer,[0,9],[2,9]);
    thisGameboard.receiveAttack([0,9]);
    thisGameboard.receiveAttack([1,9]);
    thisGameboard.receiveAttack([2,9]);
    //place and sink submarine
    thisGameboard.placeShip(thisGameboard.submarine,[3,9],[5,9])
    thisGameboard.receiveAttack([3,9]);
    thisGameboard.receiveAttack([4,9]);
    thisGameboard.receiveAttack([5,9]);
    //place and sink patrol boat
    thisGameboard.placeShip(thisGameboard.patrolboat,[7,9],[8,9]);
    thisGameboard.receiveAttack([7,9]);
    thisGameboard.receiveAttack([8,9]);
    //test function again
    expect(thisGameboard.isAllShipsSunk()).toBe(true);
});
