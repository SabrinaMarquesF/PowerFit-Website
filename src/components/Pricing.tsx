
import React, { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Básico",
      color: "bg-gray-100",
      monthlyPrice: 89,
      annualPrice: 79, // price per month when paid annually
      features: [
        "Acesso à musculação",
        "Horário comercial",
        "Avaliação física mensal",
        "App de acompanhamento",
      ],
      restrictions: ["Sem acesso às aulas coletivas", "Sem personal trainer"],
      cta: "Começar agora",
      popular: false,
    },
    {
      name: "Premium",
      color: "bg-brand-red",
      textColor: "text-white",
      monthlyPrice: 149,
      annualPrice: 129, // price per month when paid annually
      features: [
        "Acesso completo à academia",
        "Horário estendido",
        "Todas as aulas coletivas",
        "Avaliação física quinzenal",
        "App premium de acompanhamento",
        "1 sessão mensal com personal",
      ],
      restrictions: [],
      cta: "Escolher Premium",
      popular: true,
    },
    {
      name: "VIP",
      color: "bg-brand-black",
      textColor: "text-white",
      monthlyPrice: 249,
      annualPrice: 219, // price per month when paid annually
      features: [
        "Acesso 24h à academia",
        "Aulas coletivas ilimitadas",
        "Avaliação física semanal",
        "App VIP com nutricionista",
        "4 sessões mensais com personal",
        "Área de descanso exclusiva",
        "1 convidado por semana",
      ],
      restrictions: [],
      cta: "Obter VIP",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 bg-brand-gray text-brand-red text-sm font-semibold rounded-full">
            PLANOS E PREÇOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Invista no seu Futuro
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-8">
            Escolha o plano que melhor se adapta às suas necessidades e
            objetivos. Todos incluem nossa garantia de satisfação de 30 dias.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-brand-black' : 'text-gray-500'}`}>Mensal</span>
            <button
              className="mx-4 relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-brand-red transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-brand-black' : 'text-gray-500'}`}>
              Anual <span className="text-brand-red font-bold">(-12%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? "md:scale-105 md:-translate-y-2 z-10" : ""
              }`}
            >
              {/* Header */}
              <div
                className={`${plan.color} ${
                  plan.textColor || "text-brand-black"
                } p-6`}
              >
                {plan.popular && (
                  <div className="mb-3 inline-block py-1 px-3 bg-yellow-400 rounded-full text-xs font-bold text-brand-black">
                    MAIS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end">
                  <span className="text-3xl md:text-4xl font-bold">
                    R$ {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-1 text-sm opacity-80">/mês</span>
                </div>
                {isAnnual && (
                  <div className="text-xs mt-1 font-medium">
                    Pagamento único de{" "}
                    R$ {plan.annualPrice * 12}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="p-6 bg-white">
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-red flex-shrink-0 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.restrictions &&
                    plan.restrictions.map((restriction, idx) => (
                      <li
                        key={`restriction-${idx}`}
                        className="flex items-start opacity-60"
                      >
                        <svg
                          className="h-5 w-5 text-gray-400 flex-shrink-0 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="text-gray-500">{restriction}</span>
                      </li>
                    ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? "bg-brand-red hover:bg-red-700 text-white"
                      : "bg-brand-black hover:bg-gray-800 text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Todos os planos incluem 30 dias de garantia. Cancele a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
