import React, { SetStateAction } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantitySectionPrps {
  quantity: number;
  setQuantity: (value: SetStateAction<number>) => void;
}

const QuantitySection = ({ quantity, setQuantity }: QuantitySectionPrps) => {
  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        disabled={quantity <= 1}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setQuantity(quantity + 1)}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default QuantitySection;
