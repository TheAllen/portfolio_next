'use client';

import React, { useRef, useEffect } from 'react'
import HeroContent from '../sub/HeroContent';

const Hero = () => {

    const videoRef = useRef(null);
    const videoStyles = {
        filter: 'grayscale(70%)'
    };

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.playbackRate = 1;
            videoRef.current.style.filter = 'contrast(40%)';
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
            <source src='/cabin.webm' type='video/webm'/>
        </video>
        <HeroContent />
    </div>
    )
}

export default Hero