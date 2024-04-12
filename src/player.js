import { Gameboard } from "./gameboard.js"

export const Player=function(){
    let thisGameboard=Gameboard();

    //player object
    const newPlayer=()=>{
        let board=thisGameboard.board;
        let hits=thisGameboard.hits;
        let misses=thisGameboard.misses;
        return{board,hits,misses};
    }

    return{
        newPlayer
    }
}
