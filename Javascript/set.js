// Set Object provided in ES6

function simpleSet() {
    const mySet1 = new Set()

    mySet1.add(3)               // Set {3}
          .add(5)               // Set {3, 5}
          .add(5)               // Set {3, 5}
          .add('text')          // Set {3, 5, 'text'}

    const obj = {a:1, b:2}
    mySet1.add(obj)             // Set {3, 5, 'text', { a: 1, b: 2 }}
    mySet1.add({a:1, b:2})      // obj is referencing a different object, so this is ok
    console.log(mySet1)         // Set {3, 5, 'text', { a: 1, b: 2 }, { a: 1, b: 2 }}

    // .has method
    console.log(mySet1.has(3) )                    // true
    console.log(mySet1.has(1) )                    // false
    console.log(mySet1.has('TEXT'.toLowerCase()) ) // true
    console.log(mySet1.has(obj) )                  // true

    console.log(mySet1.size)    // 5
    mySet1.delete(5)
    mySet1.has(5)               // false
    console.log(mySet1.size)     // 4

    console.log(mySet1)          // Set { 3, 'text', { a: 1, b: 2 }, { a: 1, b: 2 } }
    
    // Iterator stuff
    console.log(mySet1.keys())          // [Set Iterator] { 3, 'text', { a: 1, b: 2 }, { a: 1, b: 2 } }
    console.log(mySet1.keys().next())   // { value: 3, done: false }

    console.log(typeof(mySet1))          // object
    console.log(mySet1 instanceof Set)  // true

    // invoke callback function on each element in set
    mySet1.forEach(val => console.log(val))

}

function weakSet() {
    let computer = {type: 'laptop'}
    let server = {type: 'server'}
    let equipment = new WeakSet([computer, server])

    if (equipment.has(server)) {
        console.log('we have a server')
    }

}

function iterateSet() {
    let mySet2 = new Set([1,12,3,14])

    // iterate over items in set
    for (let item of mySet2) {
        console.log(item)
    }

    // logs items
    for (let item of mySet2.keys()) {
        console.log(item)
    }

    // logs items
    for (let item of mySet2.values()) {
        console.log(item)
    }

    // logs items,  keys and values in a Set are identical
    for( let [key, value] of mySet2.entries()){
        console.log(key, value)
        console.log(key === value)
    }

    // iterating set entries with forEach()
    console.log("for each prints")
    mySet2.forEach(function(value) {console.log(value)})
    mySet2.forEach(val => {console.log(val)})

    // convert Set object to Array object
    const myArr = Array.from(mySet2)

    // converting between Set and Array
    const mySet3 = new Set([1,2,3,4])
    console.log(mySet3.size)
    console.log(mySet3)
    console.log([...mySet3])

    // intersection aka finding same values between sets
    const intersection = new Set([...mySet3].filter(x => mySet2.has(x)))
    console.log("intersection: ", intersection)

    // finding difference
    const difference = new Set([...mySet3].filter(x => !mySet2.has(x)))
    console.log("difference: ", difference)






}


// Function calls
// simpleSet()
// weakSet()
iterateSet()
