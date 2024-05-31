const gridDisplay = document.querySelector('#grid')
const mole = document.querySelector('.mole')
const time = document.querySelector('#time')
const score = document.querySelector('#score')
// const start = document.querySelector('#start')
let hitPosition 
let result = 0
let currentTime = 60
let timerId = null 

function creatboard()
{
    for(i = 0; i< 9; i++)
    {
        const square = document.createElement('div')
        square.setAttribute('id', i)
        square.className = 'square'
        gridDisplay.appendChild(square)
        
    }
}
creatboard();  

const squares = document.querySelectorAll('.square')

function randomSquare()
{
    squares.forEach((square) =>{
        square.classList.remove('mole')
    })

    let randomposition = squares[Math.floor(Math.random()*9)]
    randomposition.classList.add('mole')
    hitPosition = randomposition.id 
}


squares.forEach( square => {
    square.addEventListener('mousedown' , () => {
        if (square.id === hitPosition ){
            result++
            console.log(result , 'clicked')
            score.textContent = result 
            hitPosition = null
        }
    })
} )


function moveMole()
{
    timerId = setInterval(randomSquare,1000)
}
moveMole()

function countDown()
{
    currentTime--
    time.textContent = currentTime
    if(currentTime == 0)
    {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown,1000)
// start.addEventListener('click' , moveMole);

