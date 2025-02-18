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
      <Header/>
      <Inicio/>
      <Restaurant/>
      <Menu/>
      <Testimonios/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
