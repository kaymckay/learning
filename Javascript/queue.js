// Creating a queue using an object
class Queue {
    constructor() {
        this.elements = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.elements[this.tail] = element
        this.tail++
    }

    dequeue() {
        const elem = this.elements[this.head]
        delete this.elements[this.head]
        this.head++
        return elem
    }

    peek() {
        return this.elements[this.head]
    }

    get length () {
        return this.tail - this.head
    }

    get isEmpty () {
        return this.length === 0
    }
}

function simpleQueue() {
    let queue = new Queue()

    for (let i = 0; i < 7; i++) {
        queue.enqueue(i)
    }

    console.log(queue.peek())  // 0
    console.log(queue.length)  // 7

    while(!queue.isEmpty) {
        console.log(queue.dequeue())
    }
}

// Function object queue
const FQueue = function() {
    this.elements = {}
    this.head = 0
    this.tail = 0
}

FQueue.prototype.enqueue = function(element) {
    this.elements[this.tail] = element
    this.tail++
}

FQueue.prototype.dequeue = function () {
    const elem = this.elements[this.head]
    delete this.elements[this.head]
    this.head++
    return elem
}

FQueue.prototype.peek = function () {
    return this.elements[this.head]
}

Object.defineProperty(FQueue.prototype, 'length', {
    get: function () {
        return this.tail - this.head
    }
})

Object.defineProperty(FQueue.prototype, 'isEmpty', {
    get: function () {
        return this.length === 0
    }
})

function functionQueue() {
    let queue = new FQueue()

    for (let i = 0; i < 7; i++) {
        queue.enqueue(i)
    }

    console.log("queue peek: ", queue.peek())  // 0
    console.log("queue length: ", queue.length)  // 7

    while(!queue.isEmpty) {
        console.log(queue.dequeue())
    }
}

// Command calls
// simpleQueue()
functionQueue()