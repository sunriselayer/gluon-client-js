import { AnyJson, TimestampJson } from "@bufbuild/protobuf/wkt";

export type WebSocketRequest = {
  new_order: {
    order_binary: string; // base64 encoded
    pairing_id: number;
    signature: string; // base64 encoded
  };
};

export type WebSocketResponse =
  | {
      orders_snapshot: Order[];
    }
  | {
      new_order: Order;
    }
  | {
      new_contract: Contract;
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
