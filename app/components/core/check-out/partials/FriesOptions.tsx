import React, { Dispatch, SetStateAction } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { fries } from "../CheckoutContainer";
import { Label } from "@/components/ui/label";
interface FriesOptionsProps {
  selectedFries: string;
  setSelectedFries: Dispatch<SetStateAction<string>>;
}

const FriesOptions = ({
  selectedFries,
  setSelectedFries,
}: FriesOptionsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tipos de Papas *</CardTitle>
        <CardDescription>Selecciona tu acompañamiento de papas</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedFries} onValueChange={setSelectedFries}>
          {fries.map((fry) => (
            <div key={fry.id} className="flex items-center space-x-2">
              <RadioGroupItem value={fry.id} id={fry.id} />
              <Label htmlFor={fry.id} className="flex-1 cursor-pointer">
                {fry.name}
              </Label>
              <span className="font-medium">${fry.price.toFixed(2)}</span>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default FriesOptions;
