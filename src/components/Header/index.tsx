"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeaderPT from "./Presenter";

function Header() {
  const pathName = usePathname();
  const [headerTitle, setHeaderTitle] = useState<string>("Dashboard");

  console.log(pathName === "/customers");
  useEffect(() => {
    if (pathName === "/customers") {
      setHeaderTitle("Customers");
    } else if (pathName === "/orders") {
      setHeaderTitle("Orders");
    } else {
      setHeaderTitle("Dashboard");
    }
  }, [pathName]);

  return <HeaderPT headerTitle={headerTitle} />;
}

export default Header;
