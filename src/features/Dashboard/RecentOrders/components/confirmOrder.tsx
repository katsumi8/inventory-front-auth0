"use client";
import { useOrderStore } from "../store";

export const ConfirmOrder = () => {
  const order = useOrderStore((state) => state.order);
  console.log(order);
  return <div>ConfirmOrder</div>;
};
