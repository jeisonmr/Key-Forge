import LogoIcon from "@public/icons/password.png";
import MenuIcon from "@public/icons/menu.png";
import { useState } from "react";

function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className="nav w-full h-5 bg-blue2/50 flex items-center justify-between p-2 rounded-xs relative">
      <div>
        <a href="/" className="no-underline">
          <img
            src={LogoIcon}
            alt="Key Forge"
            className="w-3.5 h-auto object-contain aspect-square"
            title="Key Forge - Generador de contraseñas seguras"
            loading="eager"
          />
        </a>
      </div>

      <ul 
        id="nav-links" 
        className={`flex items-center gap-3 ${isMobileMenuOpen ? 'max-desktop:hidden' : ''}
        max-desktop:absolute max-desktop:left-0 max-desktop:top-full max-desktop:w-full max-desktop:bg-blue2/50 max-desktop:p-2 max-desktop:rounded-b-xs`}
        aria-hidden={!isMobileMenuOpen}
        aria-label="Navegación principal"
      >
        <li className="text-purple-100 text-txt-description4 hover:text-blue3 active:text-blue3 transition-colors uppercase">
          <a
            href="/"
            className="no-underline hover:no-underline active:no-underline"
            title="Generador de contraseñas"
          >
            Generador
          </a>
        </li>
        <li className="text-purple-100 text-txt-description4 hover:text-blue3 transition-colors uppercase">
          <a
            href="/guia-de-seguridad"
            className="no-underline hover:no-underline active:no-underline"
            title="Guía de seguridad"
          >
            Guía de seguridad
          </a>
        </li>
      </ul>
      <button
        id="mobile-menu-btn"
        className="hidden max-desktop:block cursor-pointer"
        onClick={toggleMobileMenu}
      >
        <img
          src={MenuIcon}
          alt="Menú"
          className="w-4 h-4"
          loading="eager"
          title="Menú"
        />
      </button>

      <div className="max-desktop:hidden">
        <span className="relative text-blue3 text-txt-description4 before:content-[''] before:w-[0.8rem] before:h-[0.8rem] before:bg-blue3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:translate-x-[-1.5rem] before:rounded-full">
          Procesamiento local
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
