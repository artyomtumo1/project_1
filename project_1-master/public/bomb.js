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