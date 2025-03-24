
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-brand-black relative flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="People training in gym"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block animate-fade-in px-3 py-1 mb-6 bg-brand-red text-white text-sm font-semibold rounded-full">
            SEU POTENCIAL NÃO TEM LIMITES
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in [animation-delay:200ms]">
            TRANSFORME SEU CORPO, <br />
            <span className="text-brand-red">TRANSFORME SUA VIDA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in [animation-delay:400ms]">
            Na PowerFit, não oferecemos apenas treinamento - oferecemos uma transformação
            completa. Nossa academia combina equipamentos de última geração,
            profissionais qualificados e programas personalizados para
            maximizar seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms]">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center justify-center transition-colors duration-300 hover-elevate"
            >
              Agende uma Aula Grátis
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-transparent border-2 border-white hover:border-brand-red text-white hover:text-brand-red font-bold py-3 px-8 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover-elevate"
            >
              Conheça Mais
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-white text-sm mb-2">Scroll</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
