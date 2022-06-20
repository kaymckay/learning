// Hash Table represented with an object
// https://www.educative.io/blog/data-strucutres-hash-table-javascript
class HashTable {
    constructor(size = 50) {
        this.values = {}
        this.length = 0
        // how many buckets to contain for hash table
        this.size = size
    }

    // Takes provided key and returns a hash calculated using arithmetic modulus
    hash(key){
        return key.toString().length % this.size
    }

    add(key, value) {
        const hashKey = this.hash(key)
        // If hash doesn't already exist in object store, save it
        if (!this.values.hasOwnProperty(hashKey)) {
            this.values[hashKey] = {}
        }
        // If the hash doesn't have the key saved, save it and increment size of hash table
        if(!this.values[hashKey].hasOwnProperty(key)) {
            this.length++
        }

        this.values[hashKey][key] = value
    }

    search(key) {
        const hashKey = this.hash(key)
        if(this.values.hasOwnProperty(hashKey) && this.values[hashKey].hasOwnProperty(key)) {
            return this.values[hashKey][key]
        }
        return null
    }
}

function basicHashTable() {
    const ht = new HashTable(6)

    ht.add("Canada", "300")
    ht.add("Germany", "100")
    ht.add("Italy", "50")

    console.log(ht.search("Italy"))
    console.log(ht.size)
    console.log(ht.length)
    console.log(ht.values)

}






// Hash Map Implementations using an Array accounting for negative hash values
const HashMap = function (size = 10) {
    this.buckets = new Array(size)
    this.size = size
}

HashMap.prototype.hash = function (key) {
    return key.toString().length % this.size
}

HashMap.prototype.search = function(key) {
    const index = this.hash(key)
    
    if (!this.buckets[index]) return null

    for (let [k,value] of this.buckets[index]) {
        if (k === key) {
            return value
        }
    } 
}

HashMap.prototype.insert = function(key, value) {
   const index = this.hash(key)

   if (!this.buckets[index]) {
       this.buckets[index] = []
   }
   
   this.buckets[index].push([key,value])
   return index
}

function basicHashMap () {
    const map = new HashMap()
   
    map.insert("bk101","Data structures algorithms")
    map.insert("bk108","Data analytics")
    map.insert("bk200","Cyber security")
    map.insert("bk259","Business Intelligence")
    map.insert("bk330","S/W Development")

    console.log(map.search("bk101"))
    console.log(map.size)
    console.log(map.buckets)

}

// function calls
basicHashMap()
// basicHashTable()
