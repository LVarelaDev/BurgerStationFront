import React, { Dispatch, SetStateAction } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { drinks } from "../CheckoutContainer";
import { Label } from "@/components/ui/label";

const DrinksOptions = ({
  selectedDrink,
  setSelectedDrink,
}: {
  selectedDrink: string;
  setSelectedDrink: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tipos de Bebida *</CardTitle>
        <CardDescription>Selecciona tu bebida</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedDrink} onValueChange={setSelectedDrink}>
          {drinks.map((drink) => (
            <div key={drink.id} className="flex items-center space-x-2">
              <RadioGroupItem value={drink.id} id={drink.id} />
              <Label htmlFor={drink.id} className="flex-1 cursor-pointer">
                {drink.name}
              </Label>
              <span className="font-medium">${drink.price.toFixed(2)}</span>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default DrinksOptions;
