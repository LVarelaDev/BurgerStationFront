import { z } from "zod";

const additionSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
});

export const formSchema = z.object({
  customerNote: z.string(),
  quantity: z
    .number()
    .refine((val) => val > 0, { message: "Debe ser mayor que 0" }),
  additions: z
    .array(additionSchema)
    .max(3, { message: "Máximo 3 adiciones permitidas" })
    .optional(),
  sauces: z
    .array(additionSchema)
    .max(2, { message: "Máximo 2 salsas permitidas" }),
  fries: z.any().optional().nullable(),
  drink: z.any().optional().nullable(),
});

export type FormValues = z.infer<typeof formSchema>;
