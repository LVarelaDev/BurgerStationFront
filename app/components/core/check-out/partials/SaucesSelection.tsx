import React, { Dispatch, SetStateAction } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { sauces } from "../CheckoutContainer";
import { Label } from "@/components/ui/label";

interface SoucesSelectionProps {
  selectedSauces: string[];
  setSelectedSauces: Dispatch<SetStateAction<string[]>>;
}

const SaucesSelection = ({
  selectedSauces,
  setSelectedSauces,
}: SoucesSelectionProps) => {
  const handleSauceChange = (sauceId: string, checked: boolean) => {
    if (checked && selectedSauces.length < 2) {
      setSelectedSauces([...selectedSauces, sauceId]);
    } else if (!checked) {
      setSelectedSauces(selectedSauces.filter((id) => id !== sauceId));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Selección de Salsas
          <Badge variant="secondary">{selectedSauces.length}/2</Badge>
        </CardTitle>
        <CardDescription>Elige hasta 2 salsas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {sauces.map((sauce) => (
          <div key={sauce.id} className="flex items-center space-x-2">
            <Checkbox
              id={sauce.id}
              checked={selectedSauces.includes(sauce.id)}
              onCheckedChange={(checked) =>
                handleSauceChange(sauce.id, checked as boolean)
              }
              disabled={
                !selectedSauces.includes(sauce.id) && selectedSauces.length >= 2
              }
            />
            <Label htmlFor={sauce.id} className="flex-1 cursor-pointer">
              {sauce.name}
            </Label>
            <span className="font-medium">
              {sauce.price === 0 ? "Gratis" : `+$${sauce.price.toFixed(2)}`}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SaucesSelection;
