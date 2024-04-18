'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        // console.log(guess);
        // console.log(typeof guess);

        //when there is no input
        if (!guess) {
            document.querySelector('.message').textContent =
                'No number!';
        }

        //when player wins
        else if (guess == secretnumber) {
            document.querySelector('.message').
                textContent = 'Correct Number...!';
            document.querySelector('h1').textContent = 'You won the Game';
            document.querySelector('.number').textContent = secretnumber;
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';

            //highscore logic
            if (score > highscore) {
                highscore = highscore + score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }

        //when user guess too high
        else if (guess > secretnumber) {
            if (score > 0) {
                document.querySelector('.message').textContent =
                    'Too High...';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "you lost the game";
                document.querySelector('body').style.backgroundColor = 'red'
            }

        }

        //when user guess too low
        else if (guess < secretnumber) {

            if (score > 0) {
                document.querySelector('.message').textContent =
                    'Too Loww...';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "you lost the game";
                document.querySelector('body').style.backgroundColor = 'red'
                document.querySelector('.number').textContent = secretnumber;
            }
        }
    });

document.querySelector('.again').
    addEventListener('click', function () {
        secretnumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.message').textContent =
            'Start Guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?'
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('h1').textContent = 'Guess My Number!';
        document.querySelector('.number').style.width = '15rem';
    });