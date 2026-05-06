import React from 'react';
import workshopHero from '../assets/workshop/workshop.jpg';
import workshop1 from '../assets/workshop/workshop-1.jpg';
import sowreshWorking from '../assets/workshop/sowresh working.jpg';

const Values = () => {
    const scrollRef = React.useRef(null);

    return (
        <section className="values-section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: "20px" }}>
                    <h2 className="section-title">What we stand for.</h2>
                    <p className="section-description">Our principles drive every innovation we create and every student we empower.</p>
                </div>
            </div>

            <div className="values-scroll-wrapper" ref={scrollRef}>
                <div className="container">
                    <div className="value-card-container">
                        
                        {/* Card 1 */}
                        <div className="value-card">
                            <div className="value-image">
                                <img src={workshopHero} alt="Robotics and IoT lab" />
                            </div>
                            <div className="value-content">
                                <h3 className="value-title">Our Core Pillars</h3>
                                <p>
                                    At <strong>Aethonix Solutions</strong>, we specialize in <strong>Electronics, IoT, Robotics, and Biomedical</strong> engineering. Our mission is to bridge the gap between these disciplines to create life-changing technologies.
                                </p>
                                <p>
                                    From advanced bionic solutions to smart automation, we push the boundaries of what's possible to solve real-world problems.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="value-card">
                            <div className="value-image">
                                <img src={workshop1} alt="Collaborative Learning" />
                            </div>
                            <div className="value-content">
                                <h3 className="value-title">Empowering Education</h3>
                                <p>
                                    We believe that the future of technology lies in hands-on learning. Through our <strong>Student Bootcamp</strong> programs, we provide aspiring engineers with practical exposure to industry-grade tools and systems.
                                </p>
                                <p>
                                    Our workshops are designed to inspire the next generation of innovators by providing the mentorship and resources they need to succeed in the tech-driven world.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="value-card">
                            <div className="value-image">
                                <img src={sowreshWorking} alt="Innovation in progress" />
                            </div>
                            <div className="value-content">
                                <h3 className="value-title">Innovation at Heart</h3>
                                <p>
                                    Driven by curiosity and a passion for invention, our team works tirelessly to refine our hardware and software solutions. We focus on <strong>purpose-driven innovation</strong> that has a measurable impact on society.
                                </p>
                                <p>
                                    Whether it's optimizing a bionic hand or developing smart rehab trackers, we ensure every piece of technology we build is reliable, accessible, and revolutionary.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Hint for mobile */}
            <div className="text-center" style={{ marginTop: "-20px", opacity: 0.5, fontSize: "0.8rem" }}>
                <span>Swipe to explore →</span>
            </div>
        </section>
    );
};

export default Values;
