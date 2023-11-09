"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import TitleBar from "./components/TitleBar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <TitleBar />
      <div className="mx-auto lg:container md:px-2 lg:px-4 xl:px-12">
        <Container />
        <Footer />
      </div>
    </main>
  );
}
