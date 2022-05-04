import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin( CSSPlugin )
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
          onDragEnd: function(){this.applyBounds(document.getElementById('container-grid')); shipStartLocation("carrier");},
          onClick: function(){
            gsap.to('#carrier', {transform: "rotate(90deg)"})
          }  
          })
    let battleshipDrag = Draggable.create("#battleship",{
      type: "x,y",
      liveSnap:{
          x: function(endValue) {
            return Math.round(endValue / (gridWidth/10)) * (gridWidth/10);
          },
          y: function(endValue) {
            return Math.round(endValue / (gridHeight/10)) * (gridHeight/10);
          },
        },
        onDragEnd: function(){this.applyBounds(document.getElementById('container-grid'))},
        onClick: function(){
          gsap.to('#battleship', {transform: "rotate(90deg)"})
        }  
        });
    let cruiserDrag = Draggable.create("#cruiser",{
      type: "x,y",
      liveSnap:{
          x: function(endValue) {
            return Math.round(endValue / (gridWidth/10)) * (gridWidth/10);
          },
          y: function(endValue) {
            return Math.round(endValue / (gridHeight/10)) * (gridHeight/10);
          },
        },
        onDragEnd: function(){this.applyBounds(document.getElementById('container-grid'))},
        onClick: function(){
          gsap.to('#cruiser', {transform: "rotate(90deg)"})
        }  
        });
    let submarineDrag = Draggable.create("#submarine",{
      type: "x,y",
      liveSnap:{
          x: function(endValue) {
            return Math.round(endValue / (gridWidth/10)) * (gridWidth/10);
          },
          y: function(endValue) {
            return Math.round(endValue / (gridHeight/10)) * (gridHeight/10);
          },
        },
        onDragEnd: function(){this.applyBounds(document.getElementById('container-grid'))},
        onClick: function(){
          gsap.to('#submarine', {transform: "rotate(90deg)"})
        }  
        });
        let destroyerDrag = Draggable.create("#destroyer",{
          type: "x,y",
          liveSnap:{
              x: function(endValue) {
                return Math.round(endValue / (gridWidth/10)) * (gridWidth/10);
              },
              y: function(endValue) {
                return Math.round(endValue / (gridHeight/10)) * (gridHeight/10);
              },
            },
            onDragEnd: function(){this.applyBounds(document.getElementById('container-grid')); shipStartLocation("destroyer");},
            onClick: function(){
              //let temp = document.getElementById('destroyer').style.transform + "rotate(90deg)"
              gsap.to('#destroyer', {transform: "rotate(90deg)"})
            }  
            });
    }, 300);

    function shipStartLocation(shipId){
      let shipImage = document.getElementById(shipId);
      let gridImage = document.getElementById("container-grid")
      let gridRect = gridImage.getBoundingClientRect();
      let shipRect = shipImage.getBoundingClientRect();
      let originX = gridRect.left;
      let originY = gridRect.top;
      let cx = shipRect.left;
      let cy = shipRect.top - 5;
      let gx = Math.round((cx- originX)/46)
      let gy = Math.round((cy- originY)/48)
      console.log(shipId + " x:"+ cx)
      console.log(shipId+ " y:"+ cy)
      console.log(" Grid (x,y): ("+ originX + ", " + originY + ")")
      console.log(shipId + " (x,y): ("+ gx + ", " + gy + ")")

    }

    function secureShips(){

    }


    console.log('script complete')
});
