
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "musculacao",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "musculacao",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-brand-red" />,
      title: "Telefone",
      details: "(11) 3456-7890",
      link: "tel:+551134567890",
    },
    {
      icon: <Mail className="h-5 w-5 text-brand-red" />,
      title: "Email",
      details: "contato@powerfit.com",
      link: "mailto:contato@powerfit.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-brand-red" />,
      title: "Endereço",
      details: "Av. Paulista, 1000 - São Paulo, SP",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-brand-red" />,
      title: "Horário",
      details: "Seg-Sex: 6h-22h | Sáb-Dom: 8h-18h",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 bg-brand-gray text-brand-red text-sm font-semibold rounded-full">
            CONTATO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Fale Conosco
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Estamos prontos para responder suas dúvidas e ajudar você a começar
            sua jornada de transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-brand-gray rounded-xl p-8 shadow-lg animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-black mb-6">
              Agende uma Aula Grátis
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-red focus:border-brand-red transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-red focus:border-brand-red transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-red focus:border-brand-red transition-colors"
                    placeholder="(11) 98765-4321"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Interesse Principal
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-red focus:border-brand-red transition-colors"
                >
                  <option value="musculacao">Musculação</option>
                  <option value="crossfit">CrossFit</option>
                  <option value="funcional">Treino Funcional</option>
                  <option value="yoga">Yoga</option>
                  <option value="pilates">Pilates</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-red focus:border-brand-red transition-colors"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors duration-300"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-fade-in [animation-delay:200ms]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover-elevate"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-gray p-2 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-brand-black">
                      {item.title}
                    </h3>
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-700 hover:text-brand-red transition-colors"
                      target={item.title === "Endereço" ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-gray-700">{item.details}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-[350px] relative">
              <iframe
                title="Localização da Academia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098371826351!2d-46.65679542409211!3d-23.565259178892756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1659538750399!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
