import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Info, Package, Handshake, Users } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {

  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef([]);

  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { path: "/about", label: "About", Icon: Info },
    { path: "/kits", label: "Kits", Icon: Package },
    { path: "/collab", label: "Collab", Icon: Handshake },
    { path: "/heads", label: "Our Team", Icon: Users },
  ];

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => location.pathname.startsWith(item.path));
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    if (targetIndex !== -1 && navRefs.current[targetIndex]) {
      const el = navRefs.current[targetIndex];
      setIndicatorStyle({
        width: el.offsetWidth,
        transform: `translateX(${el.offsetLeft}px)`,
        opacity: 1
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [location.pathname, hoveredIndex]);

  return (

    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <Link to="/" className="logo-section">
          <div className="logo-circle">
            <img src={logo} alt="Aethonix logo" />
          </div>
          <div className="logo-text-group">
            <div className="logo-brand">Aethonix</div>
            <div className="logo-sub">Solutions</div>
          </div>
        </Link>



        {/* MENU */}

        <nav className="hidden md:flex nav-pill-container">

          {/* Sliding Indicator Pill */}
          <div
            className="nav-indicator-pill"
            style={indicatorStyle}
          />

          {navItems.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path);
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={item.path}
                to={item.path}
                ref={el => navRefs.current[index] = el}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative z-10 px-5 py-2 flex items-center gap-2.5 rounded-xl transition-all duration-300 ${isActive || isHovered
                  ? "text-[#0b0f19] dark:text-white"
                  : "text-[#5b6270] dark:text-gray-400"
                  }`}
              >
                <item.Icon
                  size={16}
                  strokeWidth={isActive || isHovered ? 2.5 : 2}
                  className={`transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
                />
                <span className="nav-label">
                  {item.label}
                </span>
              </Link>
            );
          })}

        </nav>



        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">


          {/* CONTACT BUTTON */}

          <Link
            to="/contact"
            className="px-6 h-[40px] flex items-center rounded-full bg-black text-white dark:bg-white dark:text-black font-medium transition hover:opacity-90"
          >

            Contact

          </Link>



          {/* THEME BUTTON */}

          <button
            onClick={toggleTheme}
            className="theme-icon-btn"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className={`theme-icon-inner ${isDark ? "theme-icon--dark" : "theme-icon--light"}`}>
              {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
            </span>
          </button>


        </div>


      </div>

    </header>

  );

};

export default Navbar;