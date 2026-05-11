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



        {/* MENU — always visible (icons only on mobile, icons+labels on desktop) */}

        <nav className="nav-pill-container">

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
                style={{
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 14px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  color: isActive || isHovered ? "var(--text-main)" : "#5b6270",
                  transition: "color 0.3s ease",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                <item.Icon
                  size={16}
                  strokeWidth={isActive || isHovered ? 2.5 : 2}
                  style={{ transition: "transform 0.3s", transform: isHovered ? "scale(1.1)" : "scale(1)", flexShrink: 0 }}
                />
                <span className="nav-label">
                  {item.label}
                </span>
              </Link>
            );
          })}

        </nav>



        {/* RIGHT SIDE */}

        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>


          {/* CONTACT BUTTON — hidden on mobile */}

          <Link
            to="/contact"
            className="contact-btn-full"
            style={{
              padding: "0 20px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              borderRadius: "100px",
              background: isDark ? "#fff" : "#0b0f19",
              color: isDark ? "#0b0f19" : "#fff",
              fontWeight: 600,
              fontSize: "0.88rem",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
              whiteSpace: "nowrap",
            }}
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