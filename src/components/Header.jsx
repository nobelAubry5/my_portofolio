import { useState } from "react";
import { RiSunLine, RiMoonLine, RiMenuLine } from "react-icons/ri";
import Logo from "../assets/logo_ann.png";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Projets", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement logic to switch between light and dark mode
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={` ${isDarkMode ? "dark" : ""}`}>
      <div className="mx-auto flex max-w-[700px] items-center justify-end gap-3 py-3">
        {/* Logo container */}
        {/* <div className="flex justify-start items-start">
          <img src={Logo} alt="Logo" className="mr-3" />
        </div> */}
        {/* Menu items */}
        <ul className="hidden items-center gap-1 md:flex">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors bg-secondary text-primary"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Dark mode toggle */}
        <div className="ml-auto flex h-8 w-8 items-center justify-center md:ml-0">
          <button
            className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <RiMoonLine /> : <RiSunLine />}
          </button>
        </div>
        {/* Mobile menu toggle */}
        <div className="relative md:hidden">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary"
            onClick={toggleMenu}
          >
            <RiMenuLine />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl border border-secondary bg-primary p-2 text-base shadow-lg focus:outline-none sm:text-sm">
              <div className="grid">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="rounded-md px-4 py-2 transition-colors hover:text-primary bg-secondary font-medium"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
