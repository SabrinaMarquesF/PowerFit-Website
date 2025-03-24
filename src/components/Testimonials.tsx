
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Membro há 2 anos",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      quote:
        "A PowerFit transformou minha vida. Perdi 15kg em 6 meses com o acompanhamento dos profissionais e as aulas coletivas. O ambiente é incrível e motivador!",
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      role: "Membro há 1 ano",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      quote:
        "Depois de testar várias academias, finalmente encontrei uma que realmente se importa com meus objetivos. Os treinos personalizados fazem toda a diferença!",
    },
    {
      id: 3,
      name: "Mariana Costa",
      role: "Membro há 3 anos",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      quote:
        "As aulas de yoga e pilates melhoraram significativamente minha qualidade de vida. Os instrutores são excepcionais e o espaço é perfeito para relaxar.",
    },
    {
      id: 4,
      name: "Pedro Santos",
      role: "Membro há 6 meses",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 4,
      quote:
        "Comecei na PowerFit para ganhar massa muscular e os resultados superaram minhas expectativas. Os professores são altamente qualificados e atentos aos detalhes.",
    },
    {
      id: 5,
      name: "Juliana Menezes",
      role: "Membro há 1 ano",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      rating: 5,
      quote:
        "O ambiente da academia é incrível! Equipamentos modernos, profissionais atenciosos e uma comunidade acolhedora. Recomendo para todos os níveis de experiência.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const handlePrev = () => {
    setAutoPlay(false);
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoPlay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-brand-gray clip-path-reverse-slant"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 bg-white text-brand-red text-sm font-semibold rounded-full">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Histórias reais de pessoas que transformaram seus corpos e suas
            vidas com a PowerFit.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl mb-6 italic text-gray-700">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-bold text-brand-black">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <button
              onClick={handlePrev}
              className="bg-white hover:bg-brand-red hover:text-white text-brand-black p-3 rounded-full shadow-md transition-colors duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white hover:bg-brand-red hover:text-white text-brand-black p-3 rounded-full shadow-md transition-colors duration-300"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-brand-red"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
