// variables

// words in array
var words = ['ironman', 'thor', 'hulk', 'captainamerica', 'blackwidow', 'stephenstrange', 'warmachine',
    'spiderman', 'blackpanther', 'vision', 'falcon', 'wintersoldier', 'loki', 'thanos', 'starlord'
];

// word chosen
var wordChoice = "";
// holds letters in word
var lettersWord = [];
// only able to press once
var usedLetters = ['a ', 'b ', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
// hold blanks
var numBlanks = 0;
// hold successful guesses
var successGuess = [];
// hold wrong guesses
var wrongletter = [];
// counters
var wins = 0;
var lost = 0;
var guesses = 10;
var rightguess = 0;


// functions====================================
function reset() {
    wordChoice = words[Math.floor(Math.random() * words.length)];
    // need to split word into letters
    lettersWord = wordChoice.split('');

    numBlanks = lettersWord.length;

    //reset
    letterGuessed = 0;
    rightguess = 0;
    guesses = 10;
    wrongletter = [];
    successGuess = [];
    usedLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    test = false;
    hangMan();
}

function hangMan() {
    // range error if try to call reset
    wordChoice = words[Math.floor(Math.random() * words.length)];
    lettersWord = wordChoice.split('');
    numBlanks = lettersWord.length;

    rightguess = 0;
    guesses = 10;
    wrongletter = [];
    successGuess = [];
    usedLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    for (var i = 0; i < numBlanks; i++) {
        successGuess.push('_');
        document.getElementById('guessingWord').innerHTML = successGuess;
    }
    document.getElementById("guessingWord").innerHTML = successGuess.join(' ');
    document.getElementById("guessesLeft").innerHTML = guesses;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("loss").innerHTML = lost;
    document.getElementById("guessWrong").innerHTML = wrongletter;
}

// compare key entered to words
function compareLetters(userKey) {
    if (wordChoice.indexOf(userKey) > -1) {
        for (var i = 0; i < numBlanks; i++) {
            if (lettersWord[i] === userKey) {
                rightguess++;
                successGuess[i] = userKey;
                document.getElementById('guessingWord').innerHTML = successGuess.join(' ');
            }
        }
    } else {
        wrongletter.push(userKey);
        guesses--;
        document.getElementById("guessesLeft").innerHTML = guesses;
        document.getElementById("guessWrong").innerHTML = wrongletter;
    }
}

// outcome of wins or losses
function outcome() {
    if (rightguess === numBlanks) {
        wins++;
        document.getElementById('win').innerHTML = wins;
        alert('You Win!');
        reset();
    } else if (guesses === 0) {
        lost++;
        document.getElementById('loss').innerHTML = lost;
        reset();
    }
}

hangMan();
// rnu and start
document.onkeyup = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < usedLetters.length; i++) {
        if (letterGuessed === usedLetters[i] && test === true) {
            var wordSplice = usedLetters.splice(i, 1);

            compareLetters(letterGuessed);
            outcome();
        }
    }
}