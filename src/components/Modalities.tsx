
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const Modalities = () => {
  const [activeTab, setActiveTab] = useState("musculacao");

  const modalities = [
    {
      id: "musculacao",
      name: "Musculação",
      description:
        "Treinamento completo com equipamentos modernos para desenvolver força, resistência e hipertrofia muscular. Programas personalizados para iniciantes até avançados.",
      benefits: [
        "Aumento de força e massa muscular",
        "Melhora da composição corporal",
        "Prevenção de lesões e doenças",
        "Acompanhamento personalizado",
      ],
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "crossfit",
      name: "CrossFit",
      description:
        "Treinamento funcional de alta intensidade que combina movimentos do levantamento de peso olímpico, ginástica e condicionamento metabólico em workouts diários desafiadores.",
      benefits: [
        "Melhora do condicionamento cardiovascular",
        "Desenvolvimento de força e resistência",
        "Comunidade e ambiente motivador",
        "Workouts variados e desafiadores",
      ],
      image:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    },
    {
      id: "funcional",
      name: "Treino Funcional",
      description:
        "Exercícios que simulam movimentos do cotidiano, melhorando a funcionalidade do corpo como um todo e preparando para as atividades diárias com maior eficiência.",
      benefits: [
        "Melhora da coordenação motora",
        "Ganho de estabilidade e equilíbrio",
        "Prevenção de lesões no dia a dia",
        "Aumento da eficiência em atividades diárias",
      ],
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "yoga",
      name: "Yoga",
      description:
        "Prática que une corpo e mente através de posturas, técnicas de respiração e meditação, promovendo equilíbrio, flexibilidade e consciência corporal.",
      benefits: [
        "Redução do estresse e ansiedade",
        "Aumento da flexibilidade e equilíbrio",
        "Melhora da postura e alinhamento corporal",
        "Fortalecimento do sistema imunológico",
      ],
      image:
        "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "pilates",
      name: "Pilates",
      description:
        "Método de exercício físico e alongamento que utiliza o peso do próprio corpo, focando no fortalecimento do core, melhora da flexibilidade e consciência corporal.",
      benefits: [
        "Fortalecimento profundo da musculatura",
        "Prevenção e reabilitação de lesões",
        "Melhora da postura e alinhamento",
        "Aumento da flexibilidade e mobilidade",
      ],
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const activeModality = modalities.find((m) => m.id === activeTab);

  return (
    <section
      id="modalities"
      className="py-20 bg-brand-gray clip-path-slant overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 bg-white text-brand-red text-sm font-semibold rounded-full">
            MODALIDADES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Treinos para Todos os Objetivos
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Na PowerFit você encontra diversas modalidades para alcançar seus
            objetivos, seja ganho muscular, perda de peso ou bem-estar.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {modalities.map((modality) => (
            <button
              key={modality.id}
              onClick={() => setActiveTab(modality.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === modality.id
                  ? "bg-brand-red text-white shadow-lg"
                  : "bg-white text-brand-black hover:bg-brand-black hover:text-white"
              }`}
            >
              {modality.name}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeModality && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <h3 className="text-2xl font-bold text-brand-black mb-4">
                {activeModality.name}
              </h3>
              <p className="text-gray-600 mb-6">{activeModality.description}</p>
              
              <h4 className="text-lg font-semibold text-brand-black mb-3">
                Benefícios:
              </h4>
              <ul className="space-y-3 mb-8">
                {activeModality.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600"
                  >
                    <ChevronRight className="h-5 w-5 text-brand-red flex-shrink-0 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className="bg-brand-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center transition-colors duration-300 hover-elevate">
                Experimentar Aula
              </button>
            </div>
            
            <div className="relative animate-fade-in [animation-delay:200ms] order-1 md:order-2">
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-red rounded-lg opacity-25"></div>
              <img
                src={activeModality.image}
                alt={activeModality.name}
                className="w-full h-[350px] object-cover rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Modalities;
