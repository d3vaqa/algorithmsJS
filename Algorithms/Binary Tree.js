// Node class to represent individual nodes in the binary tree.
class Node {
    constructor(data) {
        this.data = data;       // The value contained in the node.
        this.left = null;      // Pointer to the left child node.
        this.right = null;     // Pointer to the right child node.
    }
}

// BinaryTree class to represent the binary tree structure.
class BinaryTree {
    constructor() {
        this.root = null;  // The starting point of the tree.
    }

    // Function to insert a new value into the tree.
    // If the tree is empty, this value becomes the root.
    // Otherwise, the tree is traversed to find the correct insertion spot.
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    // Recursive helper function to determine where the new node should be inserted.
    _insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Function to return values from the tree using in-order traversal.
    inOrder() {
        const result = [];
        this._inOrderHelper(this.root, result);
        return result;
    }

    // Recursive helper function to traverse the tree in-order.
    _inOrderHelper(node, result) {
        if (node !== null) {
            this._inOrderHelper(node.left, result);
            result.push(node.data);
            this._inOrderHelper(node.right, result);
        }
    }

    // Function to search nodes in the tree based on a given criterion.
    search(criteriaFn) {
        const result = []; //defining an empty array to store the search result inside
        // Use the helper function to recursively traverse the tree and find nodes that match the criteria.
        // The helper function will populate the result array with node values that meet the criteria.
        this._searchHelper(this.root, criteriaFn, result);
        return result.length === 0 ? "Not found" : result; // if the result was 0 return not found message else return the result
    }

    // Recursive helper function to traverse the tree and find nodes matching the criteria.
    _searchHelper(node, criteriaFn, result) {
        if (node !== null) {
            if (criteriaFn(node.data)) {
                result.push(node.data);
            }
            this._searchHelper(node.left, criteriaFn, result);
            this._searchHelper(node.right, criteriaFn, result);
        }
    }
}

// Testing the binary tree functionality.

// Create a binary tree object and insert some sample data.
const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

// Display the tree in-order and verify the result.
const displayedTree = tree.inOrder();
console.log("In-Order traversal:", displayedTree); 

if (JSON.stringify(displayedTree) === JSON.stringify([20, 30, 40, 50, 60, 70, 80])) {
    console.log("The tree display is verified and correct.");
} else {
    console.log("The tree display is incorrect.");
}

// Search for nodes in the tree that match a certain criterion and verify the result.
const searchCriteria = value => value > 60; // searching for nodes with values greater than 60
const searchResults = tree.search(searchCriteria);
console.log("Nodes with values > 60:", searchResults); 

if (JSON.stringify(searchResults) === JSON.stringify([70, 80])) {
    console.log("The search result is verified and correct.");
} else {
    console.log("The search result is incorrect.");
}

const searchCriteriaNone = value => value > 100; // searching for nodes with the value greater than 100
const searchResultsNone = tree.search(searchCriteriaNone);
console.log("Nodes with values > 100:", searchResultsNone);

if (searchResultsNone === "Not found") {
    console.log("The search result is verified and correct. No nodes match the criteria.");
} else {
    console.log("The search result is incorrect.");
}
