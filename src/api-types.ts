import { TimestampJson } from "@bufbuild/protobuf/wkt";

export type WebSocketResponse =
  | {
      orders_snapshot: PendingOrder[];
    }
  | {
      new_order: Order;
    }
  | {
      new_contract: Contract;
    }
  | {
      order_cancelled: {
        order_hash: string;
      };
    };

export type PendingOrder = {
  order_hash: string;
  direction: number;
  amount: string;
  limit_price: string;
  expiry: string;
};

export type Order = {
  hash: string;
  body: {
    address: string;
    nonce: number;
    denom_base: string;
    denom_quote: string;
    direction: number;
    amount: string;
    limit_price: string;
    expiry: TimestampJson;
  };
};

export type Contract = {
  buyer_order_hash: string;
  seller_order_hash: string;
  price: string;
  quantity: string;
  timestamp: TimestampJson;
};
