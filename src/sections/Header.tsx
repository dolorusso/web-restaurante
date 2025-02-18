import Logo from '@/assets/italia.png';
import Menu from '@/assets/menu.svg';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="italia" height={40} width={40}/>
            <Menu className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#inicio">About</a>
              <a href="#restaurant">Restaurant</a>
              <a href="#testimonios">Comensales</a>
              <a href="#contactanos">Contactanos</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );  
};
