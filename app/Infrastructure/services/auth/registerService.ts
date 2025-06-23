import { CreateUserDto } from "@/domain/entities/auth/CreteUserDto";
import { apiClient } from "@/Infrastructure/axios/AxiosClient";

export const createUserPOST = async (paylad: CreateUserDto) => {
  try {
    const { data } = await apiClient.post<any>("/auth/register", paylad);
    if (data.success) {
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};
