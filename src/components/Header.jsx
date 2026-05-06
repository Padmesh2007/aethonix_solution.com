import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png";

const Header = ({ theme, toggleTheme }) => {

  const location = useLocation();

  const navItems = [
    { path: "/about", label: "About" },
    { path: "/kits", label: "Kits" },
    { path: "/collab", label: "Collab" },
    { path: "/contact", label: "Contacts" }
  ];

  return (

    <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-black/60 border-b border-black/5 dark:border-white/10">

      <div className="max-w-[1200px] mx-auto px-6 h-[70px] flex items-center justify-between">


        {/* LOGO */}

        <Link to="/" className="flex items-center gap-3">

          <img src={logo} alt="logo" className="h-9"/>

          <div className="leading-tight">

            <div className="font-semibold text-[18px]">
              Aethonix
            </div>

            <div className="text-[12px] opacity-60">
              Solutions
            </div>

          </div>

        </Link>



        {/* MENU */}

        <nav className="hidden md:flex items-center gap-2 text-[16px]">

          {navItems.map(item => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive 
                    ? "bg-[#ffbc0d] text-black shadow-md" 
                    : "opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          })}

        </nav>



        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={22} className="text-white" strokeWidth={2} />
            ) : (
              <Moon size={22} className="text-black" strokeWidth={2} />
            )}
          </button>

        </div>



      </div>

    </header>

  );

};

export default Header;