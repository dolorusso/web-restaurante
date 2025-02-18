import Arrow from "@/assets/arrow-right.svg";
import chefpizza from "@/assets/chefpizza.jpg"
import chefpasta from "@/assets/chefpasta.jpg"
import lugar from "@/assets/lugar.jpg"
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white  to-orange-100 py-24">
      <div className="container max-w">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-orange-600 to-[#961903] text-transparent bg-clip-text">VenÍ a conocernos</h2>
        <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#36120e] mt-5">Haz tu reserva ahora y asegura tu experiencia única en nuestro restaurante. ¡Te esperamos!</p>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight bg-[#961903] text-white">Reserva ahora</button>
          <button className="px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight text-black bg-transparent gap-1">
            <span>Conocer promociones</span>
            <Arrow className="h-5 w-5"/>
          </button>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          <Image src={chefpizza} alt="piz" className="w-full md:w-1/3 lg:w-1/3 h-auto"/>
          <Image src={lugar} alt="past" className="hidden md:flex w-full md:w-1/3 lg:w-1/3 h-auto" />
          <Image src={chefpasta} alt="lugar" className="hidden lg:flex w-full lg:w-1/3 h-auto" />
        </div>
      </div>
    </section>
  );
};
