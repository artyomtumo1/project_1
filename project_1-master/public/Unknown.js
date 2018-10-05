class Unknown{
    constructor(x,y,index) {
        this.x = x;
        this.y = y;
        this.energy =30;
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
    destroycoor(){
        this.desdirect = [
            [this.x-2,this.y-2],
            [this.x-1,this.y-2],
            [this.x,this.y-2],
            [this.x+1,this.y-2],
            [this.x+2,this.y-2],
            [this.x-2,this.y-1],
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x+2,this.y-1],
            [this.x-2,this.y],
            [this.x-1,this.y],
            [this.x,this.y],
            [this.x+1,this.y],
            [this.x+2,this.y],
            [this.x-2,this.y+1],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1],
            [this.x+2,this.y+1],
            [this.x-2,this.y+2],
            [this.x-1,this.y+2],
            [this.x,this.y+2],
            [this.x+1,this.y+2],
            [this.x+2,this.y+2]
        ]
    }
   chooseCell(character1,character2,character3,character4,character5,character6){
     this.getNewCoor();
     var found = [];
     for(var i in this.direct){
         var x =this.direct[i][0];
         var y = this.direct[i][1];
         if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){

         if(matrix[y][x]==character1 || 
         matrix[y][x]== character2 || 
         matrix[y][x]== character3 ||
         matrix[y][x]== character4 ||
         matrix[y][x]== character5 ||
          matrix[y][x]== character6 )
          {
             found.push(this.direct[i])
         }
     }
     }
     return found;
 }
   die(){
    
      
       matrix[this.y][this.x] = 0;
       
       for(var i in unkArr){
                if( this.x == unkArr[i].x && this.y == unkArr[i].y)
                {
                    unkArr.splice(i,1);   
                }
            }
        }
        destroy(){
            this.destroycoor();
            for(var i in this.desdirect){
                var x = this.desdirect[i][0];
                var y = this.desdirect[i][1];
                if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
if(matrix[y][x] != 5){
                    matrix[y][x] = 0;
                    
                    for(var i in grassArr){
                        if( x == grassArr[i].x && y == grassArr[i].y)
                        {
                            grassArr.splice(i,1);   
                        }
                       }                   
                    
                    
                        for(var i in GrassEaters){
        
                            if( x == GrassEaters[i].x && y == GrassEaters[i].y)
                            {
                                GrassEaters.splice(i,1);   
                            }
                        }
                    
                
                        for(var i in GishArr){
        
                            if( x == GishArr[i].x && y == GishArr[i].y)
                            {
                                GishArr.splice(i,1);   
                            }
                        }
                    
                  
                        for(var i in unkArr){
        
                            if( x == unkArr[i].x && y == unkArr[i].y)
                            {
                                unkArr.splice(i,1);   
                            }
                        }
                    }
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
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y=y;
            this.energy--;

        }
        else if(matrix[y][x] == 6){
            
            matrix[y][x] = 0;
            matrix[this.y][this.x] = 4;
          
            for(var i in bombArr){
                
                if( x == bombArr[i].x && y == bombArr[i].y)
                {
                    bombArr[i].deploy();
                    bombArr[i].die();
                }  
                }
    }
        }
        
        if(this.energy<1){
                    this.destroy();
                    this.die();
        }
    }

        
    eat(){
        var gishatich = this.chooseCell(1,2,3,6);
        var randgishatich = random(gishatich);
        if(randgishatich){
            
            var x = randgishatich[0];
            var y = randgishatich[1];
            if(matrix[y][x] !== 6){
            matrix[y][x] =4;
            matrix[this.y][this.x] = 0;
            
            this.x =x;
            this.y =y;
            this.energy--;
            
           

            for(var i in grassArr){
                if( x == grassArr[i].x && y == grassArr[i].y)
                {
                    grassArr.splice(i,1);   
                }
               }                   
            for(var i in GrassEaters){

                    if( x == GrassEaters[i].x && y == GrassEaters[i].y)
                    {
                        GrassEaters.splice(i,1);   
                    }
                }
                for(var i in GishArr){

                    if( x == GishArr[i].x && y == GishArr[i].y)
                    {
                        GishArr.splice(i,1);   
                    }
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
              if(this.energy<1){
                    this.destroy();
                    this.die();
                }
    } 
}
