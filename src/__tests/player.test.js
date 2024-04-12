import { Player } from "../player.js";

let player1=Player().newPlayer();

test(`Player should properties for their board, their hits, and their misses`,()=>{
    expect(player1).toHaveProperty('board');
    expect(player1).toHaveProperty('hits');
    expect(player1).toHaveProperty('misses');
});
