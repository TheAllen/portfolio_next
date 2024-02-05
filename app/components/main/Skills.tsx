'use client';

import { Frontend_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillsText from '../sub/SkillsText';

const Skills = () => {
  return (
    <section 
    id='skills'
    className = 'flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
    style={{transform: 'scale(0.9)'}}
    >
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>

            <SkillsText />
            {Skill_data.map((image, index) => (
                <SkillsDataProvider 
                    key={index}
                    src={image.Image} 
                    width={image.width} 
                    height={image.height} 
                    index={index} 
                />
            ))}
        </div>
    </section>
  )
}

export default Skills