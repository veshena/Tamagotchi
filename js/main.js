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
// Getting the buttons to work so when i click it the specific events should go down. Make 3 mehtods feedme, sleepytime amd yayplay  and if they cross 10 the pet should die.
    feedMe() {
        this.hunger = this.hunger - 2
    }
    sleepyTime() {
        this.sleepiness = this.sleepiness - 1
    }
    yayPlay() {
        this.boredom = this.boredom - 2
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
// Use document.querySelector to selectthe div in order to input name
    const newName = document.querySelector("#cub-name p")
    console.log(newName)
// Change the inner text using ${}
    newName.innerText = (`Name: ${this.sheenName}`)
},
// In here i want to set the name saving it to the variable 
    startGame() {
    this.setName()
    this.sheen = new Sheen(this.sheenName)
    console.log(this.sheenName)
    }
}





// Add event listener to my start button
startButton.addEventListener("click", (event) => {
    game.startGame()
})
// Add event listener to my restart button
restartButton.addEventListener("click", (event) => {
    game.restartButton()
})
// Add event listener to my feed button
feedButton.addEventListener("click", (event) => {
    game.feedButton()
})
// Add event listener to my play buton
playButton.addEventListener("click", (event) => {
    game.playButton()
})
// Add event listener to my sleep button
sleepButton.addEventListener("click", (event) =>{
    game.sleepButton()
})