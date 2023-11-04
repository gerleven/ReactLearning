export function createConnection(serverUrl: any, roomId: any) {
  // Una implementación real en realidad se conectaría al servidor
  return {
    connect() {
      console.log('✅ Conectando a la sala "' + roomId + '" en ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Desconectado de la sala "' + roomId + '" en ' + serverUrl);
    }
  };
}
