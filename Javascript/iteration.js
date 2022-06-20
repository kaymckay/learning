// Making an object iterable means implementing iteration protocols
// [Symbol.iterator]

// Example is Sequence object that returns a list of numbers in the range
// of (start, end) with an interval between subsequent numbers 
class Sequence {
    constructor (start = 0, end = Infinity, interval = 1) {
        this.start = start
        this.end = end
        this.interval = interval
    }
    [Symbol.iterator]() {
        let counter = 0
        let nextIndex = this.start;

        return {
            next: () => {
                console.log(counter)
                if (nextIndex <= this.end) {
                    let ret = {done: false, value: nextIndex}
                    nextIndex += this.interval
                    counter++
                    return ret
                }
                return {done: true, value: counter}
            },
            return: () => {
                console.log("Cleaning up..")
                return {done: true, value: undefined}
            }
        }
    }
}


function showIterable () {
    let evenNumbers = new Sequence(2,10,2)

    for( let num of evenNumbers) {
        console.log(num)
    }

    let oddNumbers = new Sequence(3,11, 2)
    let iterator = oddNumbers[Symbol.iterator]()
    let result = iterator.next()

    while( !result.done) {
        console.log(result.value)
        result = iterator.next()
    }

    // Show return cleanup
    for (const num of evenNumbers) {
        if(num > 6) break
        console.log(num)
    }
}

// function calls
showIterable()