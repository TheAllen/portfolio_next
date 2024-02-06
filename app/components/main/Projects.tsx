import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-cyan-500' py-20>
            My Projects
        </h1>
        <br></br>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <ProjectCard
            src="https://i.postimg.cc/rsjZGWgR/Lyon.png"
            title="City Visualization 3D"
            description="This app generates beautiful 3D models of famous Cities around the world! Using Esri ArcGIS api tools to create amazing 3D visualizations."
          />
          <ProjectCard
            src="https://i.postimg.cc/cJfmMwL1/covidtracker.png"
            title="Interactive Website Cards"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="https://i.postimg.cc/jdjM0DZv/sylvanas.png"
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="https://i.postimg.cc/wM4cTk02/Myriad-Pic.png"
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="https://i.postimg.cc/15YJ9ydS/taskmanager.png"
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
    </div>
  )
}

export default Projects