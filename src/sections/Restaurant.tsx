import Image from "next/image";
import restaurante from "@/assets/restaurante.jpg"
import tomate from "@/assets/tomate.png"
import chef from "@/assets/chef.png"

export const Restaurant = () => {
  return <section className="bg-gradient-to-b from-white to-orange-100 py-24 overflow-x-clip">
    <div className="container">
      <div className="max-w-[540px] mx-auto">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-orange-600 to-[#961903] text-transparent bg-clip-text">Nostra Amata Casa</h2>
        <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#36120e] mt-5">Un rincón donde la tradición y el amor por la cocina italiana cobran vida</p>
      </div>
      <div className="relative">
        <Image src={restaurante} alt="rest" className="mt-10"/>
        <Image src={tomate} alt="tomate" height={100} width={100} className="absolute -left-16 -top-2 md:h-auto w-auto"/>
        <Image src={tomate} alt="tomate" height={100} width={100} className="absolute -right-16 -bottom-6 md:h-auto w-auto"/>
      </div>
    </div>
  </section>;
};
