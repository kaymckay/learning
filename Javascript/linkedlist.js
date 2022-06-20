

// Linked List
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

const NodeObj = function(data) {
    this.data = data
    this.next = null
}

const LinkedListObj = function (head = null) {
    this.head = head
}

function linkedList () {
    // Linked List using class
    let node1 = new Node(3)
    let node2 = new Node(7)
    node1.next = node2

    let list = new LinkedList(node1)
    console.log(list.head.data)
    console.log(list.head.next.data)

    // Linked List using Objects
    let node3 = new NodeObj(6)
    let node4 = new NodeObj(9)
    node3.next = node4

    let list2 = new LinkedListObj(node3)
    console.log(list2.head.data)
    console.log(list2.head.next.data)

    console.log(list)
    console.log(list2)
}

// Double Linked List
let DNode = function (data, prev = null, next = null) {
    this.data = data
    this.prev = prev
    this.next = next
}

let DoubleLinkedList = function(head = null, last = null) {
    this.head = head
    this.last = last
}


function doubleLinkedList() {

    let node1 = new DNode(22)
    let node2 = new DNode(33, node1)
    let node3 = new DNode(44, node2)
    node1.next = node2
    node2.next = node3

    let list = new DoubleLinkedList(node1, node3)

    console.log("HEAD", list.head)
    console.log("LAST", list.last)
    console.log("_________________")
    console.log(list.head.next.prev)
    console.log(list.head.data)
    console.log(list.last.data)
}


// function calls

// linkedList()
// doubleLinkedList()

// Traversing a linked list, push nodes onto an array






