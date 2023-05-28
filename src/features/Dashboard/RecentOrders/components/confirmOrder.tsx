"use client";
import { useOrderStore } from "../store";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const ConfirmOrder = () => {
  const router = useRouter();
  const orders = useOrderStore((state) => state.order);
  const confirmClick = async () => {
    try {
      console.log(orders);
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
        <div className="w-full p-4">
          <div className="grid grid-cols-4 gap-4">
            <p className="py-3 text-2xl text-blue-600">Product Name</p>{" "}
            <p className="py-3 text-2xl text-blue-600">Category</p>{" "}
            <p className="py-3 text-2xl text-blue-600">Quantity</p>{" "}
            <p className="py-3 text-2xl text-blue-600">Unit</p>
          </div>
          {orders &&
            orders.orderLines.map((field, index) => (
              <div key={index} className="flex items-center w-full">
                <div className="grid justify-between w-full grid-cols-4 gap-4 px-4 ">
                  <div>{field.productName}</div>
                  <div>{field.productCategory}</div>
                  <div>{field.quantity}</div>
                  <div>{field.unit}</div>
                </div>
              </div>
            ))}
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
