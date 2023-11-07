"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
//import TaskContainer from "./components/TaskContainer";
import TaskContainer2 from "./components/TaskContainer2";
import NavbarProject from "./components/NavbarProject";
import AddTask from "./components/AddTask"; // Importing the AddTask component
import TaskFilter from "./components/TaskFilter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <NavbarProject />
      <div className="container px-12 py-4 mx-auto mt-6">
        {/*<TaskContainer />*/}
        <TaskContainer2 />
        <AddTask /> {/* Temporarily adding the AddTask component here */}
        <Footer />
        <TaskFilter />
      </div>
    </main>
  );
}
