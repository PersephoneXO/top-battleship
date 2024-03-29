import { Ship } from "../ship.js";

let thisShip=Ship();

let sunkShip=Ship();
sunkShip.properties.length=2;
sunkShip.hit();
sunkShip.hit();

test(`check if ship objects have a property for length, number of times they've been hit and whether or not its been sunk`,()=>{
    expect(thisShip.properties).toHaveProperty('length');
    expect(thisShip.properties).toHaveProperty('timesHit');
    expect(thisShip.properties).toHaveProperty('isSunk');
});

test(`hit() function should increase the number of 'hits' on a ship`,()=>{
    expect(thisShip.hit()).toBe(1);
});

test(`isSunk() should calculate whether or not a ship is sunk`,()=>{
    expect(thisShip.isSunk()).toBe(false);
    expect(sunkShip.isSunk()).toBe(true);
});
