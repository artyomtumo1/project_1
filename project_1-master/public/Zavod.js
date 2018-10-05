class zavod{
    constructor(x,y,index){
        this.x = x;
        this.y = y;
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
 chooseCell(character1,character2,character3,character4){
     this.getNewCoor();
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
         if(matrix[y][x]==character1 || 
         matrix[y][x]==character2 || 
         matrix[y][x]==character3 || 
         matrix[y][x]==character4){
             found.push(this.direct[i])
   }
     }
     }
     return found;
 } 
     mul(){
  
       var emptyCells = this.chooseCell(0,1);
       var newCell = random(emptyCells);
       if(newCell){
           var x = newCell[0];
           var y = newCell[1];
           matrix[y][x] = 4;
            for(var i in grassArr){
                if( x == grassArr[i].x && y == grassArr[i].y)
                {
                    grassArr.splice(i,1);   
                }
               }  
           var izd = new Unknown(x, y, 4);
           unkArr.push(izd);
           this.multiply =0;
           
           }  
}



 move(){
        var newCel = this.chooseCell(0,1);
        var randCel = random(newCel);
        if(randCel){
            var x = randCel[0];
            var y = randCel[1];
            
            if(matrix[y][x] == 0)
            {     matrix[y][x] = 5;
                matrix[this.y][this.x] = 0;
            }
            else if(matrix[y][x] == 1)
            {
                for(var i in grassArr){
                    if( x == grassArr[i].x && y == grassArr[i].y)
                    {
                        grassArr.splice(i,1);   
                    }
                   }          
                    matrix[y][x] = 5;

                    matrix[this.y][this.x] = 1;
                    var nGrass = new Grass(this.x, this.y, 1);
                    grassArr.push(nGrass);
                  
            }
           
            
            this.multiply++;
            
            
            this.x = x;
            this.y=y;
           
           if(this.multiply >= 12){
                this.mul();
                
            }
          

        }
        
        
        
    }
}