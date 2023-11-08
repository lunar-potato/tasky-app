"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskContainer from "./components/TaskContainer";
import TitleBar from "./components/TitleBar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <TitleBar />
      <div className="container mx-auto md:px-12">
        <TaskContainer />
        <Footer />
      </div>
    </main>
  );
}
