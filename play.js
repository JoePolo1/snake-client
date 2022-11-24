
//initiates node NET functionality
// const net = require("net");
const {connect} = require('./client');

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

console.log("Connecting ...");
connect();
setupInput();

//OLD CODE
// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243',
//     port: '50541',
//   });

//   conn.setEncoding("utf8");

//   //on connection, console log a message
//   conn.on("connect", () => {
//     console.log('Snake? Snake!!!')
//   });
//   // interpret incoming data as text
 
//   //on receiving data, console log that data
//  conn.on('data', (data) => {
//     console.log(data);
//   });

//   return conn;
// };

// console.log("Connecting ...");
// connect();