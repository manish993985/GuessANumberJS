var count = 0;
var tempcount = 0;
let guesses = [];

function displayGuesses() {
    const resultsList = document.getElementById("results");
    resultsList.innerHTML = "";
    for (let i = Math.max(0, guesses.length - 10); i < guesses.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Guess ${i + 1}: ${guesses[i]}`;
        resultsList.appendChild(listItem);
    }
}

function buttonfunct() {
    var value1 = parseInt(document.getElementById("inputid").value); // Parse input value as integer
    guesses.push(value1);

    if (isNaN(value1) || value1 < 0 || value1 > 99) { // Check if value is a valid number
        alert("Value should be between 0-99");
        return; // Exit function if value is invalid
    }

    let temp = Math.floor(Math.random() * 100);
    tempcount++;

    if (value1 == temp) {
        count++;
        alert("Success");
    }
    if (tempcount == 10) {
        tempcount = 0;
        alert("Please Retry");
    }

    displayGuesses();
}

function Reset() {
    guesses = [];
    displayGuesses();
    document.getElementById('inputid').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('score').textContent = '';
}

