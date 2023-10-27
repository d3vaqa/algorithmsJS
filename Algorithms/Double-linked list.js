// Double linked list

class Node {
        // Constructor to initialize a node
    constructor(data) {
        this.data = data;      // Holds the data for the node
        this.next = null;     // Pointer to the next node
        this.prev = null;     // Pointer to the previous node
    }
}

// Definition for the doubly linked list
class DoublyLinkedList {
      // Constructor to initialize the list
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add a new node at the beginning of the list
    addAtBeginning(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Add a new node at the end
    addAtEnd(data) {
        let newNode = new Node(data); // Create a new node with the provided data
        if (!this.tail) {  //If list is empty
            this.head = newNode;
            this.tail = newNode;
        } else { // If list isn't empty
            newNode.prev = this.tail; // Point new node's next to current head
            this.tail.next = newNode; // Point current head's prev to new node
            this.tail = newNode; // Set new node as the head
        }
    }

    // Method to add a new node at a specific index
    addAtIndex(index, data) {
        if (index === 0) { // If index is 0, add at beginning
            return this.addAtBeginning(data);
        }

        let current = this.head; // Start from the head node
        let count = 0;
         // Traverse till the desired index or end of list
        while (current && count !== index) {
            current = current.next;
            count++;
        }

        if (count === index) {  // If desired index is found
            let newNode = new Node(data);
            newNode.prev = current.prev; // Update pointers for insertion
            newNode.next = current;
            current.prev.next = newNode;
            current.prev = newNode;
        } else { // If index is out of bounds
            console.error("Index out of bounds");
        }
    }

    // Delete the first node
    deleteFirst() {
        if (!this.head) {
            return;
        }

        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }

        this.head = this.head.next;
        this.head.prev = null;
    }

    // Method to delete the last node
    deleteLast() {
        if (!this.tail) {  // If list is empty
            return;
        }

        if (this.head === this.tail) {  // If only one node in list
            this.head = this.tail = null;  // Remove the only node
            return;
        }

        this.tail = this.tail.prev;  // Point tail to previous node
        this.tail.next = null;       // Update next pointer of new tail
    }

     // Method to delete a node at a specific index
     deleteAtIndex(index) {
        if (index === 0) {  // If index is 0, delete the first node
            return this.deleteFirst();
        }

        let current = this.head;  // Start from the head node
        let count = 0;
        // Traverse till the desired index or end of list
        while (current && count !== index) {
            current = current.next;
            count++;
        }

        if (count === index) {  // If desired index is found
            current.prev.next = current.next;  // Update pointers for deletion
            if (current.next) {
                current.next.prev = current.prev;
            }
        } else {  // If index is out of bounds
            console.error("Index out of bounds");
        }
    }

   // Method to update the data of a node at a specific index
   updateAtIndex(index, data) {
    let current = this.head;  // Start from the head node
    let count = 0;
    // Traverse till the desired index or end of list
    while (current && count !== index) {
        current = current.next;
        count++;
    }

    if (count === index) {  // If desired index is found
        current.data = data;  // Update the data of the node
    } else {  // If index is out of bounds
        console.error("Index out of bounds");
    }
}

 // Method to display the entire list
 display() {
    let current = this.head;  // Start from the head node
    // Traverse and print till end of list
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

    // Method to search nodes based on a given criteria function
    search(criteriaFunc) {
        let current = this.head;  // Start from the head node
        let results = [];  // To hold the search results
        // Traverse and check each node against criteria function
        while (current) {
            if (criteriaFunc(current.data)) {
                results.push(current.data);  // Add node data to results if criteria met
            }
            current = current.next;
        }
        // Return the results if there are any, or "Not found" if the results array is empty.
        return results.length ? results : "Not found";
    }
}

// Testing


// Q 2

// Sample Data
const sampleData = ['apple', 'banana', 'cherry', 'date', 'fig'];

// Create a list object with sample data
let fruitList = new DoublyLinkedList();
sampleData.forEach(fruit => fruitList.addAtEnd(fruit));

// Display the whole list
console.log("Fruit List:");
fruitList.display();





// Q3 Calling CRUD Functions

// Add a new fruit at the beginning
fruitList.addAtBeginning('grape');
console.log("\nAfter adding 'grape' at the beginning:");
fruitList.display();

// Add a new fruit at the end
fruitList.addAtEnd('honeydew');
console.log("\nAfter adding 'honeydew' at the end:");
fruitList.display();

// Add a new fruit between index 3 and 4
fruitList.addAtIndex(3, 'elderberry');
console.log("\nAfter adding 'elderberry' at index 3:");
fruitList.display();

// Delete the first fruit
fruitList.deleteFirst();
console.log("\nAfter deleting the first fruit:");
fruitList.display();

// Delete the last fruit
fruitList.deleteLast();
console.log("\nAfter deleting the last fruit:");
fruitList.display();

// Delete the fruit of index 2
fruitList.deleteAtIndex(2);
console.log("\nAfter deleting the fruit at index 2:");
fruitList.display();

// Update the fruit of index 1
fruitList.updateAtIndex(1, 'blueberry');
console.log("\nAfter updating the fruit at index 1 to 'blueberry':");
fruitList.display();


// Search for fruits containing the letter "a"
let results = fruitList.search(fruit => fruit.includes('a'));
console.log("\nFruits containing the letter 'a':");
console.log(results);



// Search for fruits containing the substring "xyz"
let noResults = fruitList.search(fruit => fruit.includes('xyz'));
console.log("\nFruits containing the substring 'xyz':");
console.log(noResults);




