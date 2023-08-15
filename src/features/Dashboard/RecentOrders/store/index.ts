import { create } from "zustand";

type OrderInfo = {
  supplier: string;
  productName: string;
  quantity: number;
  additionalNotes?: string;
};

interface OrderStore {
  order: OrderInfo | null;
  setOrder: (order: OrderInfo) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  order: null,
  setOrder: (order) => set((state) => ({ ...state, order: order })),
}));
