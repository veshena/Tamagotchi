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
// Double check if it's working so I would be able put anything else in my new sheen.
let sheen1 = new Sheen("sheen1")
// Checking
console.log(sheen1)