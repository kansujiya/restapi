// var fs = require("fs");
//
// var data = fs.readFileSync('text.txt');
//
// console.log(data.toString());
// console.log("Program Ended");
//
// fs.readFile('text.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
//
// console.log("Program Ended");
//
// // Import events module
// var events = require('events');
//
// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter();
//
// // Create an event handler as follows
// var connectHandler = function connected() {
//     console.log('connection succesful.');
//
//     // Fire the data_received event
//     eventEmitter.emit('data_received');
// }
//
// // Bind the connection event with the handler
// eventEmitter.on('connection', connectHandler);
//
// //Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function() {
//
//     console.log('data received succesfully.');
// });
//
// // Fire the connection event
// eventEmitter.emit('connection');
//
// console.log("Program Ended.");

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('text.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end',function() {
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("Program Ended");


var fs = require("fs");
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("Program Ended");


var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('text.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");


var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('text.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");

var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("File Decompressed.");
