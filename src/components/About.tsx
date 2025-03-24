
import React from "react";
import { Target, Trophy, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="h-10 w-10 text-brand-red" />,
      title: "Treinamento Personalizado",
      description:
        "Programas sob medida para seus objetivos específicos, com acompanhamento contínuo.",
    },
    {
      icon: <Clock className="h-10 w-10 text-brand-red" />,
      title: "Aberto 24 Horas",
      description:
        "Treinos em qualquer horário, adaptados à sua rotina e disponibilidade.",
    },
    {
      icon: <Users className="h-10 w-10 text-brand-red" />,
      title: "Instrutores Especializados",
      description:
        "Time de profissionais qualificados, prontos para guiar sua jornada fitness.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-brand-red" />,
      title: "Resultados Garantidos",
      description:
        "Metodologia comprovada que assegura evolução consistente e sustentável.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 bg-brand-gray text-brand-red text-sm font-semibold rounded-full animate-fade-in">
            SOBRE NÓS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4 animate-fade-in [animation-delay:200ms]">
            Bem-vindo à <span className="text-brand-red">POWER</span>FIT
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg animate-fade-in [animation-delay:400ms]">
            Há mais de 10 anos transformando vidas através de treinamento de
            qualidade, suporte personalizado e uma comunidade inspiradora.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in [animation-delay:600ms]">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-red rounded-lg opacity-25"></div>
            <img
              src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
              alt="Interior da academia"
              className="w-full h-auto rounded-lg shadow-xl relative z-10"
            />
          </div>

          <div className="animate-fade-in [animation-delay:800ms]">
            <h3 className="text-2xl font-bold text-brand-black mb-6">
              Nossa Missão
            </h3>
            <p className="text-gray-600 mb-6">
              A PowerFit nasceu da paixão por transformar vidas através do
              fitness. Acreditamos que a atividade física vai além da estética -
              é uma jornada de superação, saúde e bem-estar. Nossa missão é
              proporcionar um ambiente de excelência onde cada membro pode
              atingir sua melhor versão.
            </p>
            <p className="text-gray-600 mb-8">
              Com equipamentos de ponta, profissionais especializados e métodos
              cientificamente comprovados, criamos o cenário perfeito para sua
              evolução contínua, respeitando a individualidade e os objetivos de
              cada pessoa.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-brand-gray text-brand-black rounded-full text-sm font-medium">
                +10 anos de experiência
              </span>
              <span className="px-4 py-2 bg-brand-gray text-brand-black rounded-full text-sm font-medium">
                +5000 membros satisfeitos
              </span>
              <span className="px-4 py-2 bg-brand-gray text-brand-black rounded-full text-sm font-medium">
                +20 professores especializados
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover-elevate"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-brand-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
