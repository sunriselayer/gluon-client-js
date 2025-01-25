import { AnyJson, TimestampJson } from "@bufbuild/protobuf/wkt";

export type WebSocketRequest = {
  create_order: {
    order_binary: string; // base64 encoded
    pairing_id: number;
    signature: string; // base64 encoded
  };
};

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
  owner: string;
  body: AnyJson;
  cancelled: boolean;
  contracted_amount: string;
};

export type Contract = {
  buyer_order_hash: string;
  seller_order_hash: string;
  price: string;
  quantity: string;
  timestamp: TimestampJson;
};
