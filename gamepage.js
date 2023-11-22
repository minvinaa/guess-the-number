// generation of random value
var y = mathfloor(math.random() * 10 + 1)



else if (x > y) {
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER")
}
else {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}



// until hit

if (x == y) {
    alert("CONGRATULATIONS!!! " + playername + " YOU GUESSED IT RIGHT IN + guess + GUESS ");
}
// function for the number sent by the user
var x =
    document.getElementById("guessField").value;

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}
