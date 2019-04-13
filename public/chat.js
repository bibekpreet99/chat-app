var socket = io.connect('http://localhost:4000')

//query DOM

var handle = document.getElementById('handle'),
    message = document.getElementById('message'),
    output = document.getElementById('output'),
    btn = document.getElementById('send'),
    feedback = document.getElementById('feedback');

//emit data

btn.addEventListener('click', function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    })
})

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value)
})

socket.on('chat', function(data){
    feedback.innerHTML = ""
    message.value = ""
    output.innerHTML += '<p><strong>'+ data.handle + ' : ' + '</strong>' + data.message + '</p>'
    
})

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>'+ data + ' is typing a message.... </em></p>'
})