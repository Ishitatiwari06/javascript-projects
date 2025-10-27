let randnum=parseInt(Math.random()*100+1)
const submit=document.querySelector('#submit')
const input=(document.querySelector('#guess'))
const guessSlot=document.querySelector('.prev')
const remaining=document.querySelector('.remain')
const lowOrHi=document.querySelector('.lowOrHi')
const p=document.createElement('p')
const result=document.querySelector('.result')
let chance=1;
let canPlay=true;
if(canPlay){
    submit.addEventListener('click',function(e){
        e.preventDefault() //so it not passed to server
        validate(input);
    })
}
function validate(guess){
    const input=parseInt(guess.value)
    if(isNaN(input)){
        alert('Plz enter valid number');
    }
    else if(input<1){
        alert('Plz enter number greater than 1');
    }
    else if(input>100){
        alert('Plz enter number less than 100');
    }
    else{
        if(chance===10){
            cleanUp(input);
            displayMessage(`Game Over! Random Number was ${randnum}`)
            endGame()
        }
        else{
            cleanUp(input)
            checkGuess(input)
        }
    }
}
function checkGuess(guess){
    if(guess===randnum){
        displayMessage(`Bravo, You Win`)
        endGame()
    }
    else if(guess<randnum){
        displayMessage(`Number is too low`)
    }
    else{
        displayMessage(`Number is too high`)
    }
}
function cleanUp(guess){
    input.value=''
    guessSlot.innerHTML+=`${guess} `
    remaining.innerHTML=`${10-chance}`
    chance++;
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h3>${message}</h3>`;
}
function endGame(){
    input.value=''
    input.setAttribute('disabled','')
    p.classList.add('button') //add class='button'
    p.innerHTML=`<h2 id='newGame'>Start New Game</h2>`
    result.appendChild(p)
    canPlay=false;
    newGame()
}
function newGame(){
    const newgame=document.querySelector('#newGame')
    newgame.addEventListener('click',function(e){
    randnum=parseInt(Math.random()*100+1)
    chance=0
    guessSlot.innerHTML=''
    lowOrHi.innerHTML=''
    remaining.innerHTML=`${10-chance}`
    input.removeAttribute('disabled')
    result.removeChild(p)
    canPlay=true
    })
}
