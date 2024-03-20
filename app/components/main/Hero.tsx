'use client';

import React, { useRef, useEffect } from 'react'
import HeroContent from '../sub/HeroContent';

const Hero = () => {

    const videoRef = useRef(null);
    const videoStyles = {
        filter: 'grayscale(70%) contrast(40%)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensure it covers the full viewport
        zIndex: -1 // Ensure it stays behind other content
    };

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    });
    
    return (
    <div className='relative flex flex-col h-full w-full'>
        <video
        ref = {videoRef}
        style={videoStyles}
        autoPlay
        muted
        loop
        className='absolute left-0 z-[1] w-full object-cover'
        >
            <source src='/autumn.webm' type='video/webm'/>
        </video>
        <HeroContent />
    </div>
    )
}

export default Hero