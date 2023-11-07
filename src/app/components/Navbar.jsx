import React from "react";

function Navbar() {
  return (
    <nav className="nav justify-center p-8 text-center bg-slate-500">
    <img className="inline" src="./tasky-200-w-t.png" width="150" alt="Tasky logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;