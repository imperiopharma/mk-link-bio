
import React from "react";
import { Github, Instagram, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mk-bg border-t border-mk-border/30 py-8 sm:py-12">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <img
            src="/lovable-uploads/122bf2f3-db17-44f6-a7c6-1bb03f153910.png"
            alt="MK CODE"
            className="h-8 sm:h-12 mb-5 sm:mb-6"
          />
          
          <div className="flex items-center space-x-5 sm:space-x-6 mb-6 sm:mb-8">
            <a href="#" className="text-mk-muted hover:text-mk-accent transition-colors p-2">
              <MessageSquare className="w-5 h-5" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="#" className="text-mk-muted hover:text-mk-accent transition-colors p-2">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-mk-muted hover:text-mk-accent transition-colors p-2">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
          
          <div className="text-center px-4">
            <p className="text-xs sm:text-sm text-mk-muted">
              &copy; {currentYear} MK CODE. Todos os direitos reservados.
            </p>
            <p className="text-xs text-mk-muted/60 mt-2">
              Soluções digitais com identidade para seu negócio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
