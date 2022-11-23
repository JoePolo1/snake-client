
//initiates node NET functionality
// const net = require("net");
const {connect} = require('./client');

// establishes a connection with the game server
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

console.log("Connecting ...");
connect();


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