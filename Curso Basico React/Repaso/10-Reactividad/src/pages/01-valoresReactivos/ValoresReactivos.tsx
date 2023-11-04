import { useState, useEffect } from 'react';
// import { createConnection } from './chat.tsx';


function ChatRoom({ roomId }: any) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  const [estadoReactivo, setEstadoReactivo] = useState(1);
  let variableReactiva = estadoReactivo + 1;
  let variableNoReactiva = 1;

  const handleClick =()=>{
    setEstadoReactivo(prev=>prev+1);
    console.log("estadoReactivo: "+estadoReactivo);
    console.log("variableNoReactiva: "+variableNoReactiva);
  }
  const handleClick2 =()=>{
    variableNoReactiva = variableNoReactiva + 1;
    console.log("variableNoReactiva: "+variableNoReactiva);
  }

  useEffect(() => {
    console.log("Efecto Reactivo! ✅");
    
    // const connection = createConnection(serverUrl, roomId);
    // connection.connect();
    // return () => connection.disconnect();
  }, [roomId, serverUrl, variableReactiva, variableNoReactiva]);

  return (
    <>
      <label>
        URL del servidor:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>¡Bienvenido a la sala {roomId}!</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click 2</button>
    </>
  );
}

export default function ValoresReactivos() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Escoge la sala de chat:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="viaje">viaje</option>
          <option value="música">música</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
