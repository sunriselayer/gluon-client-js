import { Contract, Order, WebSocketResponse } from "./api-types";

export class WebSocketClient {
  private socket: WebSocket;

  constructor(
    baseUrl: string,
    onOpen: (ev: Event) => Promise<void>,
    onClose: (ev: CloseEvent) => Promise<void>,
    onOrdersSnapshot: (orders: Order[]) => Promise<void>,
    onNewOrder: (order: Order) => Promise<void>,
    onNewContract: (contract: Contract) => Promise<void>,
    onOrderCancelled: (orderHash: string) => Promise<void>
  ) {
    this.socket = new WebSocket(`${baseUrl}/ws`);

    this.socket.onopen = onOpen;
    this.socket.onclose = onClose;

    this.socket.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data) as WebSocketResponse;
      if ("ordersSnapshot" in data) {
        onOrdersSnapshot(data.ordersSnapshot.orders);
      } else if ("newOrder" in data) {
        onNewOrder(data.newOrder.order);
      } else if ("newContract" in data) {
        onNewContract(data.newContract.contract);
      } else if ("orderCancelled" in data) {
        onOrderCancelled(data.orderCancelled.orderHash);
      }
    };
  }
}
