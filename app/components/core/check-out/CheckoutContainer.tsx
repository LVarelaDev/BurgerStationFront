"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCalculateTotal } from "@/domain/hooks/checkout/useCalculateTotal";
import CustomerOptions from "./partials/CustomerOptions";
import DrinksOptions from "./partials/DrinksOptions";
import FriesOptions from "./partials/FriesOptions";
import ImgProduct from "./partials/ImgProduct";
import InvoiceInformation from "./partials/InvoiceInformation";
import ProductInformation from "./partials/ProductInformation";
import SaucesSelection from "./partials/SaucesSelection";

export const additions = [
  { id: "huevo", name: "Huevo frito", price: 1.0 },
  { id: "jalapenos", name: "Jalapeños", price: 0.5 },
  { id: "guacamole", name: "Guacamole", price: 1.5 },
  { id: "pina", name: "Piña caramelizada", price: 0.75 },
  { id: "queso", name: "Extra queso (cheddar/mozzarella)", price: 0.8 },
];

export const sauces = [
  { id: "ketchup", name: "Kétchup", price: 0 },
  { id: "mayonesa", name: "Mayonesa", price: 0 },
  { id: "mostaza", name: "Mostaza Dijón", price: 0 },
  { id: "bbq", name: "Salsa BBQ ahumada", price: 0.6 },
  { id: "mayo-picante", name: "Mayonesa picante", price: 0.6 },
];

export const fries = [
  { id: "casero", name: "Papas Fritas Corte Casero", price: 2.75 },
  { id: "cascos", name: "Papas en Cascos con Piel", price: 3.25 },
  { id: "batatas", name: "Batatas Fritas", price: 3.5 },
];

export const drinks = [
  { id: "limonada", name: "Limonada Natural", price: 2.25 },
  { id: "gaseosa", name: "Gaseosa (Cola, Naranja, Lima-Limón)", price: 2.0 },
  { id: "te", name: "Té Helado (Durazno/Limón)", price: 2.0 },
  { id: "agua", name: "Agua Embotellada", price: 1.5 },
  { id: "cerveza", name: "Cerveza Artesanal (sin alcohol)", price: 4.0 },
];
interface CheckoutContainerProps {
  id: number;
}
const CheckoutContainer = ({ id }: CheckoutContainerProps) => {
  const {
    calculateTotal,
    isComplete,
    setQuantity,
    setSelectedAdditions,
    setSelectedDrink,
    setSelectedFries,
    setSelectedSauces,
    quantity,
    selectedAdditions,
    selectedDrink,
    selectedFries,
    selectedSauces,
  } = useCalculateTotal();

  return (
    <Card className="mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <ImgProduct />
        <div className="space-y-6">
          <ProductInformation quantity={quantity} setQuantity={setQuantity} />
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Personaliza tu hamburgesa</AccordionTrigger>
              <AccordionContent>
                <CustomerOptions
                  selectedAdditions={selectedAdditions}
                  setSelectedAdditions={setSelectedAdditions}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Selección de salsas</AccordionTrigger>
              <AccordionContent>
                <SaucesSelection
                  selectedSauces={selectedSauces}
                  setSelectedSauces={setSelectedSauces}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Selección de papas</AccordionTrigger>
              <AccordionContent>
                <FriesOptions
                  selectedFries={selectedFries}
                  setSelectedFries={setSelectedFries}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Selección de bebidas</AccordionTrigger>
              <AccordionContent>
                <DrinksOptions
                  selectedDrink={selectedDrink}
                  setSelectedDrink={setSelectedDrink}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Separator />
          <InvoiceInformation
            calculateTotal={calculateTotal}
            isComplete={isComplete}
          />
        </div>
      </div>
    </Card>
  );
};

export default CheckoutContainer;
