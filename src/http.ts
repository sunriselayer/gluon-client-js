import { Axios } from "axios";
import { Order } from "./api-types";

export class HttpClient {
  private axios: Axios;

  constructor(baseUrl: string) {
    this.axios = new Axios({
      baseURL: baseUrl,
    });
  }

  async createOrder(
    orderBinary: string,
    pairingId: number,
    signature: string
  ): Promise<void> {
    await this.axios.post("/orders", {
      order_binary: orderBinary,
      pairing_id: pairingId,
      signature: signature,
    });
  }

  async getOrders(): Promise<Order[]> {
    const response = await this.axios.get("/orders");
    return response.data;
  }
}
