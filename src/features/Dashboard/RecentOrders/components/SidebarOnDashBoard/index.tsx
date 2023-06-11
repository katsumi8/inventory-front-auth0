"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { getOrders } from "../../api";

function RecentOrdersOnSidebar() {
  const {
    isLoading,
    isError,
    data: orders,
  } = useQuery(["orders"], () => getOrders(), {
    select: (data) => data.data,
    cacheTime: 0,
    retry: false,
  });
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript.
    const yy = String(date.getFullYear()).slice(-2); // Get last two digits of year.

    return `${dd}.${mm}.${yy}`;
  };
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  if (!orders) return <p>No orders found</p>;

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {orders.map((order, id) => {
          return (
            <li
              key={id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
            >
              <div className="bg-purple-100 rounded-lg p-3">
                <FaShoppingBag className="text-purple-800" />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">
                  {order.orderLines
                    .map(
                      (orderLine) =>
                        orderLine.product.purchasePrice * orderLine.quantity
                    )
                    .reduce((a, b) => a + b, 0)}{" "}
                  €
                </p>
              </div>
              <p className="lg:flex md:hidden absolute right-6 text-sm">
                {formatDate(order.createdAt)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecentOrdersOnSidebar;
