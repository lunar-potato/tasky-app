import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import TaskContainer from "./components/TaskContainer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container px-12 py-4 mx-auto mt-24">
        <TaskContainer />
        <Footer />
      </div>
    </main>
  );
}

