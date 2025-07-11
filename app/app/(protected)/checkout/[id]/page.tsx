"use client";
import CheckoutContainer from "@/components/core/check-out/CheckoutContainer";
import Error from "next/error";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<number | null>(null);

  useEffect(() => {
    const get = async () => {
      setId(await getId(params));
    };
    get();
  }, [params]);

  if (!id) return <Error statusCode={404} />;
  return <CheckoutContainer id={id} />;
};

export default Page;

const getId = async (params: Promise<{ id: string }>): Promise<number> => {
  const { id } = await params;
  return +id;
};
