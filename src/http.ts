import { Axios } from "axios";
import { Order } from "./api-types";
import { Buffer } from "buffer";

export class HttpClient {
  private axios: Axios;

  constructor(baseUrl: string) {
    this.axios = new Axios({
      baseURL: baseUrl,
    });
  }

  async getOrders(): Promise<Order[]> {
    const response = await this.axios.get("/orders");
    return response.data;
  }

  async createOrder(
    orderBinary: Uint8Array,
    pairingId: number,
    signature: Uint8Array
  ): Promise<void> {
    const orderBinaryBase64 = Buffer.from(orderBinary).toString("base64");
    const signatureBase64 = Buffer.from(signature).toString("base64");

    await this.axios.post("/orders", {
      order_binary: orderBinaryBase64,
      pairing_id: pairingId,
      signature: signatureBase64,
    });
  }
}
