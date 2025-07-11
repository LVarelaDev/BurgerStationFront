import { apiClient } from "@/Infrastructure/axios/AxiosClient";
import { BurgersEndpointEnum } from "./BurgersEndpointEnum";

export const getAllBurgers = async (): Promise<any[]> => {
  try {
    const { data } = await apiClient.get<any>(BurgersEndpointEnum.burgers);
    return data.data;
  } catch (error: any) {
    throw new Error(error.error);
  }
};
