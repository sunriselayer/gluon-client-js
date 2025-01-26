import { io, type Socket } from "socket.io-client";
import { Contract, Order, PendingOrder, WebSocketResponse } from "./api-types";

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
}
