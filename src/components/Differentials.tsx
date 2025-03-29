
import React from "react";
import AnimatedCard from "./ui/AnimatedCard";
import { Users, Palette, MessageSquare, DollarSign, HeadphonesIcon, Smartphone, TrendingUp } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      title: "Mentalidade de sócio",
      description: "Entendemos seu negócio e crescemos junto com você",
      icon: <Users className="w-8 h-8 text-mk-accent" />,
    },
    {
      title: "Visual bonito, sem exagero",
      description: "Design moderno e profissional que valoriza sua marca",
      icon: <Palette className="w-8 h-8 text-mk-accent" />,
    },
    {
      title: "Pedido direto no WhatsApp",
      description: "Facilidade para seus clientes e controle para você",
      icon: <MessageSquare className="w-8 h-8 text-mk-accent" />,
    },
    {
      title: "Sem taxa por venda",
      description: "Preço fixo e previsível, sem surpresas na fatura",
      icon: <DollarSign className="w-8 h-8 text-mk-accent" />,
    },
    {
      title: "Suporte humano no WhatsApp",
      description: "Atendimento pessoal e ágil quando você precisar",
      icon: <HeadphonesIcon className="w-8 h-8 text-mk-accent" />,
    },
    {
      title: "Funciona no celular",
      description: "Gerencie seu negócio de qualquer lugar, a qualquer hora",
      icon: <Smartphone className="w-8 h-8 text-mk-accent" />,
    },
    {
      title: "Começa pequeno, cresce junto",
      description: "Soluções escaláveis que evoluem com seu negócio",
      icon: <TrendingUp className="w-8 h-8 text-mk-accent" />,
    },
  ];

  return (
    <section id="differentials" className="py-20 md:py-24 bg-gradient-to-b from-mk-bg/95 to-mk-bg relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mk-accent to-mk-hover mx-auto rounded-full mb-4"></div>
          <p className="text-mk-muted max-w-xl mx-auto">
            O que torna a MK CODE a parceira ideal para seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "forwards" }}
            >
              <AnimatedCard 
                className="h-full" 
                hoverEffect={true}
              >
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-mk-border/50 rounded-lg">
                    {differential.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{differential.title}</h3>
                    <p className="text-sm text-mk-muted">{differential.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-mk-bg to-transparent"></div>
    </section>
  );
};

export default Differentials;
