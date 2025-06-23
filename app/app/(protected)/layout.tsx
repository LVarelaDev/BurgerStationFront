import Layout from "@/components/layout/Layout";
import { authOptions } from "@/lib/auth/config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return <Layout>{children}</Layout>;
};
export default ProtectedLayout;
