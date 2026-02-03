import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Globe, Code, Users, CheckCircle, ExternalLink, Target, Layers, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

// Import your local images
import NexovateImage1 from '../assets/Image-1.png';
import NexovateImage2 from '../assets/Image-2.png';
import NexovateImage3 from '../assets/Image-3.png';
import NexovateImage4 from '../assets/Image-4.png';


// This would typically come from an API or database
const projectDetails = {
  1: {
    title: "MOVIE EXPLORER APP",
    subtitle: "Movie Search & Discovery Platform",
    category: "Web Application",
    type: "Frontend Development",
    description:
      "A React-based movie discovery application that allows users to explore trending movies and search for any title using real-time data from the TMDB API.",
    longDescription:
      "Movie Explorer is a modern web application built with React that enables users to search and discover movies in real time. The app integrates with the TMDB API to fetch movie data and uses Appwrite to track and analyze search trends. It features debounced search for performance optimization, detailed movie information displayed in a modal, and a fully responsive UI built with Tailwind CSS. The application also includes fallback poster handling to ensure a consistent user experience.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Appwrite",
      "TMDB API",
      "react-use"
    ],
    features: [
      "Real-time Movie Search with Debounce",
      "Trending Movies Analytics",
      "Detailed Movie Information Modal",
      "Responsive & Mobile-Friendly UI",
      "Search Trend Tracking with Appwrite",
      "Fallback Poster for Missing Images"
    ],
    stats: {
      project: "Personal Project",
      focus: "Frontend",
      launch: "2025",
      team: "Solo Project"
    },
    color: "from-indigo-500 to-pink-600",
    liveUrl: "https://movie-mate-app-ui.netlify.app/",
    githubUrl: "https://github.com/biruk1122/Movie-Mate-React-",
  
  },

  2: {
    title: "WEATHER APP",
    subtitle: "Real-Time Weather Forecast",
    category: "Web Application",
    type: "Frontend Development",
    description:
      "A simple and responsive weather application that provides real-time weather information and city search suggestions using the OpenWeatherMap API.",
    longDescription:
      "Weather App is a modern web application built with React, Vite, and TailwindCSS that allows users to search weather conditions by city. The app fetches real-time data from the OpenWeatherMap API and displays detailed information such as temperature, humidity, wind speed, and location. It also includes dynamic weather icons based on current conditions and a visually appealing, fully responsive user interface with gradient backgrounds.",
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "OpenWeatherMap API"
    ],
    features: [
      "City Search with Instant Suggestions",
      "Real-Time Weather Data",
      "Dynamic Weather Icons",
      "Responsive & Mobile-Friendly Design",
      "Gradient-Based UI"
    ],
    stats: {
      project: "Personal Project",
      focus: "Frontend",
      launch: "2025",
      team: "Solo Project"
    },
    color: "from-sky-400 to-blue-600",
    liveUrl: "https://mainweather-app.netlify.app",
    githubUrl: "https://github.com/biruk1122/Weathers-App",
   
  },

  3: {
    title: "CHILALO FOOD COMPLEX BLOG",
    subtitle: "Internal Company Blogging Platform",
    category: "Web Application",
    type: "Full-Stack Development",
    description:
      "A full-stack blog platform designed to engage employees and showcase the internal community of Chilalo Food Complex.",
    longDescription:
      "The Chilalo Food Complex Blog is a full-stack web application built to foster collaboration and connection among employees. It serves as a centralized platform for sharing company updates, recipes, employee stories, and events. The application features secure authentication, role-based access control, employee profile management, and an intuitive content management system, all delivered through a responsive and user-friendly interface.",
    technologies: [
      "React",
      "Flowbite",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    features: [
      "Secure User Authentication",
      "Role-Based Access Control",
      "Employee Profile Management",
      "Create, Edit & Delete Blog Posts",
      "Categories & Tags for Content Organization",
      "Responsive Design for All Devices"
    ],
    stats: {
      project: "Client / Internal Project",
      focus: "Full-Stack",
      launch: "2024",
      team: "Solo Project"
    },
    color: "from-emerald-500 to-green-700",
    liveUrl: "https://cfc-blog.onrender.com",
    githubUrl: "https://github.com/biruk1122/CFC-Blog",
  
  },

  4: {
    title: "NEXOVATE KNOWLEDGE BASE SEARCH",
    subtitle: "Internal Search & Knowledge Management System",
    category: "Web Application",
    type: "Full-Stack Development",
    description:
      "A full-stack search application designed to help teams quickly find relevant information from an internal knowledge base.",
    longDescription:
      "Nexovate Knowledge Base Search is a scalable full-stack application focused on fast and accurate content discovery. It enables users to perform full-text searches across structured knowledge base articles, with support for efficient indexing, filtering, and optimized querying. The platform features a clean and responsive interface and is built to scale as datasets grow.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "SQL",
      "ORM"
    ],
    features: [
      "Full-Text Search Across Articles",
      "Optimized Query Performance",
      "Content Categorization & Filtering",
      "Clean & Responsive UI",
      "Scalable Architecture"
    ],
    stats: {
      project: "Client / Internal Project",
      focus: "Full-Stack",
      launch: "2026",
      team: "Solo Project"
    },
    color: "from-slate-600 to-zinc-800",
    liveUrl: "https://nexovatekb.com",
    githubUrl: "#",
    screenshots: [
      NexovateImage1,
      NexovateImage2,
      NexovateImage3,
      NexovateImage4
    ]
  },

  5: {
    title: "HABESHAGPTAI",
    subtitle: "AI-Powered Chatbot Platform",
    category: "Web Application",
    type: "Full-Stack Development",
    description:
      "A full-stack AI-powered chatbot that enables real-time user conversations using a modern MERN architecture.",
    longDescription:
      "HabeshaGPTAI is a scalable AI-powered chatbot built with the MERN stack. The application provides a real-time chat experience through a responsive and intuitive interface while securely managing user authentication, sessions, and persistent chat history on the backend. The system is designed around a RESTful API architecture to ensure efficient data handling and long-term scalability.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MERN Stack"
    ],
    features: [
      "Real-Time Chat Interface",
      "Secure Authentication & Session Management",
      "Persistent Chat History",
      "RESTful API Architecture",
      "Responsive Design for All Devices"
    ],
    stats: {
      project: "Personal Project",
      focus: "Full-Stack",
      launch: "2026",
      team: "Solo Project"
    },
    color: "from-purple-600 to-indigo-700",
    liveUrl: "#",
    githubUrl: "https://github.com/biruk1122/HabeshaGPTAI",
 
  }
};

function ProjectDetails() {
  const { id } = useParams();
  const project = projectDetails[id];
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Check if project has screenshots, use empty array if not
  const screenshots = project.screenshots || [];

  const nextImage = () => {
    if (screenshots.length > 0) {
      setSelectedImage((prev) => (prev + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (screenshots.length > 0) {
      setSelectedImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0a0a0a] text-white font-sans">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Back Button */}
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Code className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">PROJECT DETAILS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
              {project.title}
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-6">{project.subtitle}</p>
          
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {project.type}
            </span>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Project Info */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Screenshots Section - Only show if there are screenshots */}
            {screenshots.length > 0 ? (
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white">Project Screenshots</h2>
                
                {/* Main Image Display */}
                <div className="relative mb-6">
                  <div 
                    className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group/main-img"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <img 
                      src={screenshots[selectedImage]} 
                      alt={`${project.title} screenshot ${selectedImage + 1}`}
                      className="w-full h-full object-cover group-hover/main-img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/main-img:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover/main-img:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  {screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <span className="text-sm text-white">
                      {selectedImage + 1} / {screenshots.length}
                    </span>
                  </div>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-3">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index 
                          ? 'border-blue-500 scale-105' 
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <img 
                        src={screenshot} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 ${
                        selectedImage === index ? 'bg-blue-500/20' : 'bg-black/0 hover:bg-black/20'
                      } transition-all duration-300`} />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white">Project Screenshots</h2>
                <p className="text-gray-400 text-center py-12">No screenshots are available for this project. You can visit the site using the live demo link.</p>
              </div>
            )}

            {/* Description */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-white">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
              <p className="text-gray-400 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            
            {/* Stats Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-white">Project Stats</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-400">Project Type</span>
                  </div>
                  <span className="text-white font-bold">{project.stats.project}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-green-400" />
                    <span className="text-gray-400">Focus Area</span>
                  </div>
                  <span className="text-white font-bold">{project.stats.focus}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-400">Launched</span>
                  </div>
                  <span className="text-white font-bold">{project.stats.launch}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-400">Team Size</span>
                  </div>
                  <span className="text-white font-bold">{project.stats.team}</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-xl bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-white">Project Links</h3>
              <div className="space-y-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-colors group/link"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-400" />
                      <span className="text-white">Live Demo</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-400 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700 transition-colors group/link"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-gray-300" />
                      <span className="text-white">View Code</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-300 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && screenshots.length > 0 && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              Close ×
            </button>
            
            <div className="relative">
              <img 
                src={screenshots[selectedImage]} 
                alt={`Fullscreen ${project.title}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
            
            <div className="mt-4 flex justify-center">
              <div className="flex gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      selectedImage === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;