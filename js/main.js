// console.log("Veshena")

// Make a class for my tamagotchi game then use the constructor method to instantiate it. Then put in (name) after constructor becausee that's all I want the user to control.... Use ' this. ' to display the : hunger, sleepiness, boredom and age, and start everything at 1 because it's a 1-10 scale.
class Sheen {
    constructor(name) {
        this.name = name
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 1
    }
}

// Select buttons using document.querySelector to select the buttons I need to function
const startButton = document.querySelector("#start")
console.log(startButton)
const restartButton = document.querySelector("#restart")
console.log(restartButton)
const feedButton = document.querySelector("#feed")
const playButton = document.querySelector("#play")
const sleepButton = document.querySelector("#sleep")

// Time to set up the game by making a game object and call it game, use strings so it remains empty that way for every game they must be able to insert a name.
const game = {
    sheenName: "",

// instantiate my tamagotchi imma name it sheen and set it with an empty string until im finish creating the object then the value of tamagotchi will be where the string is.
    sheen: "",

// Im using prompt by making 2 methods. One to set the name and one to start the game. In set name that's where I'll be asking the user name, create the game and update the name to display whatever the user puts
    setName() {
    this.sheenName = prompt("WASSUPPPPPPP!!!", "Add Your Name")
    },
    startGame() {
    this.setName()
    }
}

// Add event listener for my game
    startButton.addEventListener("click", (event) => {
        game.startGame()
})
