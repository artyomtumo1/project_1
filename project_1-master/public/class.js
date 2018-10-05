

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
//////////////////////////
class Gishatich {
    constructor(x,y,index) {
        this.x = x;
        this.y = y;
        this.energy = 100;
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
       
       for(var i in GishArr){
                if( this.x == GishArr[i].x && this.y == GishArr[i].y)
                {
                    GishArr.splice(i,1);   
                }
            }
   }

    move(){
        var newCel = this.chooseCell(0,1,6);
        var randCel = random(newCel);
        if(randCel){
            var x = randCel[0];
            var y = randCel[1];
            
            if(matrix[y][x] == 0)
            {
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 3;
            }
            else if(matrix[y][x] == 1)
            {
               
               for(var i in grassArr){
                if( x == grassArr[i].x && y == grassArr[i].y)
                {
                    grassArr.splice(i,1);   
                }
               }          
                matrix[y][x] = 3;

                matrix[this.y][this.x] = 1;
                var nGrass = new Grass(this.x, this.y, 1);
                grassArr.push(nGrass);
             
            }
          
            

            this.x = x;
            this.y=y;
            this.energy--;

        
         if(matrix[y][x] == 6){
            
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
        if(this.energy<1){
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
           var Gish1 = new Gishatich(newX, newY, this.index);
           GishArr.push(Gish1);
           this.multiply =0;
           }  
}
     
    
  
    
    eat(){
        var gishatich = this.chooseCell(2,5,6);
        var randgishatich = random(gishatich);
        if(randgishatich){
            var x = randgishatich[0];
            var y = randgishatich[1];
            if(matrix[y][x]== 2 || matrix[y][x]== 5 ){
            matrix[y][x] =this.index;
            matrix[this.y][this.x] = 0;

            this.x =x;
            this.y =y;

            this.multiply++;
            this.energy += 10;

            for(var i in GrassEaters){
                if( x == GrassEaters[i].x && y == GrassEaters[i].y)
                {
                    GrassEaters.splice(i,1);   
                }
            }
            for(var i in zavodArr){
                if( x == zavodArr[i].x && y == zavodArr[i].y)
                {
                    zavodArr.splice(i,1);   
                }
            }
            
           if(this.multiply >= 18)
           {
                this.mul();
                  
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
////////////////////////////////////////

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

class bomb{
    constructor(x,y,index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply0 = 0;
    }
    bombcoor(){
        this.bombdirect = [

            [this.x-3,this.y-3],
            [this.x-2,this.y-3],
            [this.x-1,this.y-3],
            [this.x,this.y-3],
            [this.x+1,this.y-3],
            [this.x+2,this.y-3],
            [this.x+3,this.y-3],
            [this.x-3,this.y-2],
            [this.x-2,this.y-2],
            [this.x-1,this.y-2],
            [this.x,this.y-2],
            [this.x+1,this.y-2],
            [this.x+2,this.y-2],
            [this.x+3,this.y-2],
            [this.x-3,this.y-1],
            [this.x-2,this.y-1],
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x+2,this.y-1],
            [this.x+3,this.y-1],
            [this.x-3,this.y],
            [this.x-2,this.y],
            [this.x-1,this.y],
            [this.x,this.y],
            [this.x+1,this.y],
            [this.x+2,this.y],
            [this.x+3,this.y],
            [this.x-3,this.y+1],
            [this.x-2,this.y+1],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1],
            [this.x+2,this.y+1],
            [this.x+3,this.y+1],
            [this.x-3,this.y+2],
            [this.x-2,this.y+2],
            [this.x-1,this.y+2],
            [this.x,this.y+2],
            [this.x+1,this.y+2],
            [this.x+2,this.y+2],
            [this.x+3,this.y+2],
            [this.x-3,this.y+3],
            [this.x-2,this.y+3],
            [this.x-1,this.y+3],
            [this.x,this.y+3],
            [this.x+1,this.y+3],
            [this.x+2,this.y+3],
            [this.x+3,this.y+3]
            
        ]
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(var i in bombArr){
                if( this.x == bombArr[i].x && this.y == bombArr[i].y)
                {
                    bombArr.splice(i,1);   
                }
            }
        }
deploy(){
    this.bombcoor()
    for(var i in this.bombdirect){
        var x = this.bombdirect[i][0];
        var y = this.bombdirect[i][1];
            if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){

        if(matrix[y][x] != 4 && matrix[y][x] != 5){
        matrix[y][x] = 0;
        matrix[this.y][this.x] =0;
       
        for(var q in grassArr){
                if( x == grassArr[q].x && y == grassArr[q].y)
                {
                    grassArr.splice(q,1);   
                }
               }  
               for(var w in GrassEaters){
                if( x == GrassEaters[w].x && y == GrassEaters[w].y)
                {
                    GrassEaters.splice(w,1);   
                }
               }
               for(var e in GishArr){
                if( x == GishArr[e].x && y == GishArr[e].y)
                {
                    GishArr.splice(e,1);   
                }
               }    
    }
}
    }
}

}


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
