import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(100, "El nombre es demasiado largo"),

  email: z.string().email("El correo electrónico no es válido"),

  address: z.string().min(5, "La dirección debe tener al menos 5 caracteres"),

  typeDocument: z.enum(["CC", "CE", "NIT"], {
    required_error: "Selecciona un tipo de documento",
  }),

  document: z
    .string()
    .min(5, "El número de documento debe tener al menos 5 caracteres")
    .max(20, "El número de documento es demasiado largo"),

  phone: z
    .string()
    .min(7, "El número de celular debe tener al menos 7 dígitos")
    .max(15, "El número de celular es demasiado largo"),

  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(30, "La contraseña es demasiado larga"),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
