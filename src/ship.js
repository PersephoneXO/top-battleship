export const Ship=function(){
    const properties={
        length:0,
        timesHit:0,
        isSunk:false
    }

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


    return {
        properties,
        hit,
        isSunk
    }
};
