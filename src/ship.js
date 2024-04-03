export const Ship=function(){
    /*
    const properties={
        length:0,
        timesHit:0,
        isSunk:false
    }*/

    const newShip=(shipLength)=>{
        let length=shipLength;
        let timesHit=0;
        let isSunk=false;
        return {length,timesHit,isSunk};
    }

    function hit(ship){
        ship.timesHit++;
        return ship.timesHit;
    }

    function isSunk(ship){
        if(ship.timesHit==ship.length){
            ship.isSunk=true;
        }
        return ship.isSunk;
    }

    /*
    function hit(){
        properties.timesHit++;
        return properties.timesHit;
    }

    function isSunk(){
        if(properties.timesHit==properties.length){
            properties.isSunk=true;
        }
        return properties.isSunk;
    }
*/

    return {
        newShip,
        hit,
        isSunk
    }
};
