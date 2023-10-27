// Attach an event listener to the SIGINT signal
process.on('SIGINT', function() {
    // This line prints a message when the SIGINT signal is received
    console.log('Received SIGINT. Exiting...');
    
    // This line exits the current Node.js process
    process.exit();
});

// This line displays a message to instruct the user on how to exit the program
console.log('Press CTRL+C to exit.');

// This creates an infinite loop (with a 1-second interval) to keep the Node.js process running
// so that it can wait for the SIGINT signal
setInterval(() => {}, 1000);
