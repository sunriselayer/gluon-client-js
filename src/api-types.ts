import { TimestampJson } from "@bufbuild/protobuf/wkt";

export type WebSocketResponse =
  | {
      ordersSnapshot: { orders: PendingOrder[] };
    }
  | {
      newOrder: { order: Order };
    }
  | {
      newContract: { contract: Contract };
    }
  | {
      orderCancelled: {
        orderHash: string;
      };
    };

export enum OrderDirection {
  UNSPECIFIED = "ORDER_DIRECTION_UNSPECIFIED",
  BUY = "ORDER_DIRECTION_BUY",
  SELL = "ORDER_DIRECTION_SELL",
}

export type PendingOrder = {
  orderHash: string;
  direction: OrderDirection;
  amount: string;
  limitPrice: string;
  expiry: string;
};

export type Order = {
  hash: string;
  address: string;
  direction: OrderDirection;
  amount: string;
  limitPrice: string;
  expiry: TimestampJson;
};

export type Contract = {
  buyerOrderHash: string;
  sellerOrderHash: string;
  price: string;
  quantity: string;
  timestamp: TimestampJson;
};
