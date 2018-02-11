var min = 0;
var max = 5;
var win = 0;
var bank = 10;
var startBank = 10;
while (confirm("Do you want to play a game?")) {
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log (number);
    var i = 3;
    while (i > 0) {
        var userNumber = prompt("Enter a number from " + min + " to " + max + "\n" +
        "Attempts left: " + i + "\nTotal prize: " + win + "$ \n" +
        "Possible prize on current attempt: " + bank + "$");
        if (userNumber == number && userNumber === "") {
            win = win+bank;
            var choice = confirm("Your prize is " + win + "$. Do you want to continue the game?");
            if (choice == true) {
                startBank = startBank*3;
                max = max*2;
                bank = startBank;
            } else {
                console.log("Thank you for a game. Your prize is: " + win + "$");
                min = 0;
                max = 5;
                win = 0;
                bank = 10;
            }
            break;
        } else {
            bank = Math.floor(bank/2);
            i--;
        }        
    }
    if (i == 0) {
        var end = confirm("Do you want to play again?");
        if (end == true) {
            startBank = 10; 
            bank = 10;
            win = 0;
            min = 0;
            max = 5;
        } else {
            console.log("Thank you for a game. Your prize is: " + win + "$");
        }
    }
}
console.log ("You did not become a millionaire");
