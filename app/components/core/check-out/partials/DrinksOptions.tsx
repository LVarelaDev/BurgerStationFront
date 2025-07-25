"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormField } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormValues } from "@/domain/constants/schemas/OrderFormSchema";
import { UseFormReturn, useWatch } from "react-hook-form";
import { AdditionalsItems } from "../CheckoutContainer";

interface DrinksOptionsProps {
  form: UseFormReturn<FormValues>;
  drinks: AdditionalsItems[];
}

const DrinksOptions = ({ form, drinks }: DrinksOptionsProps) => {
  const name: keyof FormValues = "drink";

  const selectedDrink = useWatch({
    name,
    control: form.control,
  }) as AdditionalsItems | undefined;

  const handleDrinkChange = (id: string) => {
    const drink = drinks.find((d) => d.id.toString() === id);
    if (drink) {
      form.setValue(name, drink, { shouldValidate: true });
    }
  };

  return (
    <>
      {selectedDrink && (
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
                  value={selectedDrink?.id.toString() || ""}
                  onValueChange={handleDrinkChange}
                >
                  {drinks.map((drink) => (
                    <div key={drink.id} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={drink.id.toString()}
                        id={drink.id.toString()}
                      />
                      <Label
                        htmlFor={drink.id.toString()}
                        className="flex-1 cursor-pointer"
                      >
                        {drink.name}
                      </Label>
                      <span className="font-medium">
                        ${drink.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </RadioGroup>
              )}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default DrinksOptions;
