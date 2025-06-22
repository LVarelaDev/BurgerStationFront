"use client";
import CustomCard from "@/components/ui/Cards/CustomCardWithTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import InputSelect from "@/components/ui/Inputs/InputSelect";
import InputText from "@/components/ui/Inputs/InputText";
import { CreateUserSchema } from "./zod/ValidationZodForm";

const options = [
  { displayValue: "Cédula de Ciudadanía", value: "CC" },
  { displayValue: "Cédula de Extranjería", value: "CE" },
  { displayValue: "Nit", value: "NIT" },
];

const UserContainer = () => {
  const form = useForm<z.infer<typeof CreateUserSchema>>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      address: "",
      document: "",
      email: "",
      name: "",
      password: "",
      phone: "",
      typeDocument: "CC" as const,
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <CustomCard title="Formulario de creación de usuarios">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-4 flex flex-col mt-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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

          <InputText
            control={form.control}
            label="Dirección postal"
            name="address"
            placeholder="Ingresa tu dirección postal"
          />
          <InputText
            control={form.control}
            label="Contraseña"
            name="password"
            placeholder="Ingresa tu contraseña"
            typeField="password"
          />
          <InputText
            control={form.control}
            label="Numero de documento"
            name="document"
            placeholder="Ingresa tu numero de documento"
          />
          <InputText
            control={form.control}
            label="Celular"
            name="phone"
            placeholder="Ingresa tu celular"
          />
          <InputSelect
            dataList={options}
            itemDisplay="displayValue"
            itemValue="value"
            control={form.control}
            label="Tipo de documento"
            name="typeDocument"
            placeholder="Ingresa tu tipo de documento"
          />
          <button onClick={form.handleSubmit(onSubmit)}>eded</button>
        </form>
      </Form>
    </CustomCard>
  );
};

export default UserContainer;
