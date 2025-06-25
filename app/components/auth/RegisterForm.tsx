"use client";

import { useCustomAuth } from "@/domain/hooks/auth/useCustomAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import { Form } from "../ui/form";
import InputSelect from "../ui/Inputs/InputSelect";
import InputText from "../ui/Inputs/InputText";
import { CreateUserDto, CreateUserSchema } from "./scheme/RegisterFomData";

const options = [
  { displayValue: "Cédula de Ciudadanía", value: "CC" },
  { displayValue: "Cédula de Extranjería", value: "CE" },
  { displayValue: "Nit", value: "NIT" },
];

const RegisterForm = () => {
  const form = useForm<CreateUserDto>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      email: "",
      password: "",
      address: "",
      document: "",
      name: "",
      phone: "",
      typeDocument: "CC",
    },
  });
  const { register } = useCustomAuth();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(register)}
        className="gap-4 flex flex-col mt-5"
      >
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
        <InputText
          control={form.control}
          label="Dirección postal"
          name="address"
          placeholder="Ingresa tu dirección postal"
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
        <InputText
          control={form.control}
          label="Contraseña"
          name="password"
          placeholder="Ingresa tu contraseña"
          typeField="password"
        />
        <Button type="submit">Registrarme</Button>
      </form>
    </Form>
  );
};
export default RegisterForm;
