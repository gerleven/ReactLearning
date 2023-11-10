import { useState } from "react";
import ChatRoom from "./ChatRoom.js";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "./ChatRoom.js";
import { showNotification } from "./notifications.js";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [roomId, setRoomId] = useState("general");

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Usar tema oscuro
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={(e) => setIsEncrypted(e.target.checked)}
        />
        Activar encriptación
      </label>
      <label>
        Escoge la sala de chat:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="viaje">viaje</option>
          <option value="música">música</option>
        </select>
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        onMessage={(msg) => {
          // showNotification('Nuevo mensaje: ' + msg, isDark ? 'dark' : 'light');
        }}
        createConnection={() => {
          const options = {
            serverUrl: "https://localhost:1234",
            roomId: roomId,
            isEncrypted: isEncrypted,
          };
          return options;
        }}
      />
    </>
  );
}
