// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input and closes program if those buttons are pressed
if (key === '\u0003') {
  console.log("CTRL + C has been pressed! Exiting Program.")
  process.exit();
};

//If W is pressed, console log W to the console
if (key === 'w') {
  connection.write("Move: up")
};

//If A is pressed, console log W to the console
if (key === 'a') {
  connection.write("Move: left")
};

//If W is pressed, console log W to the console
if (key === 's') {
  connection.write("Move: down")
};

//If W is pressed, console log W to the console
if (key === 'd') {
  connection.write("Move: right")
};
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};