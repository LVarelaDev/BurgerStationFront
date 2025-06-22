import { z } from "zod";

const DocumentTypeSchema = z.enum(["CC", "CE", "NIT"]);

export const CreateUserSchema = z
  .object({
    name: z
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(100, "El nombre no puede exceder los 100 caracteres")
      .regex(
        /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        "El nombre solo puede contener letras y espacios"
      ),

    typeDocument: DocumentTypeSchema.refine(
      (val) => Object.values(DocumentTypeSchema.enum).includes(val),
      {
        message: "Tipo de documento inválido",
      }
    ),

    document: z
      .string()
      .min(5, "El documento debe tener al menos 5 caracteres")
      .max(20, "El documento no puede exceder los 20 caracteres")
      .regex(
        /^[a-zA-Z0-9]+$/,
        "El documento solo puede contener letras y números"
      ),

    address: z.string().min(5, "La dirección debe tener al menos 5 caracteres"),

    phone: z
      .string()
      .min(7, "El teléfono debe tener al menos 7 caracteres")
      .max(15, "El teléfono no puede exceder los 15 caracteres")
      .regex(
        /^[0-9+]+$/,
        "El teléfono solo puede contener números y el signo +"
      ),

    email: z
      .string()
      .email("Debe ser un correo electrónico válido")
      .max(100, "El email no puede exceder los 100 caracteres"),

    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(50, "La contraseña no puede exceder los 50 caracteres")
      .regex(/[A-Z]/, "La contraseña debe contener al menos una mayúscula")
      .regex(/[a-z]/, "La contraseña debe contener al menos una minúscula")
      .regex(/[0-9]/, "La contraseña debe contener al menos un número")
      .regex(
        /[^A-Za-z0-9]/,
        "La contraseña debe contener al menos un carácter especial"
      ),
  })
  .refine(
    (data) => {
      if (data.typeDocument === "NIT") {
        return data.document.length >= 9 && data.document.length <= 12;
      }
      return true;
    },
    {
      message: "El NIT debe tener entre 9 y 12 dígitos",
      path: ["document"],
    }
  );

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
