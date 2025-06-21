import { User } from "@/domain/entities/User";
import { UserRepository } from "@/domain/repository/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  create(user: User): Promise<User> {
    console.log("user", user);
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  update(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  listAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
}
