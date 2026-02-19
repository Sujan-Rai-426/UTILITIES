import React from 'react';
import Reveal from './Viewport_Reveal'; // Adjust this path if your utility is elsewhere

const Viewport_Reveal_Usage = () => {
    return (
        <div className="usage-wrapper">
            <style>{`
                .usage-wrapper {
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto;
                    text-align: left;
                    padding-bottom: 100px;
                }

                .usage-section {
                    margin-top: 80px;
                    padding-top: 40px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #646cff;
                    font-weight: 700;
                    margin-bottom: 10px;
                    display: block;
                }

                .demo-box {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 40px;
                    margin-top: 20px;
                }

                .grid-3 {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                    margin-top: 20px;
                }

                h2 { margin: 0 0 10px 0; font-size: 1.8rem; }
                p { margin: 0; opacity: 0.7; line-height: 1.5; }
                
                @media (max-width: 768px) {
                    .usage-wrapper { padding: 20px; }
                }
            `}</style>

            {/* HEADER */}
            <header style={{ padding: '60px 0' }}>
                <Reveal direction="down" delay="0.1s">
                    <span className="label">Component Utility</span>
                    <h1 style={{ margin: '10px 0' }}>Reveal Showcase</h1>
                    <p>Testing intersection observer triggers and directional offsets.</p>
                </Reveal>
            </header>

            {/* DIRECTION: UP */}
            <section className="usage-section">
                <Reveal direction="up" delay="0.2s">
                    <span className="label">Direction: Up (Default)</span>
                    <div className="demo-box">
                        <h2>Slide Up</h2>
                        <p>The standard entrance animation. Clean and predictable for most content blocks.</p>
                    </div>
                </Reveal>
            </section>

            {/* DIRECTION: LEFT & RIGHT */}
            <section className="usage-section">
                <span className="label">Direction: Horizontal</span>
                <div className="grid-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <Reveal direction="left" delay="0.3s">
                        <div className="demo-box">
                            <h3>From Left</h3>
                            <p>Offset to the left.</p>
                        </div>
                    </Reveal>
                    <Reveal direction="right" delay="0.4s">
                        <div className="demo-box">
                            <h3>From Right</h3>
                            <p>Offset to the right.</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* DIRECTION: DOWN + STAGGER */}
            <section className="usage-section" id="SUJAN">
                <span className="label">Direction: Down + Staggered Delays</span>
                <div className="grid-3">
                    {[1, 2, 3].map((item, i) => (
                        <Reveal key={item} direction="down" delay={`${i * 0.2}s`}>
                            <div className="demo-box" style={{ textAlign: 'center' }}>
                                <h2 style={{ color: '#646cff' }}>{item}</h2>
                                <p>Delay: {i * 0.2}s</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* FOOTER ACTION */}
            <section className="usage-section" style={{ textAlign: 'center', borderBottom: 'none' }}>
                <Reveal direction="up" delay="0.5s">
                    <p style={{ marginBottom: '20px' }}>Ready to use in your main project files.</p>
                    <button onClick={()=> window.scrollTo(0,0)}>Back to Top</button>
                </Reveal>
            </section>
        </div>
    );
};

export default Viewport_Reveal_Usage;