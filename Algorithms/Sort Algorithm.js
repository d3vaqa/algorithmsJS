// Define a function 'mergeSort' that takes an array 'arr' as a parameter
function mergeSort(arr) {
    // Base case: If the array has one or zero elements, return the array as it is
    if (arr.length <= 1) return arr;

    // Find the middle index of the array
    let mid = Math.floor(arr.length / 2);
    
    // Recursively sort the left half of the array
    let left = mergeSort(arr.slice(0, mid));
    
    // Recursively sort the right half of the array
    let right = mergeSort(arr.slice(mid));

    // Merge the sorted left and right halves and return the result
    return merge(left, right);
}

// Define a function 'merge' that takes two sorted arrays 'left' and 'right' as parameters
function merge(left, right) {
    // Initialize an empty array to store the merged result
    let result = [];
    
    // Initialize two pointers, i for left array and j for right array
    let i = 0;
    let j = 0;

    // Loop until one of the arrays is fully traversed
    while (i < left.length && j < right.length) {
        // If the current element of the left array is smaller than the current element of the right array
        if (left[i] < right[j]) {
            // Add the left element to the result array
            result.push(left[i]);
            
            // Move the pointer i to the next element in the left array
            i++;
        } else {
            // Add the right element to the result array
            result.push(right[j]);
            
            // Move the pointer j to the next element in the right array
            j++;
        }
    }

    // After the loop, append any remaining elements from the left and right arrays to the result
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Create a sample array to test the mergeSort function
let sampleData = [38, 27, 43, 3, 9, 82, 10];

// Print the original unsorted array to the console
console.log("Original Array: ", sampleData);

// Call the mergeSort function with the sample data and store the sorted result
let sortedData = mergeSort(sampleData);

// Print the sorted array to the console
console.log("Sorted Array using Merge Sort: ", sortedData);
