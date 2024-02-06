'use client';

import { slideInFromTop } from "@/utils/motion";
import { CodeBracketSquareIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react'

interface Props {
    src: string,
    title: string,
    description: string,
    techStack?: string,
    sourceCode?: string,
};

const ProjectCard = ({src, title, description, techStack, sourceCode}: Props) => {
  return (
    <div className='w-full md:w-1/3 px-4 aspect-w-16 aspect-h-1'>

      <div className='Project-card relative overflow-hidden rounded-lg shadow-lg border border-gray-400'>
        <div className='w-full h-64 overflow-hidden'>
          <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className='w-full object-contain'
          />
        </div>

        <div className="relative p-6">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[7px] opacity-[0.7]'
            >
                <LightBulbIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className="Welcome-text text-[13px]">
                {techStack}
                </h1>
            </motion.div>

            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[7px] opacity-[0.7]'
            >
                <CodeBracketSquareIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className="Welcome-text text-[13px]">
                  <a href={sourceCode}>
                    Source
                  </a>

                </h1>
            </motion.div>

            <p className="mt-2 text-gray-300">{description}</p>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard