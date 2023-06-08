import { data } from "@/data/data";
import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { MdOutlineFoodBank } from "react-icons/md";

function ProductPage() {
  return (
    <div className="p-4">
      <div className="flex-row-reverse pb-4 flex">
        <Link href="/products/new">
          <div className="items-center hidden p-3 font-bold text-white bg-blue-500 rounded-full sm:flex">
            <CgMathPlus className="text-white" size={30} />
            <p className="">Add Product</p>
          </div>
        </Link>
      </div>

      <div className="w-full p-4 m-auto overflow-y-auto bg-white border rounded-lg">
        <div className="grid items-center justify-between grid-cols-2 p-2 my-3 cursor-pointer md:grid-cols-4 sm:grid-cols-3">
          <span>Name</span>
          <span className="text-right sm:text-left">Category</span>
          <span className="hidden md:grid">Stocks</span>
          <span className="hidden md:grid">Price</span>
        </div>
        <ul>
          {data.map((order, id) => (
            <li
              key={id}
              className="grid items-center justify-between grid-cols-2 p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 md:grid-cols-4 sm:grid-cols-3"
            >
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <MdOutlineFoodBank className="text-purple-800" />
                </div>
                <p className="pl-4">
                  {order.name.first + " " + order.name.last}
                </p>
              </div>
              <p className="text-right text-gray-600 sm:text-left">
                {order.name.first}@gmail.com
              </p>
              <p className="hidden md:flex">{order.date}</p>
              <div className="items-center justify-between hidden sm:flex">
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

export default ProductPage;
