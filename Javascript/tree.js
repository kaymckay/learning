// Implementing Binary Tree, Search Tree


const Node = function (data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
}
const BinaryTree = function (root = null) {
    this.root = root
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    // recurse left subtree
    inOrderTraversal(node.left)
    
    // print root
    console.log(node.data)

    //recurse right subtree
    inOrderTraversal(node.right)
}

function preOrderTraversal(node) {
    if (node === null) {
        return;
    }
    // root
    console.log(node.data)

    // recurse left subtree
    preOrderTraversal(node.left)

    // recurse right subtree
    preOrderTraversal(node.right)
}

function postOrderTraversal(node) {
    if (node === null) {
        return;
    }
    // recurse left subtree
    postOrderTraversal(node.left)

    // recurse right subtree
    postOrderTraversal(node.right)

    // root
    console.log(node.data)
}

function breadthFirstTraversal(root) {
    var h = height(root)

    for (let i = 1; i <= h; i++) {
        printLevel(root, i)
    }
}

function printLevel(root, level) {
    if (root === null) {
        return
    }
    if (level === 1) 
        console.log(root.data + " ")
    else if (level > 1) {
        printLevel(root.left, level - 1)
        printLevel(root.right, level - 1)
    }
}

function height(root) {
    if(root == null) {return 0}

    var left = height(root.left)
    var right = height(root.right)

    if (left > right) {
        return 1+left
    }else{
        return 1+right
    }
}

function callTraversals() {

    const tree = new BinaryTree(new Node(5))
    tree.root.left = new Node(7)
    tree.root.right = new Node(7)
    tree.root.left.left = new Node(1)
    tree.root.left.right = new Node(2)
    tree.root.right.left = new Node(2)
    tree.root.right.right = new Node(1)

    //      5
    //    /   \
    //   7     3
    //  / \
    // 1   2

    
    console.log("InOrder Traversal: ")
    inOrderTraversal(tree.root) 
    console.log("------") // inOrder: 1, 7, 2, 5, 3

    console.log("PreOrder Traversal: ")
    preOrderTraversal(tree.root)
    console.log("------") // preOrder:  5, 7, 1, 2, 3

    console.log("PostOrder Traversal: ") 
    postOrderTraversal(tree.root)
    console.log("------") // postOrder: 1, 2, 7, 3, 5

    console.log("Breadth First (level) Traversal: ") 
    breadthFirstTraversal(tree.root)
    console.log("------") 
}

class BST {
    constructor(root = null) {
        this.root = root
    }

    insert(value) {
        return this.insertValue(this.root, value)
    }

    insertValue(root, key) {
        // if tree is empty, add new node
        if (root === null) {
            root = new Node(key)
            return root
        }
    
        // if less than root, set left node, else set right
        if (root.data < key) {
            root.right = this.insertValue(root.right, key)
        }else if(root.data > key){
            root.left = this.insertValue(root.left, key)
        }
    
        // return root
        return root
    }


    search(key) {
        return this.searchValue(this.root, key)     
    }

    searchValue(root, key) {
        if (root === null || root.data === key) {
            return root
        }
    
        if (root.data < key) {
            return this.searchValue(root.right, key)
        }
    
        return this.searchValue(root.left, key)
    }

    delete(key) {
        this.root = this.deleteKey(this.root, key)
    }

    deleteKey(root, key) {
        // trees empty
        if (root === null) {
            return root
        }

        // recurse down tree to find key
        if (root.data < key) {
            root.right = this.deleteKey(root.right, key)
        } else if (root.data > key) {
            root.left = this.deleteKey(root.left, key)
        } else {
            // node with only one child or no child
            if (root.left === null) {
                return root.right
            }else if (root.right === null) {
                return root.left
            }
            // 2 children

            // find smallest value on right side of tree to replace root
            root.data = minValue(root.right)

            // then remove that node from where it used to be
            root.right = this.deleteKey(root.right, root.key)
        }

        return root
    }
}

function minValue(root) {
    let min = root.data

    while (root.left !== null) {
        min = root.left.data
        root = root.left
    }
    return min
}

function basicBST () {
    const bst = new BST(new Node(30))
    bst.insert(50)
    bst.insert(15)
    bst.insert(20)
    bst.insert(10)
    bst.insert(40)
    bst.insert(60)

    // inorder print
    inOrderTraversal(bst.root)

    // search
    console.log(bst.search(10)) // Node { data: 10, left: null, right: null }
    console.log(bst.search(35)) // null

    bst.delete(10)
    inOrderTraversal(bst.root)
}



// function calls
callTraversals()
//basicBST()