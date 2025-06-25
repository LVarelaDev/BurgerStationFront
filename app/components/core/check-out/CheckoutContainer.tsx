"use client";
import { BurgersEndpointEnum } from "@/Infrastructure/services/burgers/BurgersEndpointEnum";
import { getBurgerById } from "@/Infrastructure/services/burgers/getBugerById";
import { createOrder } from "@/Infrastructure/services/checkout/CreateOrderService";
import InputText from "@/components/ui/Inputs/InputText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  formSchema,
  FormValues,
} from "@/domain/constants/schemas/OrderFormSchema";
import {
  CreateOrderRequest,
  OrderStatus,
} from "@/domain/entities/checkout/CreateOrderDto";
import { useCalculateTotal } from "@/domain/hooks/checkout/useCalculateTotal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";
import CustomerOptions from "./partials/CustomerOptions";
import DrinksOptions from "./partials/DrinksOptions";
import FriesOptions from "./partials/FriesOptions";
import ImgProduct from "./partials/ImgProduct";
import InvoiceInformation from "./partials/InvoiceInformation";
import ProductInformation from "./partials/ProductInformation";
import SaucesSelection from "./partials/SaucesSelection";

export interface AdditionalsItems {
  id: string;
  name: string;
  price: number;
}

interface CheckoutContainerProps {
  id: number;
}

const CheckoutContainer = ({ id }: CheckoutContainerProps) => {
  const router = useRouter();
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
      additions: [],
      sauces: [],
      fries: {},
      drink: {},
      customerNote: "",
    },
  });

  const { data, isLoading } = useSWR([BurgersEndpointEnum.burgers, id], () =>
    getBurgerById(id)
  );

  const { calculateTotal, mapToCustomizations } = useCalculateTotal({
    fries: data?.additionalsItem?.fries ?? [],
    drinks: data?.additionalsItem?.drinks ?? [],
  });

  const handleCreateOrder = (formData: FormValues) => {
    const total = +calculateTotal(data.burger, formData).toFixed(2);

    const payload: CreateOrderRequest = {
      status: OrderStatus.PENDING,
      total: total,
      customerNote: formData.customerNote,
      items: [
        {
          burgerId: id,
          price: data.burger.price,
          quantity: formData.quantity,
          customizations: mapToCustomizations(
            formData.additions ?? [],
            formData.sauces,
            formData.fries,
            formData.drink
          ),
        },
      ],
    };

    toast.promise(createOrder(payload), {
      loading: "Creando orden...",
      success: (res) => {
        router.push("/");
        return "Orden creada correctamente";
      },
      error: "Error al crear orden",
    });
  };

  if (isLoading || !data) return <div>Loading...</div>;
  console.log("method.getValues()", methods.getValues());
  return (
    <Card className="mx-auto p-4">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleCreateOrder)}
          className="grid md:grid-cols-2 gap-8"
        >
          <ImgProduct />
          <div className="space-y-6">
            <ProductInformation form={methods} burger={data.burger} />

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Personaliza tu hamburgesa</AccordionTrigger>
                <AccordionContent>
                  <>
                    {data.additionalsItem && data.additionalsItem.additions && (
                      <CustomerOptions
                        form={methods}
                        additions={data.additionalsItem.additions}
                      />
                    )}
                  </>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Selección de salsas</AccordionTrigger>
                <AccordionContent>
                  <>
                    {data.additionalsItem && data.additionalsItem.sauces && (
                      <SaucesSelection
                        form={methods}
                        sauces={data.additionalsItem.sauces}
                      />
                    )}
                  </>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Selección de papas</AccordionTrigger>
                <AccordionContent>
                  <>
                    {data.additionalsItem && data.additionalsItem.fries && (
                      <FriesOptions
                        form={methods}
                        fries={data.additionalsItem.fries}
                      />
                    )}
                  </>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Selección de bebidas</AccordionTrigger>
                <AccordionContent>
                  <>
                    {data.additionalsItem && data.additionalsItem.drinks && (
                      <DrinksOptions
                        form={methods}
                        drinks={data.additionalsItem.drinks}
                      />
                    )}
                  </>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Separator />
            <div className="flex flex-col gap-1">
              <InputText
                name="customerNote"
                control={methods.control}
                label="Nota adicional"
              />
            </div>
            <InvoiceInformation
              burger={data.burger}
              calculateTotal={(burger) =>
                calculateTotal(burger, methods.getValues())
              }
            />
            <Button type="submit" className="w-full" size="lg">
              Crear orden
            </Button>
          </div>
        </form>
      </FormProvider>
    </Card>
  );
};

export default CheckoutContainer;
