import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container px-12 py-4 mx-auto mt-24">
        <Footer />
      </div>
    </main>
  );
}
