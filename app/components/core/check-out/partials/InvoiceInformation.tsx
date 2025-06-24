import { Button } from "@/components/ui/button";
import React from "react";

interface InvoiceInformationProps {
  calculateTotal: () => number;
  isComplete: string;
}

const InvoiceInformation = ({
  calculateTotal,
  isComplete,
}: InvoiceInformationProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-lg">
        <span className="font-semibold">Total:</span>
        <span className="text-2xl font-bold text-primary">
          ${calculateTotal().toFixed(2)} USD
        </span>
      </div>

      <Button className="w-full" size="lg" disabled={!isComplete}>
        Agregar al Carrito
      </Button>

      {!isComplete && (
        <p className="text-sm text-red-500 text-center">
          * Debes seleccionar papas y bebida para continuar
        </p>
      )}
    </div>
  );
};

export default InvoiceInformation;
