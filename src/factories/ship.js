const shipFactory = (size) =>{
    hits = [];
    const getSize = () => size;
    const getHits = () => hits;
    const hit = (loc) => { 
        hits.push(loc) 
    };
    const isSunk = () => {
        if(hits.length === getSize()) {return true}
        else {return false}
    };
    return {getSize, getHits, hit, isSunk};
    
};

module.exports = shipFactory;
