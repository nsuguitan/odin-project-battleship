const shipFactory = (size) =>{
    let hits = [];
    const getSize = () => {return size};
    const getHits = () => {return hits};
    const hit = (row,col) => { 
        hits.push(row.toString() + col.toString()) 
    };
    const isSunk = () => {
        if(hits.length === getSize()) {return true}
        else {return false}
    };
    return {getSize, getHits, hit, isSunk};
    
};

module.exports = shipFactory;
