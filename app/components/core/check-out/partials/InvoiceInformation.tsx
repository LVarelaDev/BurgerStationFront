import { BurgerResponse } from "@/domain/entities/order/OrderDto";

interface InvoiceInformationProps {
  burger: BurgerResponse;
  calculateTotal: (burger: BurgerResponse) => number;
}

const InvoiceInformation = ({
  burger,
  calculateTotal,
}: InvoiceInformationProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-lg">
        <span className="font-semibold">Total:</span>
        <span className="text-2xl font-bold text-primary">
          ${calculateTotal(burger).toFixed(2)} USD
        </span>
      </div>
    </div>
  );
};

export default InvoiceInformation;
