import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="justify-center p-8 text-center bg-slate-500">
      <Image src="/tasky-200-w-t.png" width={150} height={131} alt="Tasky logo" />
    </nav>
  );
};


export default Header;