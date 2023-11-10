import { useState, useEffect } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from './chat.js';

export default function ChatRoom({ roomId, createConnection, onMessage }) {
  const onMessageArrive = useEffectEvent((msg)=>{
    onMessage(msg);
  });
  
  const options = createConnection();
  const {isEncrypted} = createConnection();
  
  const onCreateConection = useEffectEvent(()=>{
    if (isEncrypted) {
      return createEncryptedConnection(options);
      } else {
      return createUnencryptedConnection(options);
    }
  });
  
  useEffect(() => {
    const connection = onCreateConection();
    connection.on('message', (msg) => onMessageArrive(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [roomId,isEncrypted]);

  return <h1>¡Bienvenido a la sala {roomId}!</h1>;
}
