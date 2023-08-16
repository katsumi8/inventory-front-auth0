interface Order {
  id: number;
  createdAt: string;
  updatedAt: string;
  productName: string;
  supplier: string;
  additionalNotes?: string;
  status: string;
  quantity: number;
  userId: number;
}

export interface OrderResponse {
  data: Order[];
}
