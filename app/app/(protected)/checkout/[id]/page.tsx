import CheckoutContainer from "@/components/core/check-out/CheckoutContainer";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <CheckoutContainer id={+id} />;
};

export default page;
