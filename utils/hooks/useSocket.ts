// hooks/useSocket.ts

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface UseSocketReturn {
  connected: boolean;
  sendMessage: (event: string, data: any) => void;
  onMessage: (event: string, callback: (data: any) => void) => void;
}

let socket: Socket;

const useSocket = (serverUrl: string): UseSocketReturn => {
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    // Подключаемся к серверу
    socket = io(serverUrl);

    socket.on("connect", () => {
      setConnected(true);
      console.log("Connected to WebSocket server");
    });

    socket.on("disconnect", () => {
      setConnected(false);
      console.log("Disconnected from WebSocket server");
    });

    // Очистка подключения при размонтировании компонента
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [serverUrl]);

  // Функция для отправки сообщений
  const sendMessage = (event: string, data: any): void => {
    if (socket) {
      socket.emit(event, data);
    }
  };

  // Функция для получения сообщений
  const onMessage = (event: string, callback: (data: any) => void): void => {
    if (socket) {
      socket.on(event, callback);
    }
  };

  return {
    connected,
    sendMessage,
    onMessage,
  };
};

export default useSocket;
