import RegisterForm from "@/components/auth/RegisterForm";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Crear cuenta</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
