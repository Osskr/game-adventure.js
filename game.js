const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('options-buttons')

let state = {

}


function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {

}

function selectOption() {

}

const textNodes = [{
        id: 1,
        text: 'Select your destiny',

        options: [{
                text: 'Take a goo',
                setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: 'Leave the goo',
                nextText: 2
            }
        ]
    },

    {
        id: 2,
        text: 'Select your destiny',

        options: [{
                text: 'Take a goo',
                setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: 'Leave the goo',
                nextText: 2
            }
        ]
    }
]
startGame()