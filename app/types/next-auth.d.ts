import { DocumentType } from "@/domain/entities/auth/User";
import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    typeDocument: DocumentType;
    document: string;
    address: string;
    phone: string;
    email: string;
  }

  interface Session {
    accessToken?: string;
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user: User;
  }
}
