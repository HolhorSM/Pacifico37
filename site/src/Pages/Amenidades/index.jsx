import React from "react";
import { icon } from "../../assets/Icons";


export default function index() {
  const features = [
   {
  icon: icon.gym,
  title: "GYM privado",
  desc: "Terrasol cuenta con un gimnasio totalmente equipado y con entrenador personal para ayudarte a alcanzar tu maximo potencial.",
},
{
  icon: icon.pool,
  title: "Albercas",
  desc: "Disfruta de dos albercas con camastros, mesas y palapa, pensadas para tu descanso y comodidad.",
},
{
  icon: icon.tenis,
  title: "Cancha de tenis",
  desc: "Practica o diviertete en nuestra cancha de tenis disponible para todos los huespedes.",
},
{
  icon: icon.cold,
  title: "AC",
  desc: "Pacifico 37 ofrece alojamiento completamente climatizado para tu confort en cualquier temporada.",
},
{
  icon: icon.segurity,
  title: "Seguridad",
  desc: "Contamos con un equipo de guardias y dos casetas de vigilancia para garantizar tu seguridad día y noche.",
},
{
  icon: icon.padel,
  title: "Cancha de padel",
  desc: "Los amantes del pádel también encontrarán su espacio en nuestra cancha dedicada a este deporte.",
},

  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className=" text-6xl sm:text-5xl font-vanitasb">
            The fastest way to launch a product
          </h3>
          <div className="mt-5">
            <p className="mt-3 font-vanitasr text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  <img
                    src={item.icon}
                  />
                </div>
                <h4 className="text-2xl font-vanitasb">{item.title}</h4>
                <p className="font-vanitasr text-lg">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        
      </div>

     
    </section>
  );
}
