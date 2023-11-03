import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import TaskContainer from "./components/TaskContainer";
import TaskCard from "./components/TaskCard";
import NavbarProject from "./components/NavbarProject";
import AddTask from "./components/AddTask"; // Importing the AddTask component

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <NavbarProject />
      <div className="container px-12 py-4 mx-auto mt-24">
        <TaskContainer />
        <AddTask /> {/* Temporarily adding the AddTask component here */}
        <Footer />
      </div>
    </main>
  );
}
