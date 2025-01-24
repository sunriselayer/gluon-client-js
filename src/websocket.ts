import { io, type Socket } from "socket.io-client";

export class WebSocketClient {
  private socket: Socket;

  constructor(baseUrl: string) {
    this.socket = io(`${baseUrl}/ws`);

    this.socket.on("connect", () => {
      console.log("Connected to server");
    });

    this.socket.on("message", (data) => {
      console.log("Received message:", data);
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  }

  async createOrder() {
    this.socket.emit("message");
  }
}
