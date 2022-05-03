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
          onDragEnd: function(){this.applyBounds(document.getElementById('container-grid'))},
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
            console.log("x:",endValue);
            return Math.round(endValue / (gridWidth/10)) * (gridWidth/10);
          },
          y: function(endValue) {
            console.log("y:",endValue);
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
            onDragEnd: function(){this.applyBounds(document.getElementById('container-grid'))},
            onClick: function(){
              gsap.to('#destroyer', {transform: "rotate(90deg)"})
            }  
            });
    }, 300);

    console.log('script complete')
});
