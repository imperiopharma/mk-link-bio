
import React from "react";
import AnimatedCard from "./ui/AnimatedCard";
import { Zap, Palette, LayoutList } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Sobre a <span className="text-gradient">MK CODE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mk-accent to-mk-hover mx-auto rounded-full mb-6"></div>
        </div>

        <AnimatedCard className="max-w-3xl mx-auto backdrop-blur-xl animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <p className="text-lg text-center leading-relaxed mb-4">
            A MK CODE é uma empresa de automações e tecnologia que existe pra 
            <span className="text-gradient font-medium"> melhorar a vida de quem empreende</span>.
          </p>
          <p className="text-lg text-center leading-relaxed">
            Criamos ferramentas que ajudam desde quem tá começando até empresas já consolidadas
            — com foco em loja, atendimento e experiência real do cliente.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <div className="w-16 h-16 bg-mk-border/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-mk-accent" />
              </div>
              <h3 className="font-semibold mb-1">Automação</h3>
              <p className="text-sm text-mk-muted">Processos otimizados</p>
            </div>
            
            <div className="text-center animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <div className="w-16 h-16 bg-mk-border/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Palette className="w-8 h-8 text-mk-accent" />
              </div>
              <h3 className="font-semibold mb-1">Identidade</h3>
              <p className="text-sm text-mk-muted">Visual personalizado</p>
            </div>
            
            <div className="text-center animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="w-16 h-16 bg-mk-border/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <LayoutList className="w-8 h-8 text-mk-accent" />
              </div>
              <h3 className="font-semibold mb-1">Simplicidade</h3>
              <p className="text-sm text-mk-muted">Fácil de usar</p>
            </div>
          </div>
        </AnimatedCard>
      </div>
      
      {/* Elementos de fundo */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mk-border to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mk-border to-transparent"></div>
    </section>
  );
};

export default About;
