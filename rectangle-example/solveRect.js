var rect = require("./simpleRect.js");

function solve(l, b){
    console.log("Solving rectangle with length="+l+", breadth="+b);
    if(l<=0 || b<=0){
        console.log("Length or breadth of a rectangle cannot be 0 or less");
    }else{
        console.log("Perimeter of rectangle is " + rect.perimeter(l, b));
        console.log("Area of rectangle is "+rect.area(l, b));
    }
}

solve(1, 3);
solve(5, 4);
solve(-5, 3);