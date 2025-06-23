import { DocumentType } from "@/domain/entities/auth/User";

export type CreateUserDto = {
  name: string;
  typeDocument: DocumentType;
  document: string;
  address: string;
  phone: string;
  email: string;
  password: string;
};
