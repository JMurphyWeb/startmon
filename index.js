#!/usr/bin/env node

var path = require('path')
var fs = require('fs')
var spawn = require('child_process').spawn
var child

console.log(process.execPath)

// watch several files/directories
fs.watch(__dirname, {}, () => {
  process.kill(child.pid)
  child = spawn(process.execPath, [process.argv[2]])
  child.stdout.on('data', function (data) {
    console.log(data.toString())
  })
})

// Create child process
child = spawn(process.execPath, [process.argv[2]])

// Add an event listener to child process
child.stdout.on('data', function (data) {
  console.log(data.toString())
})
