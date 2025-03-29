
import React from "react";
import ButtonMk from "./ui/ButtonMk";
import { MessageSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Pronto pra tirar seu negócio do improviso e dar o <span className="text-gradient">próximo passo</span>?
          </h2>
          
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <ButtonMk 
              variant="primary" 
              size="lg" 
              icon={<MessageSquare className="w-5 h-5" />}
              className="animate-bounce-subtle"
            >
              Falar agora com a MK CODE
            </ButtonMk>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-mk-accent/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-mk-accent/10 rounded-full blur-[100px] animate-pulse"></div>
      
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-mk-border/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-mk-border/30 to-transparent"></div>
      
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-mk-accent/70 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-10 right-10 w-3 h-3 bg-mk-accent/70 rounded-full animate-ping opacity-75" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default CTASection;
