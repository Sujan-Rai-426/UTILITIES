import React, { useState, useEffect } from 'react';

const Image_Stack = ({ initialImages = [], interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Sanitize input
    const rawImages = Array.isArray(initialImages) ? initialImages : [];

    // Helper to extract the URL whether it's a string or a media object
    const getImageUrl = (item) => {
        if (typeof item === 'string') return item;
        return item?.image || ''; // Accesses the .image property from your media folder objects
    };

    const rotateStack = () => {
        if (rawImages.length <= 1) return;
        setCurrentIndex((prev) => (prev + 1) % rawImages.length);
    };

    useEffect(() => {
        if (rawImages.length <= 1) return;
        const timer = setInterval(rotateStack, interval);
        return () => clearInterval(timer);
    }, [interval, rawImages.length]);

    if (rawImages.length === 0) return null;

    return (
        <>
            <style>{`
                .portal-container {
                    position: relative;
                    width: 380px;
                    height: 500px;
                    cursor: pointer;
                    transform-style: preserve-3d;
                    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                }

                .portal-container:hover {
                    transform: rotateY(-10deg) rotateX(5deg);
                }

                .portal-card {
                    position: absolute;
                    inset: 0;
                    border-radius: 40px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: #111;
                    transition: all 0.9s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .portal-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    pointer-events: none;
                }

                .portal-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
                }

                .layer-0 {
                    z-index: 10;
                    transform: translateZ(0) scale(1);
                    opacity: 1;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    visibility: visible;
                }

                .layer-1 {
                    z-index: 5;
                    transform: translateZ(-80px) translateY(30px) translateX(20px) scale(0.9);
                    opacity: 0.6;
                    filter: blur(2px) grayscale(30%);
                    visibility: visible;
                }

                .layer-2 {
                    z-index: 2;
                    transform: translateZ(-160px) translateY(60px) translateX(40px) scale(0.8);
                    opacity: 0.3;
                    filter: blur(4px) grayscale(60%);
                    visibility: visible;
                }

                .layer-hidden {
                    z-index: 1;
                    transform: translateZ(-200px) scale(0.7);
                    opacity: 0;
                    visibility: hidden;
                }

                .hud-corner {
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    border: 2px solid #9f47ff;
                    z-index: 20;
                    pointer-events: none;
                }
                .top-left { top: -10px; left: -10px; border-right: none; border-bottom: none; }
                .bottom-right { bottom: -10px; right: -10px; border-left: none; border-top: none; }

                @media (max-width: 968px) {
                    .portal-container { width: 280px; height: 380px; }
                }
            `}</style>

            <div className="portal-container" onClick={rotateStack}>
                {rawImages.map((item, index) => {
                    const imageUrl = getImageUrl(item);
                    
                    // Calculate relative position
                    let relativePos = (index - currentIndex + rawImages.length) % rawImages.length;
                    
                    let layerClass = "layer-hidden";
                    if (relativePos === 0) layerClass = "layer-0";
                    else if (relativePos === 1) layerClass = "layer-1";
                    else if (relativePos === 2) layerClass = "layer-2";

                    return (
                        <div 
                            key={item.id || imageUrl || index} 
                            className={`portal-card ${layerClass}`}
                        >
                            <img 
                                src={imageUrl} 
                                alt="Visual" 
                                className="portal-img" 
                                loading="eager"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/380x500?text=Image+Not+Found'; }}
                            />
                            <div className="portal-overlay"></div>
                        </div>
                    );
                })}
                <div className="hud-corner top-left"></div>
                <div className="hud-corner bottom-right"></div>
            </div>
        </>
    );
};

export default Image_Stack;



// ============  USAGE EXAMPLE ============

/*
const images = [
    {
        "id": 1,
        "image": "http://127.0.0.1:8000/media/Hero_Image/AccountEase.jpg",
        "updated_at": "2026-01-24T11:46:04.452733Z",
        "order": 0
    },
    {
        "id": 2,
        "image": "http://127.0.0.1:8000/media/Hero_Image/Team.jpg",
        "updated_at": "2026-01-24T11:48:46.178876Z",
        "order": 1
    }
];

<div>
    <Image_Stack initialImages={images} interval={4000} />
</div>

*/
