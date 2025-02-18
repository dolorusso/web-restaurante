import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import {Header} from "@/sections/Header";
import {Inicio} from "@/sections/Inicio";
import { Menu } from "@/sections/Menu";
import { Restaurant } from "@/sections/Restaurant";
import { Testimonios } from "@/sections/Testimonios";

export default function Home() {
  return (
    <>
       <Header />
      <section id="inicio">
        <Inicio />
      </section>
      <section id="restaurant">
        <Restaurant />
      </section>
        <Menu />
      <section id="testimonios">
        <Testimonios />
      </section>
      <section id="contactanos">
        <CallToAction />
      </section>
      <Footer />
    </>
  );
}
