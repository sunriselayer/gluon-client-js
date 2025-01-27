import { Contract, Order, PendingOrder, WebSocketResponse } from "./api-types";

export class WebSocketClient {
  private socket: WebSocket;

  constructor(
    baseUrl: string,
    onOpen: (ev: Event) => Promise<void>,
    onClose: (ev: CloseEvent) => Promise<void>,
    onOrdersSnapshot: (orders: PendingOrder[]) => Promise<void>,
    onNewOrder: (order: Order) => Promise<void>,
    onNewContract: (contract: Contract) => Promise<void>,
    onOrderCancelled: (orderHash: string) => Promise<void>
  ) {
    this.socket = new WebSocket(`${baseUrl}/ws`);

    this.socket.onopen = onOpen;
    this.socket.onclose = onClose;

    this.socket.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data) as WebSocketResponse;
      if ("orders_snapshot" in data) {
        onOrdersSnapshot(data.orders_snapshot);
      } else if ("new_order" in data) {
        onNewOrder(data.new_order);
      } else if ("new_contract" in data) {
        onNewContract(data.new_contract);
      } else if ("order_cancelled" in data) {
        onOrderCancelled(data.order_cancelled.order_hash);
      }
    };
  }
}
