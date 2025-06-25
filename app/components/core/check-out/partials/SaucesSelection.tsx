"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { FormValues } from "@/domain/constants/schemas/OrderFormSchema";
import { UseFormReturn, useWatch } from "react-hook-form";
import { AdditionalsItems } from "../CheckoutContainer";

const MAX_SAUCES = 2;

interface SaucesSelectionProps {
  form: UseFormReturn<FormValues>;
  sauces: AdditionalsItems[];
}

const SaucesSelection = ({ form, sauces }: SaucesSelectionProps) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = form;

  const name = "sauces";
  const selectedSauces = useWatch({ name, control }) || [];

  const handleSauceChange = (
    sauce: (typeof sauces)[number],
    checked: boolean
  ) => {
    if (checked) {
      setValue(
        name,
        [
          ...selectedSauces,
          { id: Number(sauce.id), name: sauce.name, price: sauce.price },
        ],
        { shouldValidate: true }
      );
    } else {
      setValue(
        name,
        selectedSauces.filter((item: any) => item.id !== sauce.id),
        { shouldValidate: true }
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Selección de Salsas
          <Badge variant="secondary">
            {selectedSauces.length}/{MAX_SAUCES}
          </Badge>
        </CardTitle>
        <CardDescription>
          Elige hasta {MAX_SAUCES} salsas
          {errors.sauces && (
            <span className="text-red-500 text-sm ml-2">
              Selecciona máximo 2
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {sauces.map((sauce) => {
          const isChecked = selectedSauces.some(
            (item: any) => item.id === sauce.id
          );
          const isDisabled = !isChecked && selectedSauces.length >= MAX_SAUCES;

          return (
            <div key={sauce.id} className="flex items-center space-x-2">
              <FormField
                name={name}
                control={control}
                render={() => (
                  <Checkbox
                    id={sauce.id}
                    checked={isChecked}
                    onCheckedChange={(checked) =>
                      handleSauceChange(sauce, checked as boolean)
                    }
                    disabled={isDisabled}
                  />
                )}
              />
              <Label htmlFor={sauce.id} className="flex-1 cursor-pointer">
                {sauce.name}
              </Label>
              <span className="font-medium">
                {sauce.price === 0 ? "Gratis" : `+$${sauce.price.toFixed(2)}`}
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default SaucesSelection;
