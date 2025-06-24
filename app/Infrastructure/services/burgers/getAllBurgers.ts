import { apiClient } from "@/Infrastructure/axios/AxiosClient";

export enum BurgersEndpointEnum {
  burgers = "/burgers",
}

export const getAllBurgers = async (): Promise<any[]> => {
  try {
    const { data } = await apiClient.get<any>(BurgersEndpointEnum.burgers);
    return data.data;
  } catch (error: any) {
    throw new Error(error.error);
  }
};
