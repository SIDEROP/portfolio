import React, { useEffect, useState } from 'react'
import ProjectAdv from "./ProjectAdv"

const Project = () => {
  
  const [isProjectOpen, setIsProjectOpen] = useState(false)

  const toggleProject = () => {
    setIsProjectOpen(!isProjectOpen)
  }


  return (
    <div id='project' className=' project w-full h-screen relative overflow-hidden flex justify-center items-center bg-transparent'>
      <div className={`relative w-full h-full bg-transparent flex justify-center items-center cursor-pointer bg-gradient-to-b from-[#EADFD8] to-[#A3D8DC] ${isProjectOpen ? 'bg-[#323744]' : ''}`}>
        
        <h1 className='hidden sm:block w-[clamp(100px,70%,70%)]  text-[40px] sm:text-[7vw] absolute left-0 pl-[10%] select-none text-transparent font-extrabold tracking-wider animate-bounce' style={{textShadow: '3px 3px 0 #ff69b4, 6px 6px 0 #4b0082, 9px 9px 0 #00bfff '}}>
            <span className='hover:text-pink-400 transition-all duration-300 transform hover:scale-110 inline-block'>P</span>
            <span className='hover:text-purple-400 transition-all duration-300 transform hover:scale-110 inline-block'>R</span>
            <span className='hover:text-blue-400 transition-all duration-300 transform hover:scale-110 inline-block'>O</span>
            <span className='hover:text-pink-400 transition-all duration-300 transform hover:scale-110 inline-block'>J</span>
            <span className='hover:text-purple-400 transition-all duration-300 transform hover:scale-110 inline-block'>E</span>
            <span className='hover:text-blue-400 transition-all duration-300 transform hover:scale-110 inline-block'>C</span>
            <span className='hover:text-pink-400 transition-all duration-300 transform hover:scale-110 inline-block'>T</span>
            <span className='hover:text-purple-400 transition-all duration-300 transform hover:rotate-45 inline-block'>{">"}</span>
        </h1>

        <div className='absolute sm:hidden left-[10%] -rotate-90 text-[10vh]'>
          <span className="hover:text-pink-400 transition-all duration-300 transform hover:scale-110 inline-block">P</span>
          <span className="hover:text-purple-400 transition-all duration-300 transform hover:scale-110 inline-block">R</span>
          <span className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110 inline-block">O</span>
          <span className="hover:text-pink-400 transition-all duration-300 transform hover:scale-110 inline-block">J</span>
          <span className="hover:text-purple-400 transition-all duration-300 transform hover:scale-110 inline-block">E</span>
          <span className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110 inline-block">C</span>
          <span className="hover:text-pink-400 transition-all duration-300 transform hover:scale-110 inline-block">T</span>
        </div>

        <div className={ `absolute sm:h-[85vh] overflow-hidden h-full w-full sm:w-[85vw] flex justify-start items-center p-[1px_0px] sm:p-[0px_0px] rounded-none sm:rounded-[50px] select-none transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] backdrop-blur-md bg-opacity-80 pointer-events-none scrollbar-hide transform sm:hover:scale-105 ${isProjectOpen ? `left-[0%] sm:left-[6%] pointer-events-auto w-[100vw] sm:w-[85vw] ` : 'left-[60%] h-[77vh] sm:h-[85vh] bg-white sm:bg-transparent rounded-[5%] sm:rounded-[0px]'}`} style={{boxShadow: '0 0 25px rgba(255,255,255,0.3), 0 0 50px rgba(255,255,255,0.2), 0 0 75px rgba(255,255,255,0.1)'}}>
          <div id='projectSlider' className={`overflow-x-hidden relative min-w-full h-full bg-transparent  flex-wrap gap-[6%] z-[1] sm:min-w-full sm:rounded-[0%] sm:min-h-full sm:mr-[15px] sm:gap-[2%] sm:p-[2%] xs:flex-col ${!isProjectOpen ? '':'p-[2%] pointer-events-auto '}`} >
            <ProjectAdv/>
          </div>
        </div>

        <button 
          onClick={toggleProject}
          className={`absolute z-20 w-12 h-[100px] flex justify-center items-center transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] text-[35px] rounded-[25px] font-bold transform sm:hover:scale-110 ${isProjectOpen ? 'left-[0%] sm:left-[6%] bg-gradient-to-br from-pink-500 scale-75 sm:scale-100 to-purple-500 text-white' : 'left-[60%] bg-gradient-to-br from-blue-400 to-purple-400'}`}
          style={{boxShadow: '0 0 15px rgba(255,105,180,0.5), 0 0 30px rgba(75,0,130,0.3)'}}
        >
          {"<"}
        </button>
      </div>
    </div>
  )
}

export default Project