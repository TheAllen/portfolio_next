'use client';

import React, { useRef, useEffect } from 'react'
import HeroContent from '../sub/HeroContent';

const Hero = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.playbackRate = 0.65;
        }
    });
    
    return (
    <div className='relative flex flex-col h-full w-full black-and-white'>
        <video
        ref = {videoRef}
        autoPlay
        muted
        loop
        className='absolute top-[80px] left-0 z-[1] w-full h-full object-cover'
        >
            <source src='/mountain.webm' type='video/webm'/>
        </video>
        <HeroContent />
    </div>
    )
}

export default Hero