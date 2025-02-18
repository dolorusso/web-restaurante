"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import {twMerge}  from "tailwind-merge";
import {motion} from "framer-motion";
import React from "react";


const testimonios = [
  {
    "text": "La comida es espectacular, pero lo que realmente destaca es el servicio. Siempre atentos y amables. ¡Volveré sin duda!",
    "imageSrc": avatar1,
    "name": "Mariana López",
    "username": "@marianalopez92"
  },
  {
    "text": "Un lugar acogedor con sabores que sorprenden. Cada plato tiene un toque especial que lo hace único. Recomendado 100%.",
    "imageSrc": avatar2,
    "name": "Carlos Méndez",
    "username": "@cmendez_foodie"
  },
  {
    "text": "Me encanta este restaurante. Ingredientes frescos, platos bien presentados y un ambiente inmejorable. ¡Mis felicitaciones al chef!",
    "imageSrc": avatar3,
    "name": "Luis Fernández",
    "username": "@luisfernandez_food"
  },
  {
    "text": "Como chef, aprecio la calidad de los ingredientes y la creatividad en los platos. Definitivamente, un sitio que sabe lo que hace.",
    "imageSrc": avatar4,
    "name": "Javier Gómez",
    "username": "@javiergomez_chef"
  },
  {
    "text": "El mejor lugar para compartir con amigos y familia. Todo es delicioso y la atención es inmejorable. ¡Sigan así!",
    "imageSrc": avatar5,
    "name": "Augusto Herrera",
    "username": "@augusto_herrera7"
  },
  {
    "text": "Probé la especialidad de la casa y me transportó directamente a Italia. Sabores auténticos que me recordaron mi último viaje a Roma. ¡Lo recomiendo sin dudarlo!",
    "imageSrc": avatar6,
    "name": "Ana Rodríguez",
    "username": "@anarodriguez89"
  },
  {
    "text": "No solo la comida es excelente, sino que el ambiente y la decoración hacen que la experiencia sea aún más especial. Me sentí como en una auténtica trattoria italiana.",
    "imageSrc": avatar7,
    "name": "Fernando Ríos",
    "username": "@fernando_rios91"
  },
  {
    "text": "He visitado muchos restaurantes, pero este destaca por su autenticidad. El risotto y la pasta fresca me recordaron a los platillos caseros que probé en Florencia. Se nota el amor que ponen en cada plato.",
    "imageSrc": avatar8,
    "name": "Gabriela Castro",
    "username": "@gabrielacastro23"
  },
  {
    "text": "Un descubrimiento increíble. Desde la entrada hasta el postre, todo estuvo perfecto. El tiramisú me hizo viajar a Italia con su sabor tradicional. Sin duda, mi nuevo restaurante favorito.",
    "imageSrc": avatar9,
    "name": "Camilo Torres",
    "username": "@camilotorresgourmet"
  },
];

const firstColumn=testimonios.slice(0,3);
const secondColumn=testimonios.slice(3,6);
const thirdColumn=testimonios.slice(6,9);

const ColumnasTestimonios= (props: {className?: string; testimonios: typeof testimonios; duration?: number}) => (
  <div className={props.className}>
    <motion.div animate={{
      translateY: "-50%",
    }} 
    transition={{
      duration: props.duration || 10,
      repeat:Infinity,
      ease: 'linear',
      repeatType: "loop",
    }}
    className="flex flex-col gap-6 pb-6">
      {[...new Array(2)].fill(0).map((_,index) => (
        <React.Fragment key={index}>
          {props.testimonios.map(({text, imageSrc, name, username}) => (
      <div className="card">
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full"/>
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">
              {name}
            </div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
        </React.Fragment>
      ))}
    </motion.div>  
  </div> 
)

export const Testimonios = () => {
  return <section className="bg-white pt-16">
    <div className="container">
      <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-orange-600 to-[#961903] text-transparent bg-clip-text">Lo que opinan nuestros comensales</h2>
      <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#36120e] mt-5">La satisfacción de nuestros comensales es nuestra mayor prioridad. Sus opiniones nos inspiran a seguir brindando la mejor experiencia gastronómica.</p>
      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <ColumnasTestimonios testimonios={firstColumn} duration={15} />
        <ColumnasTestimonios testimonios={secondColumn} className="hidden md:block" duration={19}/>
        <ColumnasTestimonios testimonios={thirdColumn} className="hidden lg:block" duration={17}/>
      </div> 
    </div>
  </section>;
};


