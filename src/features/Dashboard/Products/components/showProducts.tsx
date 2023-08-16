"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { MdOutlineFoodBank } from "react-icons/md";
import { getOrders } from "../../RecentOrders/api";

function ShowProducts() {
  const {
    isLoading,
    isError,
    data: orders,
  } = useQuery(["orders"], () => getOrders(), {
    select: (data) => data.data,
    retry: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  if (!orders) return <p>No products...</p>;

  return (
    <div className="p-4">
      <div className="w-full p-4 m-auto overflow-y-auto bg-white bproduct rounded-lg">
        <div className="grid items-center justify-between grid-cols-2 p-2 my-3 cursor-pointer md:grid-cols-4 sm:grid-cols-3">
          <span>Name</span>
          <span className="text-right sm:text-left">Supplier</span>
        </div>
        <ul>
          {orders.map((order, id) => (
            <li
              key={id}
              className="grid items-center justify-between grid-cols-2 p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 md:grid-cols-4 sm:grid-cols-3"
            >
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <MdOutlineFoodBank className="text-purple-800" />
                </div>
                <p className="pl-4">{order.productName}</p>
              </div>
              <p className="text-right text-gray-600 sm:text-left">
                {order.supplier}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShowProducts;
