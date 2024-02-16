document.addEventListener('DOMContentLoaded', function () {
    const socket = io();
    const form = document.querySelector('#form');
    const messageInput = document.querySelector('#m');
    const messagesList = document.querySelector('#messages');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const message = messageInput.value.trim();
      if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
      }
    });
  
    socket.on('chat message', function (msg) {
      const messageItem = document.createElement('li');
      messageItem.textContent = msg;
      messagesList.appendChild(messageItem);
      messagesList.scrollTop = messagesList.scrollHeight;
    });
  });
  