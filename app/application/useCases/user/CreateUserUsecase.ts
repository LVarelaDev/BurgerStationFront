import { CreateUserDto } from "@/application/dtos/user/CreteUserDto";
import { User } from "@/domain/entities/User";
import { UserRepository } from "@/domain/repository/UserRepository";

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(input: CreateUserDto): Promise<User> {
    if (!input.email.includes("@")) {
      throw new Error("Invalid email format");
    }

    if (input.password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    const newUser: User = {
      name: input.name,
      typeDocument: input.typeDocument,
      document: input.document,
      address: input.address,
      phone: input.phone,
      email: input.email,
      password: input.password,
    };

    return this.userRepository.create(newUser);
  }
}
