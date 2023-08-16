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
      <div className="w-full p-4 m-auto overflow-y-auto bg-white rounded-lg h-[90vh]">
        Loading...
      </div>
    );

  if (!user || !orders) {
    return (
      <div className="w-full p-4 m-auto overflow-y-auto bg-white rounded-lg h-[90vh] flex flex-col">
        <p className="p-4">no user or orders</p>
        <Link
          href="/orders/new"
          className="p-2 text-center text-white uppercase bg-gray-400 w-28 shadow-gray-400 rounded-xl hover:text-blue-200"
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
    <div className="w-full p-4 m-auto overflow-y-auto bg-white rounded-lg h-[90vh]">
      <div className="py-4">
        <p className="py-1 border-b-2 border-gray-100">Confirm your order</p>
      </div>
      <div className="flex flex-col items-center justify-center w-[80%] py-1 m-auto">
        <div className="flex w-full">
          <div className="w-full px-4 flex items-center">
            <p className="text-2xl text-blue-600">Supplier: </p>
            <p className="px-4">{orders?.supplier}</p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-full px-4 flex items-center">
            <p className="text-2xl text-blue-600">Product: </p>
            <p className="px-4">{orders?.productName}</p>
            <p className="text-2xl text-blue-600">Quantity: </p>
            <p className="px-4">{orders?.quantity}</p>
          </div>
        </div>
        <div className="flex flex-row-reverse w-full">
          <button
            type="submit"
            className="mx-2 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-xl shadow-gray-400 rounded-xl uppercase p-3 px-4 hover:text-blue-200"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={confirmClick}
          >
            confirm
          </button>
          <Link
            href="/orders/new"
            className="p-3 px-4 mx-2 text-center text-white uppercase bg-gray-400 shadow-xl w-28 shadow-gray-400 rounded-xl hover:text-blue-200"
          >
            {"< Back"}
          </Link>
        </div>
      </div>
    </div>
  );
};
