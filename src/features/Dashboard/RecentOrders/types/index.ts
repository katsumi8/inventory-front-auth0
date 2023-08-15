interface Order {
  id: number;
  createdAt: string;
  updatedAt: string;
  productName: string;
  supplier: string;
  additionalNotes?: string;
  status: string;
  quantity: number;
  userId?: string;
}

export interface OrderResponse {
  errors: string[];
  data: Order[];
}
