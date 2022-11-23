const net = require("net");

const connect = function () {

  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  conn.setEncoding("utf8");

  //on connection, console log a message
  conn.on("connect", () => {
    console.log('Snake? Snake!!!')
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