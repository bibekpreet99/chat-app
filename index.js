var express = require('express')
var socket = require('socket.io')
var app = express()

const PORT = 4000
var server = app.listen(PORT,function(){
    console.log(`You are listening to port ${PORT}`);
})

app.use(express.static('public'))


//socket

var io = socket(server)

io.on('connection', (socket)=>{
    console.log('connection is made', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
    })
    
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    })
})


