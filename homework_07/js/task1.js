var n = prompt("Please enter natural number (0<N<=20)", 7);
var s = "";
var t = "[~]";
var i = 1;
var r = "";
var N = parseInt(n)
if (n>0 && n<21 && N==n) {
    for ( var j = 1; j < N; j++) {
        s = s + "   ";
    }    
    while (i<=N) {
        r += s + t + s + "\n";
        i++;
        s = s.substr(0, (N - i) * 3);
        t = t + "[~]" + "[~]";
    }
    console.log(r);
} else {
    console.error("Incorrect!")
}