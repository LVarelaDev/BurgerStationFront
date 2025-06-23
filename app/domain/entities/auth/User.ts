export type DocumentType = "CC" | "CE" | "NIT";

export interface User {
  id?: number;
  name: string;
  typeDocument: DocumentType;
  document: string;
  address: string;
  phone: string;
  email: string;
  password: string;
}
