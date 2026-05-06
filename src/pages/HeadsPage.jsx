import React from "react";
import ThemeLayout from "../components/ThemeLayout";
import { Crown, Video, Users, Cpu, Code2, GraduationCap } from "lucide-react";

import AnushImg from "../assets/employees/Anush.png";
import KarthikImg from "../assets/employees/Karthik.png";
import RahulImg from "../assets/employees/Rahul.png";
import SowreshImg from "../assets/employees/Sowresh.png";
import PadmeshImg from "../assets/employees/padmesh.png";
import AneeshImg from "../assets/employees/Aneesh.png";

const employees = [
  {
    img: AnushImg,
    name: "Mr.Anush Raja Sekar G",
    role: "Founder & CEO",
    Icon: Crown,
    accent: "#ffbc0d",
    desc: "Driving the vision of Aethonix with strategic leadership and a passion for technological excellence.",
  },
  {
    img: KarthikImg,
    name: "Mr.Karthik E",
    role: "Head of Content Creation",
    Icon: Video,
    accent: "#a78bfa",
    desc: "Expertise in content writing, literature mining & Ai driven solution.",
  },
  {
    img: RahulImg,
    name: "Mr.Rahul S",
    role: "Human Resources",
    Icon: Users,
    accent: "#34d399",
    desc: "HR professional specializing in talent acquisition and employee management, leveraging data and AI to enhance efficiency and streamline processes.",
  },
  {
    img: SowreshImg,
    name: "Mr.Sowreshwar K",
    role: "Head of Research & Development",
    Icon: Cpu,
    accent: "#f87171",
    desc: "Expertise in Electronic circuit design and testing, Soldering & Product development.",
  },
  {
    img: PadmeshImg,
    name: "Mr.Padmesh M",
    role: "Head of Software",
    Icon: Code2,
    accent: "#60a5fa",
    desc: "Directed the development of multiple web-based projects, coordinated team efforts, and delivered reliable, user-focused solutions.",
  },
  {
    img: AneeshImg,
    name: "Mr.Aneesh M",
    role: "Head of Student Bootcamp",
    Icon: GraduationCap,
    accent: "#fb923c",
    desc: "Empowering the next generation of tech leaders through comprehensive and hands-on educational programs.",
  },
];

const HeadsPage = () => {
  return (
    <ThemeLayout>
      <main className="fade-in">

        {/* ── HERO ── */}
        <section className="page-section text-center" style={{ paddingBottom: "40px" }}>
          <h4 style={{ color: "var(--accent, #ffbc0d)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "14px" }}>
            Aethonix Solutions
          </h4>
          <h1
            className="hero-title"
            style={{
              marginBottom: "20px",
              color: "var(--text-main)",
              fontSize: "clamp(44px, 7vw, 100px)",
            }}
          >
            Heads of Aethonix
          </h1>
          <p
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              color: "var(--text-light)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Meet the visionaries and innovators driving Aethonix Solutions forward — each a leader in their field.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div className="container">
          <div style={{ height: "1px", background: "rgba(0,0,0,0.06)", marginBottom: "30px" }} className="dark-divider" />
        </div>

        {/* ── TEAM GRID ── */}
        <section className="page-section" style={{ paddingTop: "0", paddingBottom: "60px" }}>
          <div className="heads-grid">
            {employees.map((emp) => (
              <div key={emp.name} className="head-card">
                <div className="head-card-inner">
                  
                  {/* FRONT SIDE */}
                  <div className="head-card-front">
                    <div className="head-card-img-wrap">
                      <img
                        src={emp.img}
                        alt={emp.name}
                        className="head-card-img"
                      />
                      <div
                        className="head-card-ring"
                        style={{ "--ring-color": emp.accent }}
                      />
                    </div>

                    <div className="head-card-body">
                      <div
                        className="head-card-icon-badge"
                        style={{ "--badge-color": emp.accent }}
                      >
                        <emp.Icon size={18} strokeWidth={2.2} />
                      </div>
                      <h3 className="head-card-name">{emp.name}</h3>
                      <span
                        className="head-card-role"
                        style={{ "--role-color": emp.accent }}
                      >
                        {emp.role}
                      </span>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="head-card-back">
                    <div className="head-card-back-icon">
                      <emp.Icon size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="head-card-back-title">{emp.name}</h3>
                    <div className="head-card-back-role">{emp.role}</div>
                    <p className="head-card-back-desc">{emp.desc}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </ThemeLayout>
  );
};

export default HeadsPage;
