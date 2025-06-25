import { CreateUserDto } from "@/domain/entities/auth/CreteUserDto";
import { createUserPOST } from "@/Infrastructure/services/auth/registerService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useCustomAuth = () => {
  const router = useRouter();

  const register = (newUser: CreateUserDto) => {
    toast.promise(createUserPOST(newUser), {
      loading: "Registrando usuario...",
      success: (res) => {
        router.push("/login");
        return "Usuario registrado correctamente";
      },
      error: "Error al registrar el usuario",
    });
  };

  return { register };
};
