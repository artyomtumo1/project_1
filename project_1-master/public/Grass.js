

class Grass{
    constructor(x,y,index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.direct=[
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x-1,this.y],
            [this.x+1,this.y],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1]
        ]

    }
 chooseCell(character){
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
         if(matrix[y][x]==character){
             found.push(this.direct[i])
         }
     }
     }
     return found;
 } 
 mul(){
     this.multiply++;
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);

       
       if(newCell && this.multiply >= 8){
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = this.index;

           var newGrass = new Grass(newX, newY, this.index);
           grassArr.push(newGrass);
           this.multiply = 0;

 }  
}
}

/////////////////////////////

//////////////////////////

////////////////////////////////////////






