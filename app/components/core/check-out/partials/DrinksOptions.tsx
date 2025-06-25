"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/ui/form";
import { UseFormReturn, useWatch } from "react-hook-form";
import { AdditionalsItems } from "../CheckoutContainer";

interface DrinksOptionsProps {
  form: UseFormReturn<any, any>;
  drinks: AdditionalsItems[];
}

const DrinksOptions = ({ form, drinks }: DrinksOptionsProps) => {
  const name = "drink";
  const selectedDrink = useWatch({ name, control: form.control });

  const handleDrinkChange = (id: string) => {
    const drink = drinks.find((d) => d.id === id);
    if (drink) {
      form.setValue(name, drink, { shouldValidate: true });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tipos de Bebida *</CardTitle>
        <CardDescription>Selecciona tu bebida</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          name={name}
          control={form.control}
          render={() => (
            <RadioGroup
              value={selectedDrink?.id || ""}
              onValueChange={handleDrinkChange}
            >
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
          )}
        />
      </CardContent>
    </Card>
  );
};

export default DrinksOptions;
