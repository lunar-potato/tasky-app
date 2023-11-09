import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="p-8 bg-slate-500">
      <div className="container flex justify-center mx-auto px-14">
        <Image src="/tasky-200-w-t.png" width={150} height={131} alt="Tasky logo" />
      </div>
    </header>
  );
};

export default Header;