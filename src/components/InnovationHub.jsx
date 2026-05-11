import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GraduationCap, Cpu } from 'lucide-react';

import student1 from '../assets/workshop/student-1.jpg';
import student2 from '../assets/workshop/student-2.jpg';
import student3 from '../assets/workshop/student-3.jpg';
import student4 from '../assets/workshop/student-4.jpg';
import student5 from '../assets/workshop/student-5.jpg';
import student6 from '../assets/workshop/student-6.jpg';
import student7 from '../assets/workshop/student-7.jpg';
import student8 from '../assets/workshop/student-8.jpg';
import student9 from '../assets/workshop/student-9.jpg';
import student10 from '../assets/workshop/student-10.jpg';

const brainobotCards = [
    { img: student1, title: 'Hands-on Learning', desc: 'Practical exposure to industry-grade tools and systems.' },
    { img: student2, title: 'Building the Future', desc: 'Students actively working on real-world robotics concepts.' },
    { img: student3, title: 'Collaborative Environment', desc: 'Teamwork and mentorship drive innovation forward.' },
    { img: student4, title: 'Sparking Curiosity', desc: 'Engaging minds with interactive electronic prototyping.' },
    { img: student5, title: 'Next-Gen Innovators', desc: 'Fostering a passion for technology at an early age.' },
    { img: student6, title: 'Problem Solving', desc: 'Developing critical thinking through hardware troubleshooting.' },
    { img: student7, title: 'IoT Integration', desc: 'Connecting the physical world through smart data.' },
    { img: student8, title: 'Robotics in Action', desc: 'Seeing code turn into movement and tangible results.' },
    { img: student9, title: 'Mentorship', desc: 'Guiding students through complex engineering challenges.' },
    { img: student10, title: 'Aethonix Bootcamp', desc: 'Our commitment to empowering education in tech.' },
];

const InnovationHub = ({ showToast }) => {
    const containerRef = useRef();
    const tl = useRef();

    useGSAP(() => {
        tl.current = gsap.to('.brainobot-ring', {
            rotationY: -360,
            duration: 50,
            repeat: -1,
            ease: 'none'
        });
    }, { scope: containerRef });

    const handleMouseEnter = () => tl.current?.pause();
    const handleMouseLeave = () => tl.current?.play();

    return (
        <section className="history-section" id="innovation-hub" ref={containerRef}>
            <div className="container">
                <h2 className="section-title text-center">Innovation & Impact</h2>

                <div className="product-grid">
                    <div className="product-card">
                        <span className="product-card-tag">Bootcamp</span>
                        <div className="product-card-icon mb-4">
                            <GraduationCap size={44} style={{ color: 'var(--accent)', filter: 'drop-shadow(0 0 6px rgba(255, 216, 77, 0.5))' }} />
                        </div>
                        <h4 className="product-card-title">PM Shri kendri vidhyala school</h4>
                        <p className="product-card-description">
                            Successfully completed a bootcamp, empowering students with hands-on robotics and IoT training.
                        </p>
                    </div>

                    <div className="product-card">
                        <span className="product-card-tag">Upcoming Products</span>
                        <div className="product-card-icon mb-4">
                            <Cpu size={44} style={{ color: 'var(--accent)', filter: 'drop-shadow(0 0 6px rgba(255, 216, 77, 0.5))' }} />
                        </div>
                        <h4 className="product-card-title">Bionic Arm & Rehab Tracker</h4>
                        <p className="product-card-description">
                            Developing high-precision bionic arms and wearables for real-time recovery monitoring.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '100px', marginBottom: '80px' }}>
                <h2 className="section-title text-center" style={{ marginBottom: '80px' }}>Brainobots Workshop</h2>
                <div className="scene-3d">
                    <div
                        className="carousel-ring large-ring brainobot-ring"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {brainobotCards.map((card, i) => (
                            <div
                                key={i}
                                className="carousel-card"
                                style={{ "--rotY": `${i * 36}deg` }}
                            >
                                <img src={card.img} alt={card.title} />
                                <div className="card-overlay">
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationHub;
