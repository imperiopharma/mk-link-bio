
import React from "react";
import ButtonMk from "./ui/ButtonMk";
import { MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CTASection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center relative z-10 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Pronto pra tirar seu negócio do improviso e dar o <span className="text-gradient">próximo passo</span>?
          </h2>
          
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <ButtonMk 
              variant="primary" 
              size={isMobile ? "md" : "lg"}
              icon={<MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />}
              className="animate-bounce-subtle"
            >
              Falar agora com a MK CODE
            </ButtonMk>
          </div>
        </div>
      </div>
      
      {/* Elementos de fundo */}
      <div className="absolute -top-40 -right-20 sm:-right-40 w-60 sm:w-80 h-60 sm:h-80 bg-mk-accent/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-40 -left-20 sm:-left-40 w-60 sm:w-80 h-60 sm:h-80 bg-mk-accent/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse"></div>
      
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-mk-border/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-mk-border/30 to-transparent"></div>
      
      <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-2 h-2 sm:w-3 sm:h-3 bg-mk-accent/70 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 bg-mk-accent/70 rounded-full animate-ping opacity-75" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default CTASection;
