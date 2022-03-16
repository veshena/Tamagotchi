// console.log("Veshena")

// Make a class for my tamagotchi game then use the constructor method to instantiate it. Then put in (name) after constructor becausee that's all I want the user to control.... Use ' this. ' to display the : hunger, sleepiness, boredom and age, and start everything at 1 because it's a 1-10 scale.
class Sheen {
    constructor(name) {
        this.name = name
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
        // this.intHunger = null

    }
    // Getting the buttons to work so when i click it the specific events should go down. Make 3 mehtods feedme, sleepytime amd yayplay  and if they cross 10 the pet should die.
    feedMe() {
        this.hunger = this.hunger - 3
    }
    sleepyTime() {
        this.sleepiness = this.sleepiness - 4
    }
    yayPlay() {
        this.boredom = this.boredom - 2
    }
    play() {
        this.boredom += 2
    }
    hungry() {
        this.hunger += 3
    }
    sleep() {
        this.sleepiness += 4
    }
    grow() {
        this.age += 1
    }
}

// Select buttons using document.querySelector to select the buttons I need to function
const startButton = document.querySelector("#startButton")
// console.log(startButton)
const restartButton = document.querySelector("#restartButton")
// console.log(restartButton)
const feedButton = document.querySelector("#feed")
const playButton = document.querySelector("#play")
const sleepButton = document.querySelector("#sleep")

// Getting the tags to get the display to work
const feedDisplay = document.querySelector(`#hunger`)
const playDisplay = document.querySelector(`#boredom`)
const sleepDisplay = document.querySelector(`#sleepiness`)
const ageDisplay = document.querySelector(`#age`)


// Time to set up the game by making a game object and call it game, use strings so it remains empty that way for every game they must be able to insert a name.
const game = {
    sheenName: "",

    // instantiate my tamagotchi imma name it sheen and set it with an empty string until im finish creating the object then the value of tamagotchi will be where the string is.
    vee: "",

    statusCheck() {
        if (this.vee.hunger >= 10 || this.vee.sleepiness >= 10 || this.vee.boredom >= 10) {
            // console.log(sheenAging)
            // this.sheen.intHunger = clearInterval()
            this.veePlay = clearInterval()
            clearInterval(this.veeAging)
            clearInterval(this.veeHungry)
            clearInterval(this.veePlay)
            clearInterval(this.veeSleepy)
        }
    },


    // Im using prompt by making 2 methods. One to set the name and one to start the game. In set name that's where I'll be asking the user name, create the game and update the name to display whatever the user puts
    setName() {
        this.veeName = prompt("WASSUPPPPPPP!!!", "Add Your Name")
        // Use document.querySelector to selectthe div in order to input name
        const newName = document.querySelector("#cub-name p")
        console.log(newName)
        // Change the inner text using ${}
        newName.innerText = (`Name: ${this.veeName}`)
    },
    // In here i want to set the name saving it to the variable 
    startGame() {
        this.setName()
        this.vee = new Sheen(this.veeName)
        console.log(this.veeName)
        // set timers
        this.gameOver()
        this.veeAging()
        this.veeSleepy()
        this.veePlay()
        this.veeHungry()
    },



    // Make the gameover to kick in once i hit 10 and add the restart function. Set the timer to every 3 seconds and also set it to change on display
    veeAging() {
        const intervalID = setInterval(() => {
            // console.log("I'm getting old")
            if (this.vee.age < 10) {
                this.statusCheck()
                this.vee.grow()
            }
            else if (this.vee.age >= 10) {
                this.statusCheck()
            }
            }, 2000)
    },

    veeSleepy() {
        const intervalID = setInterval(() => {
            // console.log("I'm Hungry")
            if (this.vee.sleepiness < 10) {
                this.statusCheck()
                this.vee.sleep()
            }
            else if (this.vee.sleepiness >= 10) {
                this.statusCheck()
            }
        }, 4000)
    },

    veeHungry() {
        const intervalID = this.intHungry = setInterval(() => {
            // console.log("I'm Hungry")
            if (this.vee.hunger < 10) {
                this.statusCheck()
                this.vee.hungry()
            }
            else if (this.vee.hunger >= 10) {
                this.statusCheck()
            }
            this.updateDisplay()
        }, 3000)
    },

    veePlay() {
        const intervalID = setInterval(() => {
            // console.log("I wanna play")
            if (this.vee.boredom < 10) {
                this.statusCheck()
                this.vee.play()
            }
            else if (this.vee.boredom >= 10) {
                this.statusCheck()
            }
        }, 4000)
    },
    updateDisplay() {
        feedDisplay.innerText = (`Hungry: ${this.vee.hunger}`)
        sleepDisplay.innerText = (`Sleepy: ${this.vee.sleepiness}`)
        ageDisplay.innerText = (`Age: ${this.vee.age}`)
        playDisplay.innerText = (`Play: ${this.vee.boredom}`)
    },


    // To end the game im seeting it where any on my metrics become greater than 10 the game should end. And i set the age to 50 First i use a if statement
    // intervalID: null,
    gameOver() {
        this.intervalID = setInterval(() => {
            // console.log("game over")
            if (this.vee.hunger >= 10) {
                document.getElementById("walkin-pic").src = "./images/oh-no.gif"
                this.stopGame()
            }
            else if (this.vee.sleepiness >= 10) {
                document.getElementById("walkin-pic").src = "./images/oh-no.gif"
            }
            else if (this.vee.age >= 50) {
                document.getElementById("walkin-pic").src = "./images/oh-no.gif"
                alert(`${this.vee.name} lived a very happy life 😇 ...`)
            }
            else if (this.vee.boredom >= 10) {
                document.getElementById("walkin-pic").src = "./images/oh-no.gif"
            }
        }, 1000)
    },
    stopGame() {
        console.log(this)
        // clearInterval(this.intervalID())
    }
}


// Add event listener to my start button
startButton.addEventListener("click", (event) => {
    // console.log("click")
    game.startGame()
})

// Add event listener to my restart button
restartButton.addEventListener("click", (event) => {
    //    console.log("click click")
    restartGame()
    console.log(game.vee)
})

// Add event listener to my feed button
feedButton.addEventListener("click", (event) => {
    // console.log("click click")
    game.vee.feedMe()
    document.getElementById("walkin-pic").src = "./images/eating.gif"
    // console.log(game.vee)
})

// Add event listener to my play buton
playButton.addEventListener("click", (event) => {
    // console.log("click click")
    game.vee.yayPlay()
    document.getElementById("walkin-pic").src = "./images/playin.gif"
    // console.log(game.vee)
})

// Add event listener to my sleep button
sleepButton.addEventListener("click", (event) => {
    // console.log("click click")
    game.vee.sleepyTime()
    document.getElementById("walkin-pic").src = "./images/sleepy.gif"
    // console.log(game.vee)
})


// // Restart
let restartGame = function () {
    // Instead of doing this. 
    game.vee.hunger = 0
    game.vee.sleepiness = 0
    game.vee.boredom = 0
    game.vee.age = 0
    return this;
}
// console.log(restartGame)
restartGame()
