import React from "react";
import RecentOrdersPT from "./Presenter";
import { data } from "@/data/data";
import { FaShoppingBag } from "react-icons/fa";

function RecentOrders() {
  return <RecentOrdersPT data={data} />;
}

export default RecentOrders;
