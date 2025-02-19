"use client";
import Logo from '@/assets/italia.png';
import { Menu, X } from 'lucide-react'; // Importamos los íconos de menú y cerrar
import Image from 'next/image';
import React, { FC, useState } from 'react';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-transparent">
      <div className="py-2 md:py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="italia" height={40} width={40} />

            <button 
              className="md:hidden z-30 p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8 text-[#961903]" /> : <Menu className="w-8 h-8 text-[#961903]" />}
            </button>

            <nav className="hidden md:flex gap-6 text-black/70 items-center">
              <a href="#inicio">About</a>
              <a href="#restaurant">Restaurant</a>
              <a href="#testimonios">Reseñas</a>
              <a href="#contactanos">Contactanos</a>
            </nav>
          </div>
        </div>
      </div>

      <div 
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-[#ffedd5] text-black/70 text-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <a href="#inicio" className="py-4 text-2xl font-semibold" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#restaurant" className="py-4 text-2xl font-semibold" onClick={() => setIsMenuOpen(false)}>Restaurant</a>
        <a href="#testimonios" className="py-4 text-2xl font-semibold" onClick={() => setIsMenuOpen(false)}>Reseñas</a>
        <a href="#contactanos" className="py-4 text-2xl font-semibold" onClick={() => setIsMenuOpen(false)}>Contactanos</a>
      </div>
    </header>
  );
};
