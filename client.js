const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {

  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  //on connection, console log a message
  conn.on("connect", () => {
    console.log('Successfully connected to game server')
    conn.write("Name: Joe");
    // conn.write("Move: up");

  });
  // interpret incoming data as text
 
  //on receiving data, console log that data
 conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

//exports the connect function
module.exports = {connect};