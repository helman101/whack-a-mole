const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    });
    let randomPosition = square[Math.floor(Math.random()*9)];
    randomPosition.classList.add('mole');

    //assing the id of the randomPsotion to hit position
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result++
            score.textContent = result;
        };
    });
});

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 750); 
};

moveMole();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;
    
    if(currentTime === 0){
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
    };
};

let timerId = setInterval(countDown, 1000);
