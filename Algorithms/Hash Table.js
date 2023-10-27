//      HASH TABLE      //
class HashTable {
    // Constructor method to initialize the hash table
    constructor() {
        // Create an empty object to store key-value pairs
        this.table = {};
    }

    // Hash function to determine the key for storage
    hash(key) {
        // Convert the first character of the name to lowercase and use it as a hash key
        return key[0].toLowerCase();
    }

    // Method to insert a name and phone number into the hash table
    set(name, phoneNumber) {
        // Get the appropriate hash key for the given name
        const key = this.hash(name);

        // If this key doesn't exist in the table yet, initialize an empty array for it
        if (!this.table[key]) {
            this.table[key] = [];
        }

        // Push the name and phone number as an object to the array associated with the hash key
        this.table[key].push({ name, phoneNumber });

        // Sort the entries under this hash key alphabetically by name
        this.table[key].sort((a, b) => a.name.localeCompare(b.name));
    }

    // Method to display the entire hash table
    display() {
        // Extract keys and sort them in alphabetical order
        const sortedKeys = Object.keys(this.table).sort();

        // Iterate over each sorted key and print its values
        for (let key of sortedKeys) {
            console.log(key.toUpperCase(), ':', this.table[key]);
        }
    }

    // Method to search for names based on criteria (a starting character in this case)
    search(criteria) {
        // Find the appropriate hash key using the criteria
        const key = this.hash(criteria);

        // If the key does not exist in the table, return an empty array
        if (!this.table[key]) {
            return "Not Found";
        }

        // Return the entries under the hash key that start with the given criteria
        return this.table[key].filter(entry => entry.name.startsWith(criteria));
    }
}

// Sample dataset for testing
const sampleData = [
    { name: 'Lucie', phoneNumber: '0312 897 654' },
    { name: 'Nancy', phoneNumber: '0436 123 987' },
    { name: 'Jamie', phoneNumber: '0412 345 789' },
    { name: 'Davis', phoneNumber: '0326 654 321' },
    { name: 'Marissa', phoneNumber: '0415 888 999' },
    { name: 'Jack', phoneNumber: '0478 852 963' },
    { name: 'Larry', phoneNumber: '0385 785 126' },
];
// Instantiate a new HashTable object
const phonebook = new HashTable();
// Populate the hash table with sample data
sampleData.forEach(data => {
    phonebook.set(data.name, data.phoneNumber);
});
// Display the contents of the hash table
console.log('Displaying Phonebook:');
phonebook.display();

// Search for names starting with 'L' and display results
const searchResult = phonebook.search('L');
console.log('\nSearch Results for names starting with "L":');
console.log(searchResult);

// Search for names starting with 'Z' and display results (expecting no results)
const searchResultZ = phonebook.search('Z');
console.log('\nSearch Results for names starting with "Z":');
console.log(searchResultZ);
