import { UserRepository } from "@/domain/repository/UserRepository";
import { UserRepositoryImpl } from "../repository/user/UserRepositoryImpl";

export const provideUserRepository = (): UserRepository => {
  return new UserRepositoryImpl();
};
