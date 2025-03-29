
import React from "react";
import { CheckCircle } from "lucide-react";
import AnimatedCard from "./ui/AnimatedCard";
import { useIsMobile } from "@/hooks/use-mobile";

const ForWhom = () => {
  const isMobile = useIsMobile();
  
  const profiles = [
    "Empreendedores que vendem pelo WhatsApp",
    "Negócios que precisam de um catálogo digital",
    "Empresas que buscam automação de atendimento",
    "Quem precisa de links personalizados e encurtados",
    "Microempreendedores iniciando no digital",
    "Negócios em crescimento que querem profissionalizar",
  ];

  return (
    <section id="for-whom" className="py-8 md:py-12 relative">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Para <span className="text-gradient">quem é</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-mk-accent to-mk-hover mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-mk-muted max-w-xl mx-auto px-3 text-sm sm:text-base animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Soluções adaptadas para diversos perfis de empreendedores
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-4xl mx-auto px-3 sm:px-0">
          {profiles.map((profile, index) => (
            <div 
              key={index}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${0.2 + 0.1 * index}s`, animationFillMode: "forwards" }}
            >
              <AnimatedCard className="flex items-start p-3 sm:p-4" hoverEffect={true}>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-mk-accent mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm sm:text-base">{profile}</p>
              </AnimatedCard>
            </div>
          ))}
        </div>

        <AnimatedCard 
          className="max-w-2xl mx-auto mt-8 sm:mt-12 text-center py-5 sm:py-8 px-4 animate-fade-up opacity-0" 
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          glowEffect={true}
        >
          <p className="text-base sm:text-lg mb-2">
            Você não se encaixou nessa lista, mas procura algum tipo de automação?
          </p>
          <p className="text-mk-accent font-medium text-sm sm:text-base">
            Fala com a gente. A gente cria junto, do seu jeito.
          </p>
        </AnimatedCard>
      </div>

      <div className="absolute top-40 right-5 sm:right-10 w-28 sm:w-40 h-28 sm:h-40 bg-mk-accent/20 rounded-full blur-[40px] sm:blur-[60px]"></div>
      <div className="absolute bottom-40 left-5 sm:left-10 w-28 sm:w-40 h-28 sm:h-40 bg-mk-accent/20 rounded-full blur-[40px] sm:blur-[60px]"></div>
    </section>
  );
};

export default ForWhom;
