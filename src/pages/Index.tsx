
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Modalities from "../components/Modalities";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  useEffect(() => {
    // Display a welcome toast when the page loads
    setTimeout(() => {
      toast({
        title: "Bem-vindo à PowerFit!",
        description: "Experimente uma aula grátis hoje mesmo.",
        duration: 5000,
      });
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Modalities />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
