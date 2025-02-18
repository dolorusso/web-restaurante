"use client";
import Image from "next/image";
import carne from "@/assets/carne.png";
import ravioli from "@/assets/ravioli.png";
import risotto from "@/assets/risotto.png";
import tiramisu from "@/assets/tiramisu.png";
import pannacotta from "@/assets/pannacotta.png";
import cannoli from "@/assets/cannoli.png";
import {motion} from "framer-motion";

export const Menu = () => {
  return (
    <div className="py-8 md:py-24 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14" animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: 'loop',
          }}>
            <Image src={carne} alt="carne" className="platos"/>
            <Image src={ravioli} alt="ravioli" className="platos"/>
            <Image src={risotto} alt="risotto" className="platos"/>
            <Image src={tiramisu} alt="tiramisu" className="platos"/>
            <Image src={pannacotta} alt="panna" className="platos"/>
            <Image src={cannoli} alt="cannoli" className="platos"/>

            <Image src={carne} alt="carne" className="platos"/>
            <Image src={ravioli} alt="ravioli" className="platos"/>
            <Image src={risotto} alt="risotto" className="platos"/>
            <Image src={tiramisu} alt="tiramisu" className="platos"/>
            <Image src={pannacotta} alt="panna" className="platos"/>
            <Image src={cannoli} alt="cannoli" className="platos"/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
