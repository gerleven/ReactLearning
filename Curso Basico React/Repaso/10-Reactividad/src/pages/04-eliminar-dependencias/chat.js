export function createConnection(serverUrl, roomId) {
  // Una aplicación real se conectaría al servidor
  let connectedCallback;
  let timeout;
  return {
    connect() {
      timeout = setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 100);
    },
    on(event, callback) {
      if (connectedCallback) {
        throw Error('No se puede añadir el controlador dos veces.');
      }
      if (event !== 'connected') {
        throw Error('Solo se admite el evento "connected".');
      }
      connectedCallback = callback;
    },
    disconnect() {
      clearTimeout(timeout);
    },
    sendMessage (m){
      console.log(m);
    }
  };
}
