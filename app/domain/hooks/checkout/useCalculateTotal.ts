import { FormValues } from "@/domain/constants/schemas/OrderFormSchema";
import { OrderItemCustomization } from "@/domain/entities/checkout/CreateOrderDto";

interface Item {
  id: string;
  name: string;
  price: number;
}
export const useCalculateTotal = ({
  fries,
  drinks,
}: {
  fries: Item[];
  drinks: Item[];
}) => {
  const mapToCustomizations = (
    additions: any[],
    sauces: any[],
    fries: any | null,
    drink: any | null
  ): OrderItemCustomization[] => {
    const all: any[] = [
      ...(additions || []),
      ...(sauces || []),
      ...(fries ? [fries] : []),
      ...(drink ? [drink] : []),
    ];

    return all.map((item) => ({
      customizationOptionId: item.id,
      price: item.price,
    }));
  };

  const calculateTotal = (burger: Item, formData: FormValues) => {
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
