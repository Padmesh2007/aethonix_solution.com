import React from 'react';
import { Link } from 'react-router-dom';

import basicKit from '../assets/kits/basic-kit.jpg';
import advancedKit from '../assets/kits/advanced-kit.jpg';

const Kits = () => (

    <section className="known-for-section" id="kits">

        <div className="container">

            <h4 className="section-subtitle">
                Bootcamp Kits
            </h4>

            <h2 className="section-title text-center">
                Our Bootcamp Kits
            </h2>

            <p className="section-description text-center">
                Professional robotics and electronics kits designed to help students
                learn, build, and innovate with real-world hardware.
            </p>



            <div className="stats-grid">



                {/* BASIC KIT */}

                <div className="premium-card">

                    <div style={{
                        position:"relative",
                        marginBottom:"20px",
                        borderRadius:"14px",
                        overflow:"hidden"
                    }}>

                        <img
                            src={basicKit}
                            alt="Basic Bootcamp Kit"
                            style={{
                                width:"100%",
                                height:"220px",
                                objectFit:"cover"
                            }}
                        />

                        <div style={{
                            position:"absolute",
                            top:"14px",
                            right:"14px",
                            background:"var(--primary)",
                            color:"#000",
                            padding:"5px 14px",
                            borderRadius:"40px",
                            fontSize:"12px",
                            fontWeight:"700"
                        }}>
                            Basic
                        </div>

                    </div>



                    <h3 className="stat-number" style={{fontSize:"20px"}}>
                        Essential Bootcamp Kit
                    </h3>

                    <p className="section-description">
                        Includes multimeter, breadboard, electronic components and
                        sensors to start building robotics projects easily.
                    </p>



                    <div style={{
                        display:"flex",
                        gap:"8px",
                        flexWrap:"wrap"
                    }}>

                        <span className="kit-tag">
                            Multimeter
                        </span>

                        <span className="kit-tag">
                            Breadboard
                        </span>

                        <span className="kit-tag">
                            Sensors
                        </span>

                    </div>

                    <Link 
                        to="/pricing" 
                        className="theme-btn" 
                        style={{marginTop: "24px", display: "block", textAlign: "center", textDecoration: "none"}}
                    >
                        View Details
                    </Link>

                </div>





                {/* ADVANCED KIT */}

                <div className="premium-card">

                    <div style={{
                        position:"relative",
                        marginBottom:"20px",
                        borderRadius:"14px",
                        overflow:"hidden"
                    }}>

                        <img
                            src={advancedKit}
                            alt="Advanced Bootcamp Kit"
                            style={{
                                width:"100%",
                                height:"220px",
                                objectFit:"cover"
                            }}
                        />

                        <div style={{
                            position:"absolute",
                            top:"14px",
                            right:"14px",
                            background:"var(--primary)",
                            color:"#000",
                            padding:"5px 14px",
                            borderRadius:"40px",
                            fontSize:"12px",
                            fontWeight:"700"
                        }}>
                            Advanced
                        </div>

                    </div>



                    <h3 className="stat-number" style={{fontSize:"20px"}}>
                        Pro Innovation Kit
                    </h3>

                    <p className="section-description">
                        Includes soldering station, advanced microcontrollers and
                        modules for professional prototyping.
                    </p>



                    <div style={{
                        display:"flex",
                        gap:"8px",
                        flexWrap:"wrap"
                    }}>

                        <span className="kit-tag">
                            Soldering
                        </span>

                        <span className="kit-tag">
                            Advanced MCU
                        </span>

                        <span className="kit-tag">
                            Modules
                        </span>

                    </div>

                    <Link 
                        to="/pricing" 
                        className="theme-btn" 
                        style={{marginTop: "24px", display: "block", textAlign: "center", textDecoration: "none"}}
                    >
                        View Details
                    </Link>

                </div>



            </div>

        </div>

    </section>

);

export default Kits;