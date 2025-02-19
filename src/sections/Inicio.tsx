import lasagna from "@/assets/lasagna.png"
import Image from "next/image";
import pizza from "@/assets/pizza.png";
import pasta from "@/assets/pasta.png";

export const Inicio = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(eLlipse_200%_100%_at_bottom_left,#FFFFFF,#FFEDD5_80%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-orange-600 to-[#961903] text-transparent bg-clip-text mt-8">
              Il Gusto Italiano
            </h1>
            <p className="text-xl text-[#36120e] tracking-tight mt-6">
              Sabores auténticos que te transportan directamente a Italia. Cada bocado es una tradición, un viaje de gusto y pasión. ¡Vive la experiencia italiana en cada plato!
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight bg-[#961903] text-white">Ver mas</button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={lasagna} alt="lasagna" className="md:absolute md:h-auto md:w-auto md:max-w-none md:-left-6 lg:left-0"/>
            <Image src={pizza} width={220} height={220} alt="pizza" className="hidden md:block -top-1 -left-32 md:absolute"/>
            <Image src={pasta} width={240} alt="pasta" className="hidden lg:block absolute top-[480px] left-[100px]"/>
          </div>
        </div>
      </div>
    </section>
  );
};
