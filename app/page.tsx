'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { useEffect } from 'react'
import { FaHandshake, FaLightbulb, FaStar, FaShieldAlt, FaUsers } from 'react-icons/fa'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const valeurs = [
    { label: 'Transparence', icon: <FaShieldAlt size={32} /> },
    { label: 'Engagement', icon: <FaHandshake size={32} /> },
    { label: 'Innovation', icon: <FaLightbulb size={32} /> },
    { label: 'Excellence', icon: <FaStar size={32} /> },
    { label: 'Responsabilité', icon: <FaUsers size={32} /> },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % valeurs.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [valeurs.length])
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

      <nav className="fixed top-0 left-0 w-full z-50  bg-[#00000040] backdrop-blur-sm text-white shadow-md">
        <div className="max-w-7xl px-4 flex justify-between items-center h-16">

          <div className="flex items-center">
            <a >
              <img src="/logojm.1375174c.svg" width={60} height={90}  alt="logo"/>
            </a>
          </div>

          <div className="space-x-8 hidden md:flex">
            <a href="#accueil" className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Accueil</a>
            <a href="#valeurs" className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Nos Valeurs</a>
            <a href="#Services" className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Services</a>
            <a href="#À propos" className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">A propos</a>
            <a href="#contact" className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile pour Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm absolute top-16 left-0 w-full flex flex-col items-center space-y-6 py-8">
            <a href="#accueil" onClick={() => setMenuOpen(false)} className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Accueil</a>
            <a href="#valeurs" onClick={() => setMenuOpen(false)} className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Nos Valeurs</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Services</a>
            <a href="#À propos" onClick={() => setMenuOpen(false)} className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">A propos</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Contact</a>
          </div>
        )}
      </nav>

      {/* Sections accueil */}
      <section id="accueil" className="relative h-screen overflow-hidden text-white">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="absolute inset-0 w-full h-full">
            <SwiperSlide>
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/imgslider1.webp')" }}></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/imgslider2.webp')" }}></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/imgslider3.webp')" }}></div>
            </SwiperSlide>
          </Swiper>

          <div className="absolute inset-0 bg-[#00000070] flex flex-col items-center justify-center text-center px-4 z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Jolof Mobility</h2>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl">La mobilité urbaine réinventée.</p>
            <div className="space-x-3">
              <a href="#valeurs" className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full border-1 border-green-500 hover:bg-white hover:text-green-500 transition">Nos Valeurs</a>
              <a href="#services" className="bg-white text-green-500 font-semibold px-6 py-3 rounded-full border-1 border-white hover:bg-green-500 hover:text-white transition">Nos Services</a>
            </div>
          </div>         
          <div className="absolute bottom-0 left-0 w-full z-20">
            <img src="/motif.webp" alt="motif" className="w-full"/>
          </div>
      </section>
    

      {/* Sections fama */}
      <section className="min-h-screen bg-white text-black flex items-center justify-center px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white">
          <img src="/fama_sylla.webp" alt="Fama SYLLA" className="w-114 h-114 object-cover rounded-lg"/>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-green-700">Fama SYLLA</h2>
            <h3 className="text-lg font-semibold mt-1">Partnership Manager</h3>
            <div className="flex gap-4 mt-3">
              <a href="tel:+221780000000" className="text-green-700 text-2xl">
                <i className="fas fa-phone-alt"></i>
              </a>
              <a href="mailto:fama@joloftaxi.sn" className="text-green-700 text-2xl">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="#" className="text-green-700 text-2xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="mt-4 text-black ">
              Chers clients et partenaires, bienvenue sur notre site vitrine. Chez Jolof Taxi,
              notre priorité est de vous offrir un service de transport exceptionnel, fiable et confortable.
              Notre flotte de véhicules de qualité et nos chauffeurs professionnels sont dédiés à rendre
              chaque trajet agréable et sûr. Nous nous efforçons constamment d'innover pour mieux vous servir.
              Merci pour votre confiance et votre fidélité.
            </p>
          </div>
        </div>
      </section>
      

      {/* Sections valeur */}
      <section id="valeurs" className="min-h-screen bg-cover bg-center bg-fixed text-black flex flex-col items-center justify-center px-4 py-12" style={{ backgroundImage: "url('/bg-nos-valeurs.jpg')" }}>
        <div className="relative w-[450px] h-[450px] md:w-[350px] md:h-[350px] sm:w-[280px] sm:h-[280px] flex items-center justify-center">

          <h2 className="absolute flex items-center justify-center w-40 h-40 md:w-32 md:h-32 sm:w-24 sm:h-24 border-2 border-white bg-amber-50 rounded-full text-2xl md:text-xl sm:text-lg text-green-500 text-center shadow-lg">Nos Valeurs</h2>
          {valeurs.map((valeur, index) => {
            const totalValues = valeurs.length
            const angle = (360 / totalValues) * index
            const radius = window.innerWidth < 640 ? 160 : window.innerWidth < 768 ? 200 : 280
            const x = radius * Math.cos((angle * Math.PI) / 180)
            const y = radius * Math.sin((angle * Math.PI) / 180)
            const isActive = index === activeIndex

            return (
              <div
                key={index}
                className={`absolute flex flex-col items-center justify-center 
                  w-36 h-36 md:w-32 md:h-32 sm:w-28 sm:h-28
                  rounded-full transition-all duration-500
                  ${isActive ? 'bg-green-100' : 'bg-white'}
                  hover:bg-green-100 group cursor-pointer shadow-md`}
                style={{
                  top: `calc(50% + ${y}px - 72px)`, 
                  left: `calc(50% + ${x}px - 72px)`,
                }}
              >
                <div className={`${isActive ? 'text-green-600' : 'text-gray-500'} group-hover:text-green-600 text-4xl md:text-3xl sm:text-2xl`}>
                  {valeur.icon}
                </div>
                <span className={`text-base mt-3 font-semibold ${isActive ? 'text-green-600' : 'text-gray-500'} group-hover:text-green-600 text-center`}>
                  {valeur.label}
                </span>
              </div>
            )
          })}
        </div>
      </section>


     
      {/* Sections services */}
      <section id="services" className="min-h-screen bg-[#e8fdf4] text-black px-4 py-12">
        <h3 className="text-3xl font-bold text-center mb-12">Nos Services</h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/taxijolof.webp" alt="Jolof Taxi" className="w-full h-48 object-cover" />
              <div className="absolute top-34 left-4 bg-white text-white p-5 rounded-xl shadow-2xl">
                <i className="fas fa-taxi text-amber-600 text-3xl"></i>
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2">Jolof Taxi</h5>
              <p className="text-black text-sm leading-relaxed">
                JOLOF TAXI est une application mobile innovante de VTC conçue exclusivement pour les taxis sénégalais.
                Développée avec le support technique de SUBITO INTERNATIONAL, elle vise à intégrer les chauffeurs traditionnels
                dans l’économie numérique.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/imgjoloftaxiservice.webp" alt="Yeesal" className="w-full h-48 object-cover" />
              <div className="absolute top-34 left-4 bg-white text-white p-5 rounded-xl shadow-2xl">
                <i className="fas fa-car-side text-green-800 text-3xl"></i>
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2">YEESAL</h5>
              <p className="text-black text-sm leading-relaxed">
                YEESAL facilite l’accès à la propriété de taxis sans apport initial. 
                Ce programme propose un modèle de financement innovant et durable, 
                impliquant les banques dans la transformation de la mobilité urbaine au Sénégal.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src="/automobile.webp" alt="Jolof Assurances" className="w-full h-48 object-cover" />
              <div className="absolute top-34 left-4 bg-white text-white p-5 rounded-xl shadow-2xl">
                <i className="fas fa-shield-alt text-blue-900 text-3xl"></i>
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-xl font-bold mb-2">Jolof Assurances</h5>
              <p className="text-black text-sm leading-relaxed">
                Avec Jolof Assurances, nous renforçons la protection sociale des chauffeurs grâce à des assurances maladie et
                retraite complémentaires adaptées à leurs besoins.
              </p>
            </div>
          </div>
        </div>
      </section>


        {/* footer */} 
      <footer id="contact" className="bg-black text-white pt-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div> 
            <h2 className="text-4xl font-bold mb-6">Contactez-nous</h2>
            <form className="rounded-lg p-8 shadow-lg ">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Envoyez-nous un message</h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full p-3 border text-white border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Votre message"
                  className="w-full p-3 border border-green-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Nos coordonnées</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-green-600 text-xl"></i>
                  Liberté 6, Dakar, Sénégal
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-phone text-green-600 text-xl"></i>
                  +221 78 685 08 08
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-envelope text-green-600 text-xl"></i>
                  contact@jolofmobility.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-green-700 mb-4">Suivez-nous</h4>
              <div className="flex gap-6 text-3xl">
                <a href="#" className="text-green-600 hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-green-600 hover:text-red-600"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-green-600 hover:text-blue-900"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-green-600 hover:text-[#E1306C]"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-green-500 mb-12 pt-6 pb-4 text-center text-sm">
          <p>© 2025 Jolof Mobility. Tous droits réservés — <a href="#" className="text-green-700 hover:underline">CGU</a></p>
        </div>
        <div className="absolute inset-x-0 bottom-0 mt-12">
          <img src="/motif.webp" alt="motif" className="w-full" />
        </div>
      </footer>
    </div>
  );
}
