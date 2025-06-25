import { apiClient } from "@/Infrastructure/axios/AxiosClient";
import { BurgersEndpointEnum } from "./BurgersEndpointEnum";

export const getBurgerById = async (id: number): Promise<any> => {
  try {
    const { data } = await apiClient.get<any>(
      `${BurgersEndpointEnum.burgers}/${id}`
    );
    return data.data;
  } catch (error: any) {
    throw new Error(error.error);
  }
};
