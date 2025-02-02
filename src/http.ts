import { Axios } from "axios";
import { Order } from "./api-types";
import { Buffer } from "buffer";
import { AnyJson } from "@bufbuild/protobuf/wkt";

export class HttpClient {
  private axios: Axios;

  constructor(baseUrl: string) {
    this.axios = new Axios({
      baseURL: baseUrl,
    });
  }

  async getOrderbook(): Promise<Order[]> {
    const response = await this.axios.get("/orderbook");
    return response.data;
  }

  async createOrder(
    order: AnyJson,
    pairingIndex: string,
    signature: Uint8Array
  ): Promise<void> {
    const signatureBase64 = Buffer.from(signature).toString("base64");

    await this.axios.post("/orders", {
      order,
      pairingIndex,
      signature: signatureBase64,
    });
  }

  async cancelOrder(orderHash: string): Promise<void> {
    await this.axios.post("/cancel-order", {
      orderHash,
    });
  }
}
