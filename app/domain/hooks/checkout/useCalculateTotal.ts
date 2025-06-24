import {
  additions,
  drinks,
  fries,
  sauces,
} from "@/components/core/check-out/CheckoutContainer";
import { useState } from "react";

export const useCalculateTotal = () => {
  const basePrice = 8.99;

  const [quantity, setQuantity] = useState(1);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);
  const [selectedFries, setSelectedFries] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedAdditions, setSelectedAdditions] = useState<string[]>([]);

  const calculateTotal = () => {
    let total = basePrice;

    selectedAdditions.forEach((additionId) => {
      const addition = additions.find((a) => a.id === additionId);
      if (addition) total += addition.price;
    });

    selectedSauces.forEach((sauceId) => {
      const sauce = sauces.find((s) => s.id === sauceId);
      if (sauce) total += sauce.price;
    });

    if (selectedFries) {
      const fry = fries.find((f) => f.id === selectedFries);
      if (fry) total += fry.price;
    }

    if (selectedDrink) {
      const drink = drinks.find((d) => d.id === selectedDrink);
      if (drink) total += drink.price;
    }

    return total * quantity;
  };

  const isComplete = selectedFries && selectedDrink;

  return {
    isComplete,
    calculateTotal,
    setQuantity,
    setSelectedAdditions,
    setSelectedDrink,
    setSelectedFries,
    setSelectedSauces,
    quantity,
    selectedAdditions,
    selectedDrink,
    selectedFries,
    selectedSauces,
  };
};
