// Implementing using JS Map


function basicMap() {
    var fruits = new Map()
    // set function
    fruits.set('🍎', "Apple")
    fruits.set('🍋', "Mango")
    console.log(fruits)         // Map { '🍎' => 'Apple', '🍋': 'Mango' }
    
    // size property
    console.log(fruits.size)    // 2

    // this is an object property, not correct way to add to map
    fruits['🍇'] = "Grapes"
    // fruits.set('🍇', "Grapes")

    // get function
    console.log(fruits.get('🍇'))       // "Grapes"
    console.log(fruits.get('🍊'))       // undefined
    
    // delete function
    console.log(fruits.delete('🍊'))    // false
    console.log(fruits.delete('🍇'))    // true

    // has function
    console.log(fruits.has('🍊'))    // false
    console.log(fruits.has('🍋'))    // true
    console.log(fruits.has('🍇'))    // false

    // keys returns new iterator that contains the keys in insertion order
    console.log(fruits.keys())    // Map Iterator] { '🍎', '🍋' }

    // values returns new iterator that contains the values in insertion order
    console.log(fruits.values())  // Map Iterator] { 'Apple', 'Mango' }

    // entries returns an iterator which has an array that contains the [key, value] pairs in insertion order
    console.log(fruits.entries()) // [Map Entries] { [ '🍎', 'Apple' ], [ '🍋', 'Mango' ] }

    // clears all elements adding by using the set() function
    console.log(fruits)     // Map { '🍎' => 'Apple', '🍋' => 'Mango', '🍇': 'Grapes' }
    fruits.clear()
    console.log(fruits)     // Map { '🍇': 'Grapes' }
}

function iterateMap() {
    var info = new Map([['first name', 'Kayla'],['last name', 'McKay'], ['middle name', 'Marie']])

    for (var [key, val] of info) {
        console.log( "key: ", key, " val: ", val)
    }

    // Using entries
    for (var [key, val] of info.entries()) {
        console.log( "key: ", key, " val: ", val)
    }

    // Using keys
    for (var key of info.keys()) {
        console.log( "key: ", key, " val: ", info.get(key))
    }

    // Using values
    for (var val of info.values()) {
        console.log("val: ", val)
    }

    // using forEach
    info.forEach((val, key) => {console.log(key, ": ", val )})
}

function mapAndArray() {
    const kvArray = [['key1', 'val1'], ['key2', 'val2']]

    // Array to Map
    const myMap = new Map(kvArray)
    console.log(myMap.get('key1'))   // 'val1'

    // Map to Array
    console.log(Array.from(myMap))   // [ [ 'key1', 'val1' ], [ 'key2', 'val2' ] ]
    console.log([...myMap])          // [ [ 'key1', 'val1' ], [ 'key2', 'val2' ] ]

    // Convert just keys to array
    console.log(Array.from(myMap.keys()))   // [ 'key1', 'key2' ]

    // Convert just values to array
    console.log(Array.from(myMap.values())) // [ 'val1', 'val2' ]
}

function mergeMaps() {
    const firstMap = new Map([
        ['1', 'one'],
        ['2', 'two'],
        ['3', 'three']
    ])

    const secondMap = new Map([
        ['1', 'uno'],
        ['2', 'dos'],
    ])

    // Merging maps with an array, the last repeated key wins
    const merged = new Map([...firstMap, ...secondMap], ['4', 'four'])
    console.log(merged)
}

function weakMap() {
    
}


// function calls
// basicMap()
// iterateMap()
// mapAndArray()
// mergeMaps()
weakMap()