'use client';

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillsText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-100 to-blue-500' py-20>
          Programming languages and techology stacks
        </h1>
        </motion.div>

        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
          Always curious to try out new technologies
        </motion.div>
    </div>
  )
}

export default SkillsText