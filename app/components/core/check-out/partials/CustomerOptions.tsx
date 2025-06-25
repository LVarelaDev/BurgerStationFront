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
import { UseFormReturn, useWatch } from "react-hook-form";
import { AdditionalsItems } from "../CheckoutContainer";
import { FormValues } from "@/domain/constants/schemas/OrderFormSchema";

interface CustomerOptionsProps {
  form: UseFormReturn<FormValues>;
  maxSelections?: number;
  additions: AdditionalsItems[];
}

const CustomerOptions = ({
  form,
  maxSelections = 3,
  additions,
}: CustomerOptionsProps) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = form;

  const name = "additions";
  const selectedAdditions = useWatch({ name, control }) || [];

  const handleAdditionChange = (
    addition: (typeof additions)[number],
    checked: boolean
  ) => {
    const currentAdditions = selectedAdditions;

    if (checked) {
      setValue(
        name,
        [
          ...currentAdditions,
          {
            id: Number(addition.id),
            name: addition.name,
            price: addition.price,
          },
        ],
        {
          shouldValidate: true,
        }
      );
    } else {
      setValue(
        name,
        currentAdditions.filter((item) => item.id !== Number(addition.id)),
        { shouldValidate: true }
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Opciones de Personalización
          <Badge variant="secondary">
            {selectedAdditions.length}/{maxSelections}
          </Badge>
        </CardTitle>
        <CardDescription>
          Selecciona hasta {maxSelections} adiciones
          {errors.additions && (
            <span className="text-red-500 text-sm ml-2">asd</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {additions.map((addition) => (
          <div key={addition.id} className="flex items-center space-x-2">
            <FormField
              name={name}
              control={control}
              render={({ field }) => (
                <Checkbox
                  id={addition.id}
                  checked={selectedAdditions.some(
                    (item: any) => item.id === addition.id
                  )}
                  onCheckedChange={(checked) =>
                    handleAdditionChange(addition, checked as boolean)
                  }
                  disabled={
                    !selectedAdditions.some(
                      (item: any) => item.id === addition.id
                    ) && selectedAdditions.length >= maxSelections
                  }
                />
              )}
            />
            <Label htmlFor={addition.id} className="flex-1 cursor-pointer">
              {addition.name}
            </Label>
            <span className="font-medium">+${addition.price.toFixed(2)}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CustomerOptions;
