import React from 'react';

const Footer = () => (
    <footer className="footer-section">
        <div className="container">
            <div className="footer-top">
                <div className="footer-branding">
                    <div className="footer-logo">
                        <span className="rocket-emoji"></span>
                        <h2>Aethonix Solutions</h2>
                    </div>
                    <p className="footer-intro-text">
                        <strong>Aethonix Solutions</strong> is a technology startup based in Coimbatore, Tamil Nadu, India, specializing in robotics, Internet of Things (IoT), and assistive technology. Founded around 2025 by Anush Rajasekar, the company develops purpose-driven innovations such as bionic arms and smart automation systems aimed at improving rehabilitation and enhancing everyday life.
                    </p>
                </div>
                <div className="footer-links-grid">
                    <div className="footer-column">
                        <h3 className="footer-column-title">PRODUCTS / SOLUTIONS</h3>
                        <ul className="footer-list">
                            <li>Robotics Systems</li>
                            <li>Internet of Things (IoT) Solutions</li>
                            <li>Bionic Arms</li>
                            <li>Educational Robotics Kits</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-column-title">CONTACT</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-icon phone-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </span>
                                <span>89036 56036</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon email-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2-2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </span>
                                <span>aethonixsolutions@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon insta-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </span>
                                <span>_aethonix_solutions</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon map-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </span>
                                <span>Coimbatore, TamilNadu, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Aethonix Solutions. All rights reserved.</p>
                <div className="footer-legal">
                    <a href="#">Terms & Conditions</a>
                    <span className="separator">|</span>
                    <a href="#">Privacy Policy</a>
                    <span className="separator">|</span>
                    <a href="#">Return Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
