rect = {
    perimeter: function(x, y){
        return 2*(x+y);
    },

    area: function(x, y){
        return x*y;
    }
}

function solveRect(l, b){
    console.log("Solving rectangle with length="+l+", breadth="+b);
    if(l<=0 || b<=0){
        console.log("Length or breadth of a rectangle cannot be 0 or less");
    }else{
        console.log("Perimeter of rectangle is " + rect.perimeter(l, b));
        console.log("Area of rectangle is "+rect.area(l, b));
    }
}

solveRect(1, 3);
solveRect(5, 4);
solveRect(-5, 3);