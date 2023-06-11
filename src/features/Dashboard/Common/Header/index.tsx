"use client";
import { Routes } from "@/features/Common/types";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AvatarIcon from "./AvatarIcon";

function Header() {
  const pathName = usePathname();
  const [headerTitle, setHeaderTitle] = useState<string>("Dashboard");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    if (pathName === "/customers") {
      setHeaderTitle("Customers Demo");
    } else if (pathName === "/orders") {
      setHeaderTitle("Orders");
    } else if (pathName === "/products") {
      setHeaderTitle("Products");
    } else {
      setHeaderTitle("Dashboard Demo");
    }
    setShowDropdown(false);
  }, [pathName]);

  return (
    <section className="flex items-center justify-between px-4 pt-4">
      <h2 className="text-lg">{headerTitle}</h2>
      <AvatarIcon
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
    </section>
  );
}

export default Header;
