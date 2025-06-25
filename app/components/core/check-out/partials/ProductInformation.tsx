import { UseFormReturn } from "react-hook-form";
import QuantitySection from "./QuantitySection";
import { BurgerResponse } from "@/domain/entities/order/OrderDto";
import { FormValues } from "@/domain/constants/schemas/OrderFormSchema";

interface ProductInformationPrps {
  burger: BurgerResponse;
  form: UseFormReturn<FormValues>;
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
