gsap.registerPlugin(Draggable);

$(document).ready(function(){
    $("#placeShipsModal").modal('show');
    let gridContainer = $("#container-grid")[0];
    console.log("Container info:", gridContainer);
    setTimeout(() => {
    let gridHeight = gridContainer.offsetHeight;
    let gridWidth = gridContainer.offsetWidth;
    console.log("Height",gridHeight);
    console.log("Width",gridWidth);
    
    let carrierDrag = Draggable.create("#carrier",{
        type: "x,y",
        liveSnap:{
            x: function(endValue) {
              return Math.round(endValue / (gridWidth/10)) * (gridWidth/10);
            },
            y: function(endValue) {
              return Math.round(endValue / (gridHeight/10)) * (gridHeight/10);
            },
          },
          onDragEnd: function(){Draggable.get('#carrier').applyBounds(document.getElementById('container-grid'))},
            
          
          })
    }, 300);
    // let battleshipDrag = Draggable.create("#carrier");
    // let cruiserDrag = Draggable.create("#carrier");
    // let submarineDrag = Draggable.create("#carrier");
    // let destroyerDrag = Draggable.create("#carrier");
    console.log('script complete')
});
