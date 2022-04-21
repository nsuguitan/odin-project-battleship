const shipFactory = (size,position) =>{
    hits = [];
    const getSize = () => size;
    const getPosition = () => position;
    const getHits = () => hits;
    const hit = (loc) => { 
        hits.push(loc) 
    };
    const isSunk = () => {
        if(hits.length === getSize()) {return true}
        else {return false}
    };
    return {getSize, getPosition, getHits, hit, isSunk};
    
};

module.exports = shipFactory;
