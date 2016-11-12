### What

My slimmed down version of nodemon, no dependencies.


### Why

To play around with the node core modules and understand a tool that I use daily.


### How to run

`$ node ./index.js <path_to_file_you_want_watched>`

eg
`$ node ./index.js ./server.js`

alternatively
`$ ./index.js ./server.js`


### Understand

Node can create (`spawn`) new processes which can run simultaneously. This Nodemon takes advantage of that by creating a child process to run the file that is passed as an argument.

```js
// Create child process
child = spawn(process.execPath, [process.argv[2]])
```
`process.execPath` represents node in the file system

`process.argv` is the array of arguments this process was run with, 1st being node, 2nd being this file (`index.js`), 3rd being the file we want to restart after a change (`server.js`)


The watching logic is simple and handed to us using the `fs` module
```js
fs.watch(__dirname, {}, function () {
  // This callback will be called every time there is a change in the given directory
}
```

We need to make sure that any logs happening in our child process are logged in our parent process.

```js
// Add an event listener to child process
child.stdout.on('data', function (data) {
  console.log(data.toString())
})
```
