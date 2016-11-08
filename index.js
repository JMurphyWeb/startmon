#!/usr/bin/env node

var path = require('path')
var fs = require('fs')
var spawn = require('child_process').spawn
var child


console.log(process.execPath);

// watch several files/directories
fs.watch(__dirname, {}, (eventType, filename) => {
  // console.log('watch event triggered', eventType, filename)
  // how to re-run the application when a change is detected
  // console.log('killing child process')
  process.kill(child.pid)
  // console.log('restarting new instance')
  child = spawn(process.execPath, [process.argv[2]])
})

child = spawn(process.execPath, [process.argv[2]])

// child.stdout.on('data', function (data) {
//   console.log('message from the child: ', data.toString())
// })

// stretch goals
// How to add the startmon command to this directory
