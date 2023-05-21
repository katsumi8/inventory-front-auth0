import { create } from "zustand";

type OrderInfo = {
  supplier: string;
  additionalNotes?: string;
  orderLines: {
    productName: string;
    productCategory: string;
    quantity: number;
    unit: string;
  }[];
};

interface OrderStore {
  order: OrderInfo | null;
  setOrder: (order: OrderInfo) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  order: null,
  setOrder: (order) => set((state) => ({ ...state, order: order })),
}));
