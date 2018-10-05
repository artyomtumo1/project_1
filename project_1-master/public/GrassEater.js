class GrassEater {
    constructor(x,y,index) {
        this.x = x;
        this.y = y;
        this.energy = 32;
        this.index = index;
        this.multiply = 0;
        
    }
    getNewCoor(){
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
   chooseCell(character1,character2,character3){
     this.getNewCoor();
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
         if(matrix[y][x]==character1 || matrix[y][x]== character2 || matrix[y][x]== character3){
             found.push(this.direct[i])
         }
     }
     }
     return found;
 }
   die(){
       
       matrix[this.y][this.x] = 0;
       
       for(var i in GrassEaters){
                if( this.x == GrassEaters[i].x && this.y == GrassEaters[i].y)
                {
                    GrassEaters.splice(i,1);   
                }
            }
   }

    move(){
        var newCel = this.chooseCell(0,6);
        var randCel = random(newCel);
        if(randCel){
            var x = randCel[0];
            var y = randCel[1];
            if(matrix[y][x]== 0){
            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y=y;
            this.energy--;
            }
            else if(matrix[y][x] == 6){
                matrix[y][x] = 0;
                matrix[this.y][this.x] = this.index;
              
                for(var i in bombArr){
                    
                    if( x == bombArr[i].x && y == bombArr[i].y)
                    {
                        bombArr[i].deploy();
                        bombArr[i].die();
                    }  
                    }
            }

        }
        if(this.energy <1 ){
                    this.die();
        }
    }
    mul(){
  
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
       if(newCell){
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = this.index;
           var NewGraseat = new GrassEater(newX, newY, this.index);
           GrassEaters.push(NewGraseat);
           }  
}
     
    
  
    
    eat(){
        var GrasEat = this.chooseCell(1,5,6);
        var randGrasEat = random(GrasEat);
        if(randGrasEat){
            var x = randGrasEat[0];
            var y = randGrasEat[1];
            if(matrix[y][x]== 1 || matrix[y][x]== 5){
            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;

            this.x =x;
            this.y =y;

            this.multiply++;
            this.energy++;
            for(var i in grassArr){
                if( x == grassArr[i].x && y == grassArr[i].y)
                {
                    grassArr.splice(i,1);   
                }
            }
            for(var i in zavodArr){
                if( x == zavodArr[i].x && y == zavodArr[i].y)
                {
                    zavodArr.splice(i,1);   
                }
            }
           if(this.multiply ==16 )
           {
                this.mul();
                this.multiply = 0;    
             }
           }
           else if(matrix[y][x] == 6){
            matrix[y][x] = 0;
            matrix[this.y][this.x] = this.index;
          
            for(var i in bombArr){
                
                if( x == bombArr[i].x && y == bombArr[i].y)
                {
                    bombArr[i].deploy();
                    bombArr[i].die();
                }  
                }
        }
           
 }
        
        else {
             this.move();

            }
    } 
}