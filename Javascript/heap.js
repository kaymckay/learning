class MinHeap {
    constructor() {
        this.heap = []
    }

    getMin() {
        return this.heap[0]
    }

    // heapify a subtree with the root at given index
    heapify(i) {
        let left = this.left(i)
        let right = this.right(i)
        let smallest = i

        if (left < this.heap.length && this.heap[left] < this.heap[i]) {
            smallest = left
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }

        if (smallest != i) {
            const temp = this.heap[i]
            this.heap[i] = this.heap[smallest]
            this.heap[smallest] = temp
            this.heapify(smallest)
        }
    }

    // get index of parent of node at index i
    parent(i) { return Math.floor((i-1) / 2) }

    // get index of left child of node at index i
    left(i) { return (2*i) + 1 }

    // get index of right child of node at index i
    right(i) { return (2*i) + 2 }

    insertKey(key) {
        // add to end of array
        this.heap.push(key)

        // heapify list 
        if (this.heap.length > 1) {
           for (let i = (this.heap.length/2)-1; i >= 0; i--) {
               this.heapify(i)
           }
        }
        // or
        // // fix violated heap property if needed
        // while (i != 0 && this.heap[i] < this.heap[this.parent(i)]) {
        //     const temp = this.heap[i]
        //     this.heap[i] = this.heap[this.parent(i)]
        //     this.heap[this.parent(i)] = temp
        //     i = this.parent(i)       
        // }
    }

    // assumed that newVal is smaller than heap[i]
    decreaseKey(i, newVal) {
        this.heap[i] = newVal

        // fix violated heap property if needed
        while (i != 0 && this.heap[i] < this.heap[this.parent(i)]) {
            const temp = this.heap[i]
            this.heap[i] = this.heap[this.parent(i)]
            this.heap[this.parent(i)] = temp
            i = this.parent(i)       
        }
    }

    // remove minimum element (root) from heap
    extractMin() {
        if ( this.heap.length === 0) {
            return Number.MAX_VALUE
        }

        const root = this.heap[0]
        if (this.heap.length === 1) {
            this.heap = []
            return root
        }

        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapify(0)
        return root
    }

    deleteKey(i) {
        this.decreaseKey(i, Number.MIN_VALUE)
        this.extractMin()
    }
}

function testMinHeap() {
    const h = new MinHeap()
    h.insertKey(3);
    h.insertKey(2);
    h.deleteKey(1);
    h.insertKey(15);
    h.insertKey(5);
    h.insertKey(4);
    h.insertKey(45);

    console.log( h.extractMin())
    console.log(h.getMin())
    h.decreaseKey(2, 1)
    console.log(h.getMin())

}


// function calls
testMinHeap()