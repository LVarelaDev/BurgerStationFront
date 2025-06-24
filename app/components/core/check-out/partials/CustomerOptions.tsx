import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { Dispatch, SetStateAction, useState } from "react";
import { additions } from "../CheckoutContainer";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CustomerOptionsProps {
  setSelectedAdditions: Dispatch<SetStateAction<string[]>>;
  selectedAdditions: string[];
}

const CustomerOptions = ({
  setSelectedAdditions,
  selectedAdditions,
}: CustomerOptionsProps) => {
  const handleAdditionChange = (additionId: string, checked: boolean) => {
    if (checked && selectedAdditions.length < 3) {
      setSelectedAdditions([...selectedAdditions, additionId]);
    } else if (!checked) {
      setSelectedAdditions(selectedAdditions.filter((id) => id !== additionId));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Opciones de Personalización
          <Badge variant="secondary">{selectedAdditions.length}/3</Badge>
        </CardTitle>
        <CardDescription>Selecciona hasta 3 adiciones</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {additions.map((addition) => (
          <div key={addition.id} className="flex items-center space-x-2">
            <Checkbox
              id={addition.id}
              checked={selectedAdditions.includes(addition.id)}
              onCheckedChange={(checked) =>
                handleAdditionChange(addition.id, checked as boolean)
              }
              disabled={
                !selectedAdditions.includes(addition.id) &&
                selectedAdditions.length >= 3
              }
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
