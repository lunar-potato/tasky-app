import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="justify-center p-8 text-center bg-slate-500">
      <Image src="/tasky-200-w-t.png" alt="Tasky logo" width={150} height={150} />
    </nav>
  );
};

export default Navbar;
