const fs = require('fs');
const readline = require('readline');
const greetings = require('./greeting');

const readline_1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readline_1.question('What is your name', function(name){
    const greeting = greetings.generateGreetings(name);

     // Save greeting to output.txt
  fs.writeFile('output.txt', greeting, function (err) {
    if (err) {
      console.error('Error writing to output.txt:', err);
    } else {
      console.log('Greeting saved to output.txt');
    }

    // Close the readline interface
    readline_1.close();
  });
});

// Handle close event
readline_1.on('close', function () {
  console.log('Goodbye!');
  process.exit(0);
});