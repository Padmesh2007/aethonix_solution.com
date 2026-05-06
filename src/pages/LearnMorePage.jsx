import React from 'react';
import { useNavigate } from 'react-router-dom';

const LearnMorePage = ({ showToast }) => {
    const navigate = useNavigate();
    return (
        <main className="learn-more-page">
            <section className="hero-section" style={{ background: '#000', padding: '100px 0', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <h4 className="section-subtitle" style={{ color: 'var(--primary)', fontWeight: 600 }}>Aethonix Solutions</h4>
                    <h1 className="hero-title" style={{ fontSize: '48px', marginBottom: '24px', color: '#fff' }}>Learn More</h1>
                    <p className="hero-description" style={{ maxWidth: '800px', margin: '0 auto', color: '#aaa' }}>
                        Discover how Aethonix Solutions is revolutionizing the intersection of robotics, biomedical technology, and education.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 0', background: '#0A0A0A' }}>
                <div className="container" style={{ color: '#fff', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '40px' }}>Our Expertise</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <div className="premium-card" style={{ padding: '30px' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Electronics & IoT</h3>
                            <p style={{ color: '#aaa' }}>Specializing in embedded systems and connected technologies for industrial and medical applications.</p>
                        </div>
                        <div className="premium-card" style={{ padding: '30px' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Robotics</h3>
                            <p style={{ color: '#aaa' }}>Designing advanced robotic solutions that enhance human capabilities and streamline processes.</p>
                        </div>
                        <div className="premium-card" style={{ padding: '30px' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Biomedical</h3>
                            <p style={{ color: '#aaa' }}>Innovating in the medical field with precision devices and bionic technologies.</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '60px' }}>
                        <button className="cta-btn" onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}>GET IN TOUCH</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LearnMorePage;
