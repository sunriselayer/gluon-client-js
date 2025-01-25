import { io, type Socket } from "socket.io-client";
import {
  Contract,
  Order,
  PendingOrder,
  WebSocketRequest,
  WebSocketResponse,
} from "./api-types";

export class WebSocketClient {
  private socket: Socket;

  constructor(
    baseUrl: string,
    onConnect: () => Promise<void>,
    onDisconnect: () => Promise<void>,
    onOrdersSnapshot: (orders: PendingOrder[]) => Promise<void>,
    onNewOrder: (order: Order) => Promise<void>,
    onNewContract: (contract: Contract) => Promise<void>,
    onOrderCancelled: (orderHash: string) => Promise<void>
  ) {
    this.socket = io(`${baseUrl}/ws`);

    this.socket.on("connect", onConnect);
    this.socket.on("disconnect", onDisconnect);

    this.socket.on("message", async (data: WebSocketResponse) => {
      if ("orders_snapshot" in data) {
        await onOrdersSnapshot(data.orders_snapshot);
      } else if ("new_order" in data) {
        await onNewOrder(data.new_order);
      } else if ("new_contract" in data) {
        await onNewContract(data.new_contract);
      } else if ("order_cancelled" in data) {
        await onOrderCancelled(data.order_cancelled.order_hash);
      }
    });
  }

  async createOrder(
    orderBinary: Uint8Array,
    pairingId: number,
    signature: Uint8Array
  ) {
    const orderBinaryBase64 = Buffer.from(orderBinary).toString("base64");
    const signatureBase64 = Buffer.from(signature).toString("base64");

    const req: WebSocketRequest = {
      create_order: {
        order_binary: orderBinaryBase64,
        pairing_id: pairingId,
        signature: signatureBase64,
      },
    };
    this.socket.emit("message", req);
  }
}
