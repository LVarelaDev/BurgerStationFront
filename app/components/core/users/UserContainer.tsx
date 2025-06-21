"use client";
import CustomCard from "@/components/ui/Cards/CustomCardWithTitle";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import InputText from "@/components/ui/Inputs/InputText";
import { CreateUserDto } from "@/application/dtos/user/CreteUserDto";
import { CreateUserSchema } from "./zod/ValidationZodForm";

const UserContainer = () => {
  const FormSchema = z.object({
    resolver: CreateUserSchema,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      resolver: {
        address: "",
        document: "",
        email: "",
        name: "",
        password: "",
        phone: "",
        typeDocument: "CC" as const,
      },
    },
  });

  const handleSubmitForm = (data: z.infer<typeof FormSchema>) => {
    console.log("datta", data);
  };

  return (
    <CustomCard title="Formulario de creación de usuarios">
      <div className="flex flex-col mt-5">
        <FormProvider {...form}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputText
              control={form.control}
              label="Nombre completo"
              name="name"
              placeholder="Ingresa tu nombre completo"
            />
            <InputText
              control={form.control}
              label="Correo electrónico"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              typeField="email"
            />
          </div>
        </FormProvider>
        <Button onClick={form.handleSubmit(handleSubmitForm)}>Enviar</Button>
      </div>
    </CustomCard>
  );
};

export default UserContainer;
