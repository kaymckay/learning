// acts as a container for the properties that are shared by all rabbits
// this is inefficient, speak code will be duplicated for every rabbit object created
// this is why we use prototype + constructor functions
let protoRabbit = {
    color: 'grey',
    speak (word) {
        console.log( `The ${this.type} rabbit says ${word}.`)
    },
}

// has type that is a killerRabbit property, derives shared properties from prototype
let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = 'assasin'
killerRabbit.speak('AHHHH')


// Rewritten using Prototype and Constructor functions
let protoRabbit2 = function (color, word, type) {
    this.color = color
    this.word = word
    this.type = type
}

protoRabbit2.prototype.getColor = function () {
    return this.color
}

protoRabbit2.prototype.speak = function () {
    console.log( `The ${this.type} rabbit says ${this.word}.`)
}

let killerRabbit2 = new protoRabbit2('grey', 'AHHHH', 'killer')
killerRabbit2.speak()

// Prototypes are of the object not the instance, but can be accessed from the instance using __proto__
console.log(protoRabbit2.prototype); // object
console.log(killerRabbit2.prototype); // undefined
console.log(killerRabbit2.__proto__); // object