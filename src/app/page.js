import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import TaskContainer from "./components/TaskContainer";
import TaskCard from "./components/TaskCard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container px-12 py-4 mx-auto mt-24">
        <TaskContainer />
        <TaskCard />
        <Footer />
      </div>
    </main>
  );
}
