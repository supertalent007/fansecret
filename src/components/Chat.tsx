// src/components/Chat.tsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000/api/socket.io'); // Adjust URL as needed

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages([...messages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const handleSendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}   
 />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chat;