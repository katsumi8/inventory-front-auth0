"use client";
import { useQuery } from "@tanstack/react-query";
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

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error...</p>;
  }
  if (!orders) {
    return <p>No products...</p>;
  }

  return (
    <div className="p-4">
      <div className="bproduct m-auto w-full overflow-y-auto rounded-lg bg-white p-4">
        <div className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-4">
          <span>Name</span>
          <span className="text-right sm:text-left">Supplier</span>
        </div>
        <ul>
          {orders.map((order, id) => (
            <li
              key={id}
              className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-4"
            >
              <div className="flex items-center">
                <div className="rounded-lg bg-purple-100 p-3">
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
