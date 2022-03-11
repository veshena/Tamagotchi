// console.log("Veshena")

// Make a class for my tamagotchi game then use the constructor method to instantiate it. Then put in (name) after constructor becausee that's all I want the user to control.... Use ' this. ' to display the : hunger, sleepiness, boredom and age, and start everything at 1 because it's a 1-10 scale.
class Sheen {
    constructor(name) {
        this.name = name
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
        this.intHunger = null

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
const startButton = document.querySelector("#start")
// console.log(startButton)
const restartButton = document.querySelector("#restart")
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
    sheen: "",

    statusCheck() {
        if (this.sheen.hunger >= 10 || this.sheen.sleepiness >= 10 || this.sheen.boredom >= 10) {
            // console.log(sheenAging)
            // this.sheen.intHunger = clearInterval()
            this.sheenPlay = clearInterval()
            clearInterval(this.sheenAging)
            clearInterval(this.sheenHungry)
            clearInterval(this.sheenPlay)
            clearInterval(this.sheenSleepy)
        }
    },


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
        // set timers
        this.gameOver()
        this.sheenAging()
        this.sheenSleepy()
        this.sheenPlay()
        this.sheenHungry()
    },



    // Make the gameover to kick in once i hit 10 and add the restart function. Set the timer to every 3 seconds and also set it to change on display
    sheenAging() {
        const intervalID = setInterval(() => {
            // console.log("I'm getting old")
            this.sheen.grow()
        }, 2000)
    },

    sheenSleepy() {
        const intervalID = setInterval(() => {
            // console.log("I'm Hungry")
            if (this.sheen.sleepiness < 10) {
                this.statusCheck()
                this.sheen.sleep()
            }
            else if (this.sheen.sleepiness >= 10) {
                this.statusCheck()
            }
        }, 4000)
    },

    sheenHungry() {
        const intervalID = this.intHunger = setInterval(() => {
            // console.log("I'm Hungry")
            this.sheen.hungry()
            this.updateDisplay()
        }, 3000)
    },

    sheenPlay() {
        const intervalID = setInterval(() => {
            // console.log("I wanna play")
            this.sheen.play()
        }, 4000)
    },
    updateDisplay() {
        feedDisplay.innerText = (`Hungry: ${this.sheen.hunger}`)
        sleepDisplay.innerText = (`Sleepy: ${this.sheen.sleepiness}`)
        ageDisplay.innerText = (`Age: ${this.sheen.age}`)
        playDisplay.innerText = (`Play: ${this.sheen.boredom}`)
    },


    // To end the game im seeting it where any on my metrics become greater than 10 the game should end. And i set the age to 50 First i use a if statement
    intervalID: null,
    gameOver() {
        this.intervalID = setInterval(() => {
            // console.log("game over")
            if (this.sheen.hunger >= 10) {
                document.getElementById("walkin-pic").src = "./images/oh-no.gif"
                this.stopGame()
            }
            else if (this.sheen.sleepiness >= 10) {
                document.getElementById("walkin-pic").src = "./images/oh-no.gif"
                clearInterval(intervalID)
            }
            else if (this.sheen.age >= 50) {
                document.getElementById("walkin-pic").src = "./images/oh-no.gif"
                alert(`${this.sheen.name} lived a very happy life 😇 ...`)
                clearInterval(intervalID)
            }
            else if (this.sheen.boredom >= 10) {
                document.getElementById("walkin-pic").src = "./images/oh-no.gif"
                clearInterval(intervalID)
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
    // console.log('click')
    game.startGame()
})

// Add event listener to my restart button
restartButton.addEventListener("click", (event) => {
    //    console.log("click click")
    game.restartGame()
})

// Add event listener to my feed button
feedButton.addEventListener("click", (event) => {
    // console.log("click click")
    game.sheen.feedMe()
    document.getElementById("walkin-pic").src = "./images/eating.gif"
    // console.log(game.sheen)
})

// Add event listener to my play buton
playButton.addEventListener("click", (event) => {
    // console.log("click click")
    game.sheen.yayPlay()
    document.getElementById("walkin-pic").src = "./images/playin.gif"
    // console.log(game.sheen)
})

// Add event listener to my sleep button
sleepButton.addEventListener("click", (event) => {
    // console.log("click click")
    game.sheen.sleepyTime()
    document.getElementById("walkin-pic").src = "./images/sleepy.gif"
    // console.log(game.sheen)
})


// Restart
function restartGame() {
    hunger = 1
    sleepiness = 1
    boredom = 1
    hunger.innerText = "Hunger: " + hunger;
    sleepiness.innerText = "Hunger: " + sleepiness;
    boredom.innerText = "Hunger: " + boredom;
    restartGame() 
}
// restartGame() {
//     this.hunger = 1
//     this.sleepiness = 1
//     this.boredom = 1
//     this.hunger.innerText = "Hunger: " + hunger;
//     this.sleepiness.innerText = "Hunger: " + sleepiness;
//     this.boredom.innerText = "Hunger: " + boredom;
//     restartGame() 
// }