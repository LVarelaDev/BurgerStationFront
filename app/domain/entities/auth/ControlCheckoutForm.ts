import { AdditionalsItems } from "@/components/core/check-out/CheckoutContainer";

export interface controlForm {
  customerNote: string;
  quantity: number;
  sauces: AdditionalsItems[];
  additions?: AdditionalsItems[] | undefined;
  fries?: AdditionalsItems;
  drink?: AdditionalsItems;
}
