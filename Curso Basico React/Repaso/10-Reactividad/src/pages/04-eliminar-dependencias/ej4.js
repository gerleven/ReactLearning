import { useState, useEffect } from 'react';
import { createConnection, sendMessage } from './chat.js';
// import { showNotification } from './notifications.js';

const serverUrl = 'https://localhost:1234';




function ChatRoom({ getOptions }) {
    const [message, setMessage] = useState('');
  
    const { roomId, serverUrl } = getOptions();
    useEffect(() => {
      const connection = createConnection({
        roomId: roomId,
        serverUrl: serverUrl
      });
      connection.connect();
      return () => connection.disconnect();
    }, [roomId, serverUrl]); // ✅ Todas las dependencias declaradas
    
  return <h1>¡Bienvenido a la sala {roomId}!</h1>
}

export default function EJ4() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Escoje la sala de chat:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="viaje">viaje</option>
          <option value="música">música</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Usar tema oscuro
      </label>
      <hr />
      <ChatRoom
         roomId={roomId}
         options={{
           serverUrl: serverUrl,
           roomId: roomId
         }}
      />
    </>
  );
}

