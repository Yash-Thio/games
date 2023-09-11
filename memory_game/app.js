const choices = [
    {
        name : 'cat',
        img: 'pictures/cat.jpg'
    },
    {
        name : 'dog',
        img : 'pictures/dog.jpg'
    },
    {
        name : 'car',
        img : 'pictures/car.jpg'
    },
    {
        name : 'bike',
        img : 'pictures/bike.jpg'
    },
    {
        name : 'pizza',
        img : 'pictures/pizza.jpg'
    },
    {
        name : 'fries',
        img : 'pictures/fries.jpg'
    },
    {
        name : 'cat',
        img: 'pictures/cat.jpg'
    },
    {
        name : 'dog',
        img : 'pictures/dog.jpg'
    },
    {
        name : 'car',
        img : 'pictures/car.jpg'
    },
    {
        name : 'bike',
        img : 'pictures/bike.jpg'
    },
    {
        name : 'pizza',
        img : 'pictures/pizza.jpg'
    },
    {
        name : 'fries',
        img : 'pictures/fries.jpg'
    }
]

let chosen = []
let chosenid = []
let score = 0
let counter = 0

choices.sort(() => 0.5 - Math.random())

const resultdisplay = document.querySelector('#result');
const gridDisplay = document.querySelector('#grid');

function creatboard(){
    for( i = 0; i < choices.length ; i++)
    {
        const card = document.createElement('img')
        card.setAttribute('src','pictures/blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flip)
        gridDisplay.appendChild(card)
    }
}
creatboard()

function check()
{
    const cards = document.querySelectorAll('img')
    console.log('checking')
    if(chosenid[0] === chosenid[1])
    {
        alert('You clicked the same card')
        cards[chosenid[0]].setAttribute('src','pictures/blank.jpg')
    }
    
    if(chosen[0] === chosen[1]  && chosenid[0] !== chosenid[1])
    {
        alert('You found a match!')
        cards[chosenid[0]].setAttribute('src','pictures/white.png')
        cards[chosenid[1]].setAttribute('src','pictures/white.png')
        cards[chosenid[0]].removeEventListener('click', flip)
        cards[chosenid[1]].removeEventListener('click', flip)
        score += 10
        counter++
    }
    else
    {
        cards[chosenid[0]].setAttribute('src','pictures/blank.jpg')
        cards[chosenid[1]].setAttribute('src','pictures/blank.jpg')
        score -= 5
        alert('sorry try again')
    }
    chosen = []
    chosenid = []
    
    if(counter == choices.length/2)
    {
        resultdisplay.innerHTML = score;
    }
    
}


function flip()
{
    const cardid = this.getAttribute('data-id')
    console.log('clicked',cardid)
    chosen.push(choices[cardid].name)
    chosenid.push(cardid)
    this.setAttribute('src',choices[cardid].img)
    if(chosen.length === 2)
    {
        setTimeout(check, 450)
    }

}