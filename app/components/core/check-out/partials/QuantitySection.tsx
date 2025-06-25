"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormField } from "@/components/ui/form";

interface QuantitySectionProps {
  form: UseFormReturn<any>;
}

const QuantitySection = ({ form }: QuantitySectionProps) => {
  const name = "quantity";
  const quantity = form.watch(name) || 1;

  const handleChange = (newQuantity: number) => {
    form.setValue(name, newQuantity, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <FormField
      name={name}
      control={form.control}
      render={() => (
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleChange(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            type="button"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-xl font-semibold w-12 text-center">
            {quantity}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleChange(quantity + 1)}
            type="button"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      )}
    />
  );
};

export default QuantitySection;
