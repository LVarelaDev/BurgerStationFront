import { AdditionalsItems } from "@/components/core/check-out/CheckoutContainer";
import { FormValues } from "@/domain/constants/schemas/OrderFormSchema";
import { BurgerResponse } from "@/domain/entities/order/OrderDto";
import { OrderItemCustomization } from "@/domain/entities/checkout/CreateOrderDto";

export const useCalculateTotal = ({
  fries,
  drinks,
}: {
  fries: AdditionalsItems[];
  drinks: AdditionalsItems[];
}) => {
  const mapToCustomizations = (
    additions: AdditionalsItems[],
    sauces: AdditionalsItems[],
    fries: AdditionalsItems | null,
    drink: AdditionalsItems | null
  ): OrderItemCustomization[] => {
    const all: AdditionalsItems[] = [
      ...(additions || []),
      ...(sauces || []),
      ...(fries ? [fries] : []),
      ...(drink ? [drink] : []),
    ];

    return all.map((item) => ({
      customizationOptionId: Number(item.id),
      price: item.price,
    }));
  };

  const calculateTotal = (burger: BurgerResponse, formData: FormValues) => {
    const selectedFries = fries.find((f) => f.id === formData.fries?.id);
    const selectedDrink = drinks.find((d) => d.id === formData.drink?.id);

    const customizations = [
      ...(formData.additions ?? []),
      ...formData.sauces,
      ...(selectedFries ? [selectedFries] : []),
      ...(selectedDrink ? [selectedDrink] : []),
    ];

    const customizationsTotal = customizations.reduce(
      (sum, item) => sum + (item.price || 0),
      0
    );

    const burgerTotal = burger.price * formData.quantity;

    return +(burgerTotal + customizationsTotal).toFixed(2);
  };

  return { calculateTotal, mapToCustomizations };
};
