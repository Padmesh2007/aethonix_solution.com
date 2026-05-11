import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = ({ showToast }) => {
    const navigate = useNavigate();
    return (
        <section className="cta-section">
            <div className="cta-background-effects">
                <div className="cta-glow-mesh"></div>
                <div className="particles" style={{ opacity: 0.3 }}></div>
            </div>
            <div className="container cta-container">
                <div className="cta-box">
                    <h2 className="cta-title">Want to learn more?</h2>
                    <button className="cta-btn" onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}>GET IN TOUCH</button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
