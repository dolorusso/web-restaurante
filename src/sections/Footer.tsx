import Image from "next/image";
import Tw from "@/assets/social-x.svg";
import Insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg"

export const Footer = () => {
  return (
    <footer className="bg-[#36120e] text-[#BCBCBC] text-sm py-10 text">
      <div className="container">
        <div className="flex justify-center gap-6 mt-6">
          <Tw/>
          <Insta/>
          <Linkedin/>
        </div>
        <p className="mt-6 text-center">&copy; 2025 Russo, Dolores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
