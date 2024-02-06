'use client';

import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { motion } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-cyan-500' py-20>
            My Projects
        </h1>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
          Building out projects that pique my interests
        </motion.div>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          
          <div className='flex flex-wrap -mx-2 items-stretch'>

            <ProjectCard
              src="https://i.postimg.cc/rsjZGWgR/Lyon.png"
              title="City Visualization 3D"
              description="Generate beautiful 3D models of famous Cities around the world! Using Esri ArcGIS api tools to create amazing 3D visualizations."
              techStack="Java, Spring Boot, mySQL | ArcGIS | React, JavaScript"
              sourceCode='https://github.com/TheAllen/Skyscraper3DVisualization'
            />
            <ProjectCard
              src="https://i.postimg.cc/cJfmMwL1/covidtracker.png"
              title="Covid-19 Tracker"
              description="Bring awareness of number of confirmed cases in US regions by scraping the JHU CSSE Covid19 data and show the Covid19 cases onto a map."
              techStack="Java, Spring Boot | React, JavaScript | Leaflet | JHU CSSE"
              sourceCode='https://github.com/TheAllen/Coronavirus-Tracker'
            />
            <ProjectCard
              src="https://i.postimg.cc/jdjM0DZv/sylvanas.png"
              title="OpenGL 3D Model"
              description="Allows you to upload OBJ models and view/edit the model. Implemented a quaternion-based camera."
              techStack="C++, OpenGL"
              sourceCode='https://github.com/TheAllen/3DModelLoader'
            />
            <ProjectCard
              src="https://i.postimg.cc/wM4cTk02/Myriad-Pic.png"
              title="Myriad Streaming App"
              description="Allows users to stream with OBS and share their contents. Users can create a account with Google and use the app right away!"
              techStack="Java, WebSocket, MongoDB | React, NodeJs | RTMP Server | Google OAuth2"
              sourceCode='https://github.com/TheAllen'
            />
            <ProjectCard
              src="https://i.postimg.cc/15YJ9ydS/taskmanager.png"
              title="Task Manager"
              description="A task management app with a Kanban board to organize to do, in progress, and done tasks."
              techStack="Java, Spring Boot, mySQL | React, JavaScript"
              sourceCode='https://github.com/TheAllen/Task-Manager'
            />
          </div>
        </div>
    </section>
  )
}

export default Projects