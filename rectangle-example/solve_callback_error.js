var arguments = require('yargs')
    .usage('Usage: $0 -l [num] -b [num]')
    .demand(['l','b'])
    .argv;

var computeProperties = require('./rectangle_callback_error.js');

function solveRect(x, y){
    console.log("Solving for rectangle with length="+x+" and breadth="+y);
    computeProperties(x, y, function(err, properties){
        if(err){
            console.log(err);
        }
        else{
            console.log("Perimeter of rectangle is "+properties.perimeter());
            console.log("Area of rectangle is "+properties.area());
        }
    });
};

solveRect(arguments.l,arguments.b);