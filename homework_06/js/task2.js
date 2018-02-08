var euro = prompt("Enter sum of euro","0");
var grnEu = euro * 33.86;
var dollar = prompt("Enter sum of dollars","0");
var grnDol = dollar * 27.46;
if (!euro.match(/[^0-9\.]/g) && !dollar.match(/[^0-9\.]/g)) {
    var calculation = euro + " euros are equal " + grnEu.toFixed(2) + " UAH, " + dollar + " dollars are equal " + grnDol.toFixed(2) + " UAH, 1 euro is equal " + (33.86/27.46).toFixed(2) + " dollars.";
    console.log(calculation); 
} else {
    console.log("Write correct amount of money!");
}
