import React from "react";
import CartCount from "~/components/CartCount";
import ShopLogo from "~/components/ShopLogo";

const Navbar = () => {
  return (
    <div className="flex w-full content-between items-center justify-between bg-gray-700 p-2 text-white">
      <ShopLogo />
      <CartCount />
    </div>
  );
};

export default Navbar;
