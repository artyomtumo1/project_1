

function randomMatrix(n, m) {
    var matrix = []
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {

            matrix[y][x] = 0;
             }
    
                  }
               

                  
                  for(var q =0;q<212/*30*/;q++){
                  
                     var r1 = Math.floor((Math.random() * 90) + 5);
                     var r11 = Math.floor((Math.random() * 90) + 5);
                      matrix[r1][r11] = 1;
                  }
            for(var w = 0;w<180;w++){
                  
                                    var r2 = Math.floor((Math.random() * 90) + 5);
                                     var r22= Math.floor((Math.random() * 90) + 5);
                                    matrix[r2][r22] = 2;
                  }
                   
                  for(var e =0;e<100;e++){
                  
                                    var r3 = Math.floor((Math.random() * 90) + 5);
                                      var r33 =Math.floor((Math.random() * 90) + 5);
                                    matrix[r3][r33] = 3;
                  }
                  
                  for(var r =0;r<40;r++){
                
                                     var r4 = Math.floor((Math.random() * 90) + 5);
                                       var r44= Math.floor((Math.random() * 90) + 5);;
                                     matrix[r4][r44] = 4;
                  }
                  
                  for(var t =0;t<35;t++){
                                   var r55 =  Math.floor((Math.random() * 90) + 5);
                                   var r5 =  Math.floor((Math.random() * 90) + 5);
                                   matrix[r5][r55] = 5;
                  }
                  for(var t =0;t<30;t++){
                    var r55 =  Math.floor((Math.random() * 90) + 5);
                    var r5 = Math.floor((Math.random() * 90) + 5);
                    matrix[r5][r55] = 6;
                    
  }
                
   return matrix;

}



///////////////////////LESSON 4////////////////////////










///////fin work///////

var c = Math.floor((Math.random() * 10) +96);
var matrix = randomMatrix(c, c);
var grassArr = [];
var GrassEaters =[];
var GishArr = [];
var unkArr = [];
var zavodArr = [];
var bombArr = [];
var side = 7;

function setup() {
    frameRate(10);
    createCanvas(c * side, c * side);
    background("#acacac");

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x,y, 1);
                grassArr.push(gr);
            }
            else if(matrix[y][x] == 2) {
                var graseat = new GrassEater(x,y, 2);
                GrassEaters.push(graseat);
            }
            else if(matrix[y][x] == 3) {
                var gish = new Gishatich(x,y, 3);
               GishArr.push(gish);
            }
             else if(matrix[y][x] == 4) {
                var un1 = new Unknown(x,y, 4);
              unkArr.push(un1);
            }
              else if(matrix[y][x] == 5) {
                var zav1 = new zavod(x,y, 5);
              zavodArr.push(zav1);
            }
            else if(matrix[y][x] == 6) {
                var bom1 = new bomb(x,y, 6);
              bombArr.push(bom1);
            }

        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(0, 120, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac")
                rect(x * side, y * side, side, side);

            }
            else if(matrix[y][x]==2){
                fill(255, 255, 0);
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==3){
                fill(10, 15,0);
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==4){
                fill(10, 15, 255);
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x]==5){
                fill(250, 15, 25);
                rect(x * side, y * side, side, side);
            }
             else if(matrix[y][x]==6){
                fill(0, 242, 212);
                rect(x * side, y * side, side, side);
               
            }
        }
    }

           
        
    for (var i in grassArr) {
      grassArr[i].mul();
     // console.log(grassArr.length)
    }
    for (var i in GrassEaters) {
          GrassEaters[i].eat()
    }
    for(var i in GishArr){
        GishArr[i].eat();
        
    }
    for(var i in unkArr){
        unkArr[i].eat();
        //console.log(grassArr.length)
         
    }
    
    for(var i in zavodArr){
        zavodArr[i].move();
         
        
    }
    
  

}


