const shipFactory = (size) =>{
    hits = [];
    const getSize = () => {return size};
    const getHits = () => {return hits};
    const hit = (row,col) => { 
        hits.push([row,col]) 
    };
    const isSunk = () => {
        if(hits.length === getSize()) {return true}
        else {return false}
    };
    return {getSize, getHits, hit, isSunk};
    
};

module.exports = shipFactory;
