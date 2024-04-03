import { Ship } from "../ship.js";

let thisShip=Ship().newShip(2);

let sunkShip=Ship().newShip(2);
//sunkShip.properties.length=2;
Ship().hit(sunkShip);
Ship().hit(sunkShip);

test(`check if ship objects have a property for length, number of times they've been hit and whether or not its been sunk`,()=>{
    expect(thisShip).toHaveProperty('length');
    expect(thisShip).toHaveProperty('timesHit');
    expect(thisShip).toHaveProperty('isSunk');
});

test(`hit() function should increase the number of 'hits' on a ship`,()=>{
    expect(Ship().hit(thisShip)).toBe(1);
});

test(`isSunk() should calculate whether or not a ship is sunk`,()=>{
    expect(Ship().isSunk(thisShip)).toBe(false);
    expect(Ship().isSunk(sunkShip)).toBe(true);
});
