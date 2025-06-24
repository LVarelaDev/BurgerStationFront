import React, { SetStateAction } from "react";
import QuantitySection from "./QuantitySection";

interface ProductInformationPrps {
  quantity: number;
  setQuantity: (value: SetStateAction<number>) => void;
}

const ProductInformation = ({
  quantity,
  setQuantity,
}: ProductInformationPrps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hamburguesa Artesanal</h1>
      <p className="text-gray-600 mt-2">
        Deliciosa hamburguesa artesanal con carne 100% res, lechuga fresca,
        tomate y cebolla en pan brioche tostado.
      </p>
      <div className="flex justify-between items-center text-2xl font-bold text-primary mt-4">
        <span>$11 USD</span>
        <QuantitySection quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
};

export default ProductInformation;
