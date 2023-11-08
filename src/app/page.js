"use client";
import Header from "./components/Header";
import Footer from "./components/footer";
import TaskContainer from "./components/TaskContainer";
import TitleBar from "./components/TitleBar";
import TaskFilter from "./components/TaskFilter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <TitleBar />
      <div className="container mx-auto mt-2 md:px-12">
        <TaskContainer />
        <Footer />
        <TaskFilter />
      </div>
    </main>
  );
}
