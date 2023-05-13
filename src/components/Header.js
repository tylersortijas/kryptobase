import React, { useEffect, useState } from "react";
import { FaBtc } from "react-icons/fa";

function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white p-4 shadow-md" : "bg-none p-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="h-full container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <FaBtc className="text-white text-3xl" />
          <h2
            className={`${
              isActive ? "text-cyan-400" : "text-white"
            } uppercase font-semibold text-xl`}
          >
            KryptoBase
          </h2>
        </div>
        <button
          className={`${
            isActive
              ? "text-cyan-400 border-cyan-400 hover:text-cyan-300 hover:border-cyan-300"
              : "text-white hover:bg-red-600"
          } uppercase border-2 rounded-full py-2 px-4 text-sm`}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
