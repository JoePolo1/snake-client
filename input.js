const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input and closes program if those buttons are pressed
if (key === '\u0003') {
  console.log("CTRL + C has been pressed! Exiting Program.")
  process.exit();
};
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};