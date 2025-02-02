import React from "react";
import mobileFrame from "../../public/frame-png/mobile-frame.png";
import desktopFrame from "../../public/frame-png/pngwing.png";
import TalkBridge from "../../public/imgs/TalkBridge.jpeg"
import GlideGo from "../../public/imgs/GlideGo.jpeg"
import ecommerce from "../../public/imgs/ecommerce.jpeg"
import ChatApp from "../../public/imgs/chatApp.jpeg"
import porfolio from "../../public/imgs/porfolio.png"
import extention from "../../public/imgs/extention.png"
import tweet from "../../public/imgs/tweet.png"
const projectData = {
  title: "Web Development Portfolio",
  description:
    "A showcase of my web development project featuring responsive design and modern technologies",

  projects: [
    {
      title: "TalkBridge",
      mobileImages: [
        TalkBridge,
        TalkBridge,
        TalkBridge
      ],
      desktopImages: [
        TalkBridge,
        TalkBridge,
        TalkBridge
      ],
      description: "3d Animation portfolio no using any framework and library only core javaScript css and react",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "HTML"
      ],
      links: {
        demo: "https://github.com/SIDEROP/TalkBridge",
        github: "https://github.com/SIDEROP/TalkBridge"
      }
    },
    {
      title: "GlideGo",
      mobileImages: [
        GlideGo,
        GlideGo,
        GlideGo
      ],
      desktopImages: [
        GlideGo,
        GlideGo,
        GlideGo
      ],
      description: "3d Animation portfolio no using any framework and library only core javaScript css and react",
      technologies: [
        "React",
        "JavaScript", 
        "CSS",
        "HTML"
      ],
      links: {
        demo: "https://github.com/SIDEROP/GlideGo",
        github: "https://github.com/SIDEROP/GlideGo"
      }
    },
    {
      title: "ChatApp",
      mobileImages: [
        ChatApp,
        ChatApp,
        ChatApp
      ],
      desktopImages: [
        ChatApp,
        ChatApp,
        ChatApp
      ],
      description: "3d Animation portfolio no using any framework and library only core javaScript css and react",
      technologies: [
        "React",
        "JavaScript",
        "CSS", 
        "HTML"
      ],
      links: {
        demo: "https://chatapp-jnib.onrender.com",
        github: "https://chatapp-jnib.onrender.com"
      }
    },
    {
      title: "ECOMMERCE",
      mobileImages: [
        ecommerce,
        ecommerce,
        ecommerce
      ],
      desktopImages: [
        ecommerce,
        ecommerce,
        ecommerce
      ],
      description: "3d Animation portfolio no using any framework and library only core javaScript css and react",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "HTML"
      ],
      links: {
        demo: "https://ecommerce-ohkj.onrender.com",
        github: "https://ecommerce-ohkj.onrender.com"
      }
    },
    {
      title: "PORTFOLIO",
      mobileImages: [
        porfolio,
        porfolio,
        porfolio
      ],
      desktopImages: [
        porfolio,
        porfolio,
        porfolio
      ],
      description: "3d Animation portfolio no using any framework and library only core javaScript css and react",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "HTML"
      ],
      links: {
        demo: "https://siderop.github.io/protfolio",
        github: "https://siderop.github.io/protfolio"
      }
    },
    {
      title: "Chrome Extension",
      mobileImages: [
        extention,
        extention,
        extention
      ],
      desktopImages: [
        extention,
        extention,
        extention
      ],
      description: "I made this project for myself because I don't like the default extension of cookie browser.",
      technologies: [
        "JavaScript",
        "CSS",
        "HTML",
        "Chrome API"
      ],
      links: {
        demo: "https://siderop.github.io/siderop",
        github: "https://siderop.github.io/siderop"
      }
    },
    {
      title: "Twitter Clone",
      mobileImages: [
        tweet,
        tweet,
        tweet
      ],
      desktopImages: [
        tweet,
        tweet,
        tweet
      ],
      description: "Hello, this is my full stack project which works like a full backend or it can work like a twitter in a few days or after that we will bring mor..🙏❤️❤️",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express"
      ],
      links: {
        demo: "https://siderop.github.io/twitter",
        github: "https://siderop.github.io/twitter"
      }
    },
    {
      title: "Flipkart Clone",
      mobileImages: [
        ecommerce,
        ecommerce,
        ecommerce
      ],
      desktopImages: [
        ecommerce,
        ecommerce,
        ecommerce
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, a?",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express"
      ],
      links: {
        demo: "https://siderop.github.io/flipkart",
        github: "https://siderop.github.io/flipkart"
      }
    }
  ]
};

const ProjectAdv = () => {
  const [showMobile, setShowMobile] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [currentProject, setCurrentProject] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const toggleView = () => {
    setShowMobile(!showMobile);
    setCurrentImageIndex(0);
  };

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };
  
  const changeProject = (index) => {
    setCurrentProject(index);
    setCurrentImageIndex(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center mb-8 sm:mb-16 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
          {projectData.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 animate-slideUp hover:text-gray-800 transition-colors duration-300">
          {projectData.description}
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 sm:mb-16">
        <div className="relative w-full">
          <div className="flex gap-6 mb-8 overflow-x-auto w-full scroll-smooth scrollbar-hide snap-x" id="projectScroll">
            {projectData.projects.map((project, index) => (
              <div
                key={index}
                onClick={() => changeProject(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`flex-shrink-0 cursor-pointer rounded-xl overflow-hidden backdrop-blur-lg bg-white/40 border transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 snap-center ${
                  currentProject === index
                    ? "border-blue-500 shadow-blue-200"
                    : "border-white/50 hover:border-blue-300"
                }`}
              >
                <div className="w-64 sm:w-72">
                  <div className="relative group">
                    <img 
                      src={project.desktopImages[0]}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                      currentProject === index ? "opacity-60" : "opacity-40"
                    }`}></div>
                  </div>
                  <div className="p-4 backdrop-blur-sm bg-white/60">
                    <h3 className={`text-base sm:text-lg font-semibold transition-all duration-300 ${
                      currentProject === index
                        ? "text-blue-600 scale-105"
                        : "text-gray-800"
                    }`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => {
              document.getElementById('projectScroll').scrollLeft -= 300;
            }}
            className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-white/50 hover:scale-110 hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => {
              document.getElementById('projectScroll').scrollLeft += 300;
            }}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-white/50 hover:scale-110 hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl w-full sm:w-fit shadow-2xl border border-white/50 transition-all duration-500 hover:shadow-3xl hover:bg-white/50">
          <div className="relative flex justify-center">
            {showMobile ? (
              <>
                <div className="relative w-[220px] sm:w-[320px] h-[440px] sm:h-[640px] transition-transform duration-500 animate-slideUp hover:scale-105">
                  <img
                    src={mobileFrame}
                    alt="Mobile frame"
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  />
                  <div className="absolute top-[3%] left-[2%] right-[2%] bottom-[3%] overflow-hidden rounded-[30px]">
                    <img
                      src={projectData.projects[currentProject].mobileImages[currentImageIndex]}
                      alt={`${projectData.projects[currentProject].title} - Mobile View ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative w-full max-w-[900px] transition-transform duration-500 animate-slideUp hover:scale-105">
                  <img
                    src={desktopFrame}
                    alt="Desktop frame"
                    className="w-full object-contain relative z-10 drop-shadow-2xl "
                  />
                  <div className="absolute left-[16%] right-[16%] bottom-[15%] top-[6%] overflow-hidden rounded-lg ">
                    <img
                      src={projectData.projects[currentProject].desktopImages[currentImageIndex]}
                      alt={`${projectData.projects[currentProject].title} - Desktop View ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={toggleView}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl transition-all duration-500 text-sm sm:text-base flex items-center gap-3 hover:scale-110 hover:shadow-xl group"
            >
              {showMobile ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5 4a1 1 0 112 0 1 1 0 01-2 0zm5-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                  <span>Switch to Desktop</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <span>Switch to Mobile</span>
                </>
              )}
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {(showMobile
              ? projectData.projects[currentProject].mobileImages
              : projectData.projects[currentProject].desktopImages
            ).map((img, index) => (
              <div
                key={index}
                onClick={() => changeImage(index)}
                className={`w-20 h-20 cursor-pointer border-2 rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 ${
                  currentImageIndex === index
                    ? "border-blue-500 shadow-xl"
                    : "border-white/50"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-125"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
              {projectData.projects[currentProject].title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 hover:text-gray-800 transition-colors duration-300">
              {projectData.projects[currentProject].description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {projectData.projects[currentProject].technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100/50 to-purple-100/50 backdrop-blur-sm text-blue-800 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
          Project Links
        </h2>
        <div className="flex justify-center gap-6 sm:gap-8">
          <a
            href={projectData.projects[currentProject].links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl transition-all duration-500 shadow-xl hover:shadow-2xl w-[180px] sm:w-[240px] hover:scale-110 group"
          >
            <span className="mr-2 text-sm sm:text-base group-hover:animate-pulse">Live Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
          <a
            href={projectData.projects[currentProject].links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl transition-all duration-500 shadow-xl hover:shadow-2xl w-[180px] sm:w-[240px] hover:scale-110 group"
          >
            <span className="mr-2 text-sm sm:text-base group-hover:animate-pulse">GitHub Repo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdv;
