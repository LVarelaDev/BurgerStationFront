import { apiClient } from "@/Infrastructure/axios/AxiosClient";
import { BurgersEndpointEnum } from "./BurgersEndpointEnum";
import { BurgerResponse } from "@/domain/entities/order/OrderDto";
import { AdditionalsItems } from "@/components/core/check-out/CheckoutContainer";

export interface GetBurgerByIdDto {
  burger: BurgerResponse;
  additionalsItem: additions;
}

export interface additions {
  additions: AdditionalsItems[];
  sauces: AdditionalsItems[];
  fries: AdditionalsItems[];
  drinks: AdditionalsItems[];
}

export const getBurgerById = async (id: number): Promise<GetBurgerByIdDto> => {
  try {
    const { data } = await apiClient.get(
      `${BurgersEndpointEnum.burgers}/${id}`
    );
    return data.data;
  } catch (error: any) {
    throw new Error(error.error);
  }
};
