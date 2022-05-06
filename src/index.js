import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "./factories/ship.js";
import "./factories/player.js";
import "./factories/gameboard.js";
import gameboardFactory from "./factories/gameboard.js";
import shipFactory from "./factories/ship.js";
import { _colorStringFilter } from "gsap/gsap-core";


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
      document.getElementById("start-button").addEventListener("click", function(){
        secureShips();
        $('#placeShipsModal').modal('hide')});

        let playerGrid = createPlayerGrid(10,10)

        let computerGrid = createComputerGrid(10,10,function(el,row,col,i){
          console.log("You clicked on element:",el);
          console.log("You clicked on row:",row);
          console.log("You clicked on col:",col);
          console.log("You clicked on item #:",i);
        });
        document.getElementById('player-board').appendChild(playerGrid); 
        document.getElementById('computer-board').appendChild(computerGrid);  
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
      //y-axis location is the row, x-axis location is column
      return[gy,gx]

    }

    function secureShips(){
      console.log("Start Button Clicked --- let's goooooo!")
      //Human Player board generation
      const myBoard = gameboardFactory()
      const myCarrier = shipFactory(5)
      const myBattleship = shipFactory(4)
      const myCruiser = shipFactory(3)
      const mySubmarine = shipFactory(3)
      const myDestroyer = shipFactory(2)
      let shipList = [myCarrier, myBattleship, myCruiser, mySubmarine, myDestroyer]
      let shipIds = ["carrier", "battleship", "cruiser", "submarine", "destroyer"]
      for (let i = 0; i < shipList.length; i++){
        let [row, col] = shipStartLocation(shipIds[i])
        console.log("coords:",[row, col])
        let transformString = '' + document.getElementById(shipIds[i]).style.transform
        console.log("Transform string: ", transformString)
        let rotation = transformString.match(/rotate\(\d+deg\)/i);
        console.log(shipIds[0] + " rotation: "+ rotation)
        if (rotation && rotation[0] === 'rotate(90deg)'){
          myBoard.placeShip(shipList[i],row, col, true)
          console.log("-------- Vert INFO------")
          console.table(myBoard.getBoard())
          console.table(myBoard.getShips())
        }
        else{
          myBoard.placeShip(shipList[i],row, col, false)
          console.log("-------- Horizontal INFO------")
          console.table(myBoard.getBoard())
          console.table(myBoard.getShips())
        }
      }

    }

    function createPlayerGrid( rows, cols ){
      var i=0;
      var grid = document.createElement('table');
      grid.className = 'grid';
      for (var r=0;r<rows;++r){
          var tr = grid.appendChild(document.createElement('tr'));
          for (var c=0;c<cols;++c){
              var cell = tr.appendChild(document.createElement('td'));
              cell.innerHTML = ++i;
          }
      }
      return grid;
    }

    function createComputerGrid( rows, cols, callback){
      var i=0;
      var grid = document.createElement('table');
      grid.className = 'grid';
      for (var r=0;r<rows;++r){
          var tr = grid.appendChild(document.createElement('tr'));
          for (var c=0;c<cols;++c){
              var cell = tr.appendChild(document.createElement('td'));
              cell.innerHTML = ++i;
              cell.addEventListener('click',(function(el,r,c,i){
                  return function(){
                      callback(el,r,c,i);
                  }
              })(cell,r,c,i),false);
          }
      }
      return grid;
    }


    console.log('script complete')
});
