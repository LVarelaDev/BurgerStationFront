"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../ui/card";
import InputText from "../ui/Inputs/InputText";
import { LoginFormData, loginSchema } from "./scheme/LoginFormData";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setError("");
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md space-y-6 p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Bienvenido de nuevo!</h1>
        <p className="text-muted-foreground">
          Ingresa tus credenciales para iniciar sesión
        </p>
      </div>

      <Form {...form}>
        {error && <div className="text-red-500">{error}</div>}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <InputText
            control={form.control}
            label="Correo electronico"
            name="email"
            placeholder="Ingresa tu correo electronico"
          />
          <InputText
            control={form.control}
            label="Contraseña"
            name="password"
            placeholder="Ingresa tu contraseña"
            typeField="password"
          />

          <Button type="submit" className="w-full">
            Iniciar sesión
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        No tienes cuenta?{" "}
        <Link
          href="/register"
          className="font-medium text-primary hover:underline"
        >
          Registrate
        </Link>
      </div>
    </Card>
  );
};
export default LoginForm;
