import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import TaskContainer from "./components/TaskContainer";
import TaskCard from "./components/TaskCard";
import NavbarProject from "./components/NavbarProject";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <NavbarProject />
      <div className="container px-12 py-4 mx-auto mt-24">
        <TaskContainer />
        <Footer />
      </div>
    </main>
  );
}
