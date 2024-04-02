import React, { useState } from "react";
import logo from "../assets/tactical.png";
import { IoMenuOutline, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={`bg-neutral-900/70 backdrop-blur-xl w-2/3 h-screen fixed z-20 right-0 flex justify-center items-center lg:hidden transform transition-all duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`} id="sm-menu">
        <ul className="menu-items-mobile">
          <li>
            <a href="#" onClick={handleMenuItemClick}>Acerca del juego</a>
          </li>
          <li>
            <a href="#" onClick={handleMenuItemClick}>Como jugar</a>
          </li>
          <li>
            <a href="#" onClick={handleMenuItemClick}>Miniaturas</a>
          </li>
          <li>
            <a href="#" onClick={handleMenuItemClick}>Comunidad</a>
          </li>
          <li>
            <a href="#" onClick={handleMenuItemClick}>Contacto</a>
          </li>
        </ul>
      </div>
      <div className="bg-[#010101]/30 backdrop-blur-lg p-5 flex justify-between items-center fixed w-full z-20 border-b-[1px] border-neutral-700">
        <a href="#">
          <img src={logo} alt="tactical encounters logo" className="w-24 lg:w-48" />
        </a>

        <div className="" id="lg-menu">
          <ul className="menu-items lg:inline-flex hidden">
            <li>
              <a href="#">Acerca del juego</a>
            </li>
            <li>
              <a href="#">Como jugar</a>
            </li>
            <li>
              <a href="#">Miniaturas</a>
            </li>
            <li>
              <a href="#">Comunidad</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        {isMenuOpen ? <IoClose className="lg:hidden text-[40px] text-white cursor-pointer" onClick={toggleMenu} /> : <IoMenuOutline className="lg:hidden text-[40px] text-white cursor-pointer" onClick={toggleMenu} />}
      </div>
    </>
  );
};

export default Navbar;
