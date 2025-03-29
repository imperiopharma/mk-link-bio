
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import ForWhom from "@/components/ForWhom";
import Differentials from "@/components/Differentials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "MK CODE | Soluções digitais com identidade";
  }, []);

  // Observer for animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll(".animate-fade-up");
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen bg-mk-bg text-mk-text overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <ForWhom />
      <Differentials />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
