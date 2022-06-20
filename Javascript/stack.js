// Stacks implemented using arrays

function stackExample() {
    let stack = []

    // Adding to stack
    stack.push(1)   // [1]
    stack.push(2)   // [1, 2]
    stack.push(3)   // [1, 2, 3]
    stack.push(4)   // [1, 2, 3, 4]
    stack.push(5)   // [1, 2, 3, 4, 5]
    console.log(stack)  // prints [1, 2, 3, 4, 5]

    // Removing from stack
    console.log(stack.pop())  // 5
    console.log(stack)        // [1, 2, 3, 4]
    console.log(stack.pop())  // 4
    console.log(stack)        // [1, 2, 3]
    console.log(stack.pop())  // 3
    console.log(stack)        // [1, 2]
    console.log(stack.pop())  // 2
    console.log(stack)        // [1]
    console.log(stack.pop())  // 1
    console.log(stack)        // []
    console.log(stack.pop())  // undefined
    console.log(stack)        // []

}




// reverse a string using a stack
function reverse(str) {
    let stack = []

    for(let i = 0; i < str.length; i++){
        stack.push(str[i])
    }

    let reversed = ''
    while(stack.length > 0) {
        reversed += stack.pop()
    }

    return reversed
}


console.log(reverse("hey there"))