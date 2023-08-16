"use client";
import { useOrderStore } from "../../store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCreateOrder } from "../../hooks/useCreateOrder";
import { getUser } from "@/utils/getUser";

export const ConfirmOrder = () => {
  const router = useRouter();
  const orders = useOrderStore((state) => state.order);
  const { createOrder } = useCreateOrder();
  const { user, isLoading } = getUser();

  if (isLoading)
    return (
      <div className="m-auto h-[90vh] w-full overflow-y-auto rounded-lg bg-white p-4">
        Loading...
      </div>
    );

  if (!user || !orders) {
    return (
      <div className="m-auto flex h-[90vh] w-full flex-col overflow-y-auto rounded-lg bg-white p-4">
        <p className="p-4">no user or orders</p>
        <Link
          href="/orders/new"
          className="w-28 rounded-xl bg-gray-400 p-2 text-center uppercase text-white shadow-gray-400 hover:text-blue-200"
        >
          {"< Back"}
        </Link>
      </div>
    );
  }

  const confirmClick = async () => {
    try {
      await createOrder({
        ProductName: orders.productName,
        Quantity: orders.quantity,
        Supplier: orders.supplier,
        UserID: Number(user.id),
      });
      router.push("/orders");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-auto h-[90vh] w-full overflow-y-auto rounded-lg bg-white p-4">
      <div className="py-4">
        <p className="border-b-2 border-gray-100 py-1">Confirm your order</p>
      </div>
      <div className="m-auto flex w-[80%] flex-col items-center justify-center py-1">
        <div className="flex w-full">
          <div className="flex w-full items-center px-4">
            <p className="text-2xl text-blue-600">Supplier: </p>
            <p className="px-4">{orders?.supplier}</p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-full items-center px-4">
            <p className="text-2xl text-blue-600">Product: </p>
            <p className="px-4">{orders?.productName}</p>
            <p className="text-2xl text-blue-600">Quantity: </p>
            <p className="px-4">{orders?.quantity}</p>
          </div>
        </div>
        <div className="flex w-full flex-row-reverse">
          <button
            type="submit"
            className="mx-2 rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] p-3 px-4 uppercase text-white shadow-xl shadow-gray-400 hover:text-blue-200"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={confirmClick}
          >
            confirm
          </button>
          <Link
            href="/orders/new"
            className="mx-2 w-28 rounded-xl bg-gray-400 p-3 px-4 text-center uppercase text-white shadow-xl shadow-gray-400 hover:text-blue-200"
          >
            {"< Back"}
          </Link>
        </div>
      </div>
    </div>
  );
};
