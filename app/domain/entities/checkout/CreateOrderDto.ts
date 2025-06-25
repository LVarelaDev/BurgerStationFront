export enum OrderStatus {
  PENDING = "PENDING",
  IN_PROCESS = "IN PROCESS",
  COMPLETED = "COMPLETED",
}

export interface OrderItemCustomization {
  customizationOptionId: number;
  price: number;
}

export interface OrderItem {
  burgerId: number;
  quantity: number;
  price: number;
  customizations: OrderItemCustomization[];
}

export interface CreateOrderRequest {
  total: number;
  status: OrderStatus;
  customerNote?: string;
  items: OrderItem[];
}
