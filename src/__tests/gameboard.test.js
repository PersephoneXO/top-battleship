import { Gameboard } from "../gameboard.js";

let thisGameboard=Gameboard();

test(`the gameboard should have 10 rows and 10 columns`,()=>{
    expect(thisGameboard.board).toHaveLength(10);
    expect(thisGameboard.board[0]).toHaveLength(10);
});
