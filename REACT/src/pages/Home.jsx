import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const utilities = [
        { name: 'Image Stack', path: '/image-stack', color: '#6a11cb' },
        // { name: 'Video Stack', path: '/video-stack', color: '#11387c' },
        { name: 'Viewport Reavel', path: '/viewport-reveal', color: '#96460d' },
        { name: 'Scroll To Section ID', path: '/scroll-to-section-id', color: '#1c90b1' },
        // { name: 'Converter', path: '/converter', color: '#ff4b1f' }
    ]

    return (
        <div>
            <h1> React Utilities </h1>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: "row",
                    gap: '2rem',
                    justifyItems: 'center'
                }}
            >
                {utilities.map(util => (
                    <div
                        key={util.name}
                        className="card"
                        onClick={() => navigate(`utils/${util.path}`)}
                        style={{
                            cursor: 'pointer',
                            padding: '1.7rem',
                            borderRadius: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `linear-gradient(135deg, ${util.color} 0%, #fff 100%)`,
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-8px)'
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)'
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = 'none'
                        }}
                    >
                        {util.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
