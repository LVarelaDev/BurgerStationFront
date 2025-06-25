import React, { SetStateAction } from "react";
import QuantitySection from "./QuantitySection";
import { UseFormReturn } from "react-hook-form";

interface ProductInformationPrps {
  burger: any;
  form: UseFormReturn<any>;
}

const ProductInformation = ({ burger, form }: ProductInformationPrps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{burger.name}</h1>
      <p className="text-gray-600 mt-2">{burger.description}</p>
      <div className="flex justify-between items-center text-2xl font-bold text-primary mt-4">
        <span>${burger.price} USD</span>
        <QuantitySection form={form} />
      </div>
    </div>
  );
};

export default ProductInformation;
