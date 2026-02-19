import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Scroll_To_SectionID } from './/Scroll_To_SectionID';

const Scroll_To_SectionID_Usage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="scroll-usage-container">
            <style>{`
                .scroll-usage-container {
                    text-align: left;
                    max-width: 1000px;
                    margin: 0 auto;
                    color: white;
                }

                /* Fixed Navbar */
                .demo-nav {
                    position: fixed;
                    top: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 90%;
                    max-width: 600px;
                    background: #1a1a1a;
                    border: 1px solid #333;
                    padding: 10px 20px;
                    border-radius: 12px;
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    z-index: 1000;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                }

                .nav-btn {
                    background: transparent;
                    border: none;
                    color: #aaa;
                    cursor: pointer;
                    font-weight: 500;
                    transition: 0.2s;
                }

                .nav-btn:hover { color: #646cff; }

                /* Sections */
                .content-section {
                    min-height: 80vh;
                    padding: 100px 40px;
                    margin-bottom: 20px;
                    background: #111;
                    border-radius: 20px;
                    border: 1px solid #222;
                }

                .id-tag {
                    color: #646cff;
                    font-family: monospace;
                    font-weight: bold;
                    display: block;
                    margin-bottom: 10px;
                }

                .spacer { height: 300px; display: flex; align-items: center; justify-content: center; opacity: 0.2; }
            `}</style>

            {/* NAVIGATION */}
            <nav className="demo-nav">
                <button className="nav-btn" onClick={(e) => Scroll_To_SectionID(e, 'INTRO', navigate, location)}>Intro</button>
                <button className="nav-btn" onClick={(e) => Scroll_To_SectionID(e, 'WORK', navigate, location)}>Work</button>
                <button className="nav-btn" onClick={(e) => Scroll_To_SectionID(e, 'SERVICES', navigate, location)}>Services</button>
                <button className="nav-btn" onClick={(e) => Scroll_To_SectionID(e, 'FOOT', navigate, location)}>Footer</button>
                <button className="nav-btn" 
                    onClick={(e) => Scroll_To_SectionID(e, 'SUJAN', navigate, location, '/utils/viewport-reveal')}
                >
                    SUJAN
                </button>
            </nav>

            {/* SECTION 1 */}
            <section id="INTRO" className="content-section">
                <span className="id-tag">#INTRO</span>
                <h1>Introduction</h1>
                <p>Testing the smooth scroll with a 70px offset.</p>
                <p>Scroll down manually or use the menu above.</p>
            </section>

            <div className="spacer">↓↓ Scroll Down ↓↓</div>

            {/* SECTION 2 */}
            <section id="WORK" className="content-section">
                <span className="id-tag">#WORK</span>
                <h1>Recent Work</h1>
                <p>This section is triggered by the 'Work' button.</p>
                <div style={{ height: '200px', background: '#222', borderRadius: '10px', marginTop: '20px' }}></div>
            </section>

            <div className="spacer">↓↓ Keep Going ↓↓</div>

            {/* SECTION 3 */}
            <section id="SERVICES" className="content-section">
                <span className="id-tag">#SERVICES</span>
                <h1>Services</h1>
                <p>The utility handles the math to ensure the title isn't covered by the fixed nav.</p>
            </section>

            <div className="spacer">↓↓ Almost There ↓↓</div>

            {/* SECTION 4 */}
            <section id="FOOT" className="content-section">
                <span className="id-tag">#FOOT</span>
                <h1>Footer Area</h1>
                <p>End of the usage demonstration.</p>
                <button onClick={(e) => handleScroll(e, 'INTRO')}>
                    Back to Start ↑
                </button>
            </section>
        </div>
    );
};

export default Scroll_To_SectionID_Usage;