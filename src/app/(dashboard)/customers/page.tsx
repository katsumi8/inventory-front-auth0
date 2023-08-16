import { data } from "@/data/data";
import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

function CustomerPage() {
  return (
    <div className="p-4">
      <div className="m-auto w-full overflow-y-auto rounded-lg border bg-white p-4">
        <div className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-4">
          <span>Name</span>
          <span className="text-right sm:text-left">Email</span>
          <span className="hidden md:grid">Last Order</span>
          <span className="hidden md:grid">Method</span>
        </div>
        <ul>
          {data.map((order, id) => (
            <li
              key={id}
              className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-4"
            >
              <div className="flex items-center">
                <div className="rounded-lg bg-purple-100 p-3">
                  <BsPersonFill className="text-purple-800" />
                </div>
                <p className="pl-4">
                  {order.name.first + " " + order.name.last}
                </p>
              </div>
              <p className="text-right text-gray-600 sm:text-left">
                {order.name.first}@gmail.com
              </p>
              <p className="hidden md:flex">{order.date}</p>
              <div className="hidden items-center justify-between sm:flex">
                <p>{order.method}</p>
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomerPage;
