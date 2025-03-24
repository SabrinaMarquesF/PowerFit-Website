
import React from "react";
import { Link } from "react-scroll";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  ChevronRight 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Início", to: "hero" },
    { name: "Sobre Nós", to: "about" },
    { name: "Modalidades", to: "modalities" },
    { name: "Planos", to: "pricing" },
    { name: "Depoimentos", to: "testimonials" },
    { name: "Contato", to: "contact" },
  ];

  const services = [
    "Musculação",
    "CrossFit",
    "Treino Funcional",
    "Yoga",
    "Pilates",
    "Avaliação Física",
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, url: "https://instagram.com" },
    { icon: <Facebook className="h-5 w-5" />, url: "https://facebook.com" },
    { icon: <Twitter className="h-5 w-5" />, url: "https://twitter.com" },
    { icon: <Youtube className="h-5 w-5" />, url: "https://youtube.com" },
  ];

  return (
    <footer className="bg-brand-black text-white pt-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-brand-red">POWER</span>FIT
            </h2>
            <p className="text-gray-400 mb-6">
              Transformando vidas através de treinamentos de qualidade, 
              profissionais especializados e uma comunidade incrível.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 hover:bg-brand-red p-2 rounded-full transition-colors duration-300"
                  aria-label={`Visite nossa página no ${social.url.split('.com')[0].split('https://')[1]}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-gray-400 hover:text-brand-red transition-colors flex items-center cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#modalities"
                    className="text-gray-400 hover:text-brand-red transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber novidades, promoções e dicas exclusivas.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-brand-red"
                />
                <button
                  type="submit"
                  className="bg-brand-red hover:bg-red-700 text-white px-4 py-3 rounded-r-lg transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              Ao se inscrever, você concorda com nossos termos e política de privacidade.
            </p>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center pb-8">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} PowerFit. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-brand-red text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-red text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-red text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
