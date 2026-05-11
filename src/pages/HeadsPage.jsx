import React, { useState } from "react";
import ThemeLayout from "../components/ThemeLayout";
import { Crown, Video, Users, Cpu, Code2, GraduationCap, CircuitBoard } from "lucide-react";

import AnushImg from "../assets/employees/Anush.png";
import KarthikImg from "../assets/employees/Karthik.png";
import RahulImg from "../assets/employees/Rahul.png";
import SowreshImg from "../assets/employees/Sowresh.png";
import JoelImg from "../assets/employees/S.JOEL.png";
import PadmeshImg from "../assets/employees/padmesh.png";
import AneeshImg from "../assets/employees/Aneesh.png";


const employees = [
  {
    img: AnushImg,
    name: "Mr. Anush Raja Sekar G",
    role: "Founder & CEO",
    Icon: Crown,
    accent: "#ffbc0d",
    desc: "Driving the vision of Aethonix with strategic leadership and a passion for technological excellence.",
  },
  {
    img: KarthikImg,
    name: "Mr. Karthik E",
    role: "Head of Content Creation",
    Icon: Video,
    accent: "#a78bfa",
    desc: "Expertise in content writing, literature mining & AI-driven solutions.",
  },
  {
    img: RahulImg,
    name: "Mr. Rahul S",
    role: "Human Resources",
    Icon: Users,
    accent: "#34d399",
    desc: "HR professional specializing in talent acquisition and employee management, leveraging data and AI to enhance efficiency and streamline processes.",
  },
  {
    img: SowreshImg,
    name: "Mr. Sowreshwar K",
    role: "Head of Research & Development",
    Icon: Cpu,
    accent: "#f87171",
    desc: "Expertise in Electronic circuit design and testing, Soldering & Product development.",
  },
  {
    img: JoelImg,
    name: "Mr. S. Joel",
    role: "Hardware Team Head",
    Icon: CircuitBoard,
    accent: "#f97316",
    desc: "Expertise in robotics, PCB design, AI-driven solutions, embedded systems & IoT project development.",
  },
  {
    img: PadmeshImg,
    name: "Mr. Padmesh M",
    role: "Head of Software",
    Icon: Code2,
    accent: "#60a5fa",
    desc: "Directed the development of multiple web-based projects, coordinated team efforts, and delivered reliable, user-focused solutions.",
  },
  {
    img: AneeshImg,
    name: "Mr. Aneesh M",
    role: "Head of Student Bootcamp",
    Icon: GraduationCap,
    accent: "#fb923c",
    desc: "Empowering the next generation of tech leaders through comprehensive and hands-on educational programs.",
  },
];

const HeadsPage = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (name) => {
    setFlipped(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <ThemeLayout>
      <main className="fade-in">

        {/* ── HERO ── */}
        <section className="page-section text-center heads-hero-section">
          <p className="heads-hero-eyebrow">Aethonix Solutions</p>
          <h1 className="hero-title heads-hero-title">
            Heads of Aethonix
          </h1>
          <p className="heads-hero-desc">
            Meet the visionaries and innovators driving Aethonix Solutions forward — each a leader in their field.
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div className="container">
          <div className="dark-divider heads-divider" />
        </div>

        {/* ── TEAM GRID ── */}
        <section className="page-section heads-grid-section">
          <div className="heads-grid">
            {employees.map((emp) => (
              <div
                key={emp.name}
                className="head-card"
                onClick={() => toggleFlip(emp.name)}
              >
                <div className={`head-card-inner${flipped[emp.name] ? " is-flipped" : ""}`}>

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
                      <emp.Icon size={36} strokeWidth={1.5} />
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

