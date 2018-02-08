var side1 = prompt("Enter first side of triangle");
var side2 = prompt("Enter second side of triangle");
var side3 = prompt("Enter third side of triangle");
var type = "";
var a = parseFloat(side1);
var b = parseFloat(side2);
var c = parseFloat(side3);
if (!side1.match(/[^0-9\.]/g) && !side2.match(/[^0-9\.]/g) && !side3.match(/[^0-9\.]/g)
    && a<b+c && b<a+c && c<a+b && a+b+c>0) {
    if (a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b) {
        type = "right triangle";
    } else if (a==b && b==c) {
        type = "equilateral";
    } else if (a==b || a==c || b==c) {
        type = "isosceles";
    } else {
        type = "scalene";
    }
    var p = (a+b+c)/2;
    var square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log("Type of triangle is " + type + " and square is " + square.toFixed(2))
} else {
    console.log("Incorrect data!");
}
