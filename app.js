const cards = [
    {
        name : 'amphoras',
        img : 'images/amphoras.png'
    },
    {
        name : 'caterpy',
        img : 'images/caterpy.png'
    },
    {
        name : 'charmander',
        img : 'images/charmander.png'
    },
    {
        name : 'dragonite',
        img : 'images/dragonite.png'
    },
    {
        name : 'gengar',
        img : 'images/gengar.png'
    },
    {
        name : 'jigglypuff',
        img : 'images/jigglypuff.png'
    },
    {
        name : 'mewtwo',
        img : 'images/mewtwo.png'
    },
    {
        name : 'piblup',
        img : 'images/piblup.png'
    },
    {
        name : 'pikachu',
        img : 'images/pikachu.png'
    },
    {
        name : 'snorlax',
        img : 'images/snorlax.png'
    },
    {
        name : 'squirtle',
        img : 'images/squirtle.png'
    },
    {
        name : 'umbreon',
        img : 'images/umbreon.png'
    },
    {
        name : 'amphoras',
        img : 'images/amphoras.png'
    },
    {
        name : 'caterpy',
        img : 'images/caterpy.png'
    },
    {
        name : 'charmander',
        img : 'images/charmander.png'
    },
    {
        name : 'dragonite',
        img : 'images/dragonite.png'
    },
    {
        name : 'gengar',
        img : 'images/gengar.png'
    },
    {
        name : 'jigglypuff',
        img : 'images/jigglypuff.png'
    },
    {
        name : 'mewtwo',
        img : 'images/mewtwo.png'
    },
    {
        name : 'piblup',
        img : 'images/piblup.png'
    },
    {
        name : 'pikachu',
        img : 'images/pikachu.png'
    },
    {
        name : 'snorlax',
        img : 'images/snorlax.png'
    },
    {
        name : 'squirtle',
        img : 'images/squirtle.png'
    },
    {
        name : 'umbreon',
        img : 'images/umbreon.png'
    }
]

//Randomize the cards array
cards.sort(() => 0.5 - Math.random());

//UI Variables
const gridDisplay = document.getElementById('game-grid');

//Variables
let selectedCards = [];
let openCards = [];
const result = document.querySelector('.result');

createBoard();

function createBoard() {
    for(let i=0; i<24; i++) {
        const grid = document.createElement('img');
        grid.className = "image";
        grid.setAttribute('src', 'images/back.png');
        grid.setAttribute('index', i);
        grid.addEventListener('click', cardSelected);
        gridDisplay.appendChild(grid);
    }
}

function cardSelected() {
    const index = this.getAttribute('index');
    this.setAttribute('src', cards[index].img);
    openCards.push(this);

    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const card1 = openCards[0];
    const card2 = openCards[1];

    if(card1.getAttribute('index') == card2.getAttribute('index')) {
        alert("Please select another card");
        card1.setAttribute('src', 'images/back.png');
    }

    else if(cards[card1.getAttribute('index')].name == cards[card2.getAttribute('index')].name) {
        selectedCards.push(openCards);
        card1.setAttribute('src', 'images/blank.png');
        card2.setAttribute('src', 'images/blank.png');
        card1.removeEventListener('click', cardSelected);
        card2.removeEventListener('click', cardSelected);
        result.textContent = selectedCards.length;
    }

    else {
        card1.setAttribute('src', 'images/back.png');
        card2.setAttribute('src', 'images/back.png');
    }

    if(selectedCards.length == 12) {
        alert('You Won!');
        resetGame();
    }

    openCards = [];
}

function resetGame() {
    selectedCards = [];
    result.textContent = '0';
    gridDisplay.innerHTML = "";
    cards.sort(() => 0.5 - Math.random());
    createBoard();
}