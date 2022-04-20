class Ship{
    constructor(size,hits,position){
        this.size = size;
        this.hits = hits;
        this.position = position;
    }

    hit(loc){ 
        return true;
    }
}

module.exports = Ship;
