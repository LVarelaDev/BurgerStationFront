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

interface FriesOptionsProps {
  form: UseFormReturn<FormValues>;
  fries: AdditionalsItems[];
}

const FriesOptions = ({ form, fries }: FriesOptionsProps) => {
  const name: keyof FormValues = "fries";

  const selectedFry = useWatch({
    name,
    control: form.control,
  }) as AdditionalsItems | undefined;

  const handleFryChange = (id: string) => {
    const fry = fries.find((f) => f.id === id);
    if (fry) {
      form.setValue(name, fry, { shouldValidate: true });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tipos de Papas *</CardTitle>
        <CardDescription>Selecciona tu acompañamiento de papas</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          name={name}
          control={form.control}
          render={() => (
            <RadioGroup
              value={selectedFry?.id || ""}
              onValueChange={handleFryChange}
            >
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
          )}
        />
      </CardContent>
    </Card>
  );
};

export default FriesOptions;
