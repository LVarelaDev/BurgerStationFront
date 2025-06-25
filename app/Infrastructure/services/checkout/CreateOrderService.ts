import { CreateOrderRequest } from "@/domain/entities/checkout/CreateOrderDto";
import { apiClient } from "@/Infrastructure/axios/AxiosClient";
import { OrderEndpointEnum } from "./OrderEndpointEnum";

export const createOrder = async (payload: CreateOrderRequest) => {
  try {
    const { data } = await apiClient.post(OrderEndpointEnum.order, payload);
    return data.data;
  } catch {
    throw new Error("Error creating order");
  }
};
