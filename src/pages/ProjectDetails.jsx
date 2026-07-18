import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Globe, Code, Users, CheckCircle, ExternalLink, Target, Layers, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

// Import your local images
import NexovateImage1 from '../assets/Image-1.png';
import NexovateImage2 from '../assets/Image-2.png';
import NexovateImage3 from '../assets/Image-3.png';
import NexovateImage4 from '../assets/Image-4.png';
import HabeshaMartImage1 from '../assets/Seller dashboard 1.png';
import HabeshaMartImage2 from '../assets/Seller Dashboard 2.png';
import HabeshaMartImage3 from '../assets/Seller Dashbaord 3.png';
import LmsStudentDashboard from '../assets/lms-student-dashboard.png';
import LmsCourseCatalog from '../assets/lms-course-catalog.png';
import LmsExamInterface from '../assets/lms-exam-interface.png';
import LmsExamSupport from '../assets/lms-exam-support.png';
import LmsAdminAnalytics from '../assets/lms-admin-analytics.png';
import LmsAiDocumentStudio from '../assets/lms-ai-document-studio.png';

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
      "Weather App is a modern web application built with React, Vite, and TailwindCSS that allows users to search weather conditions by city. The app fetches real-time data from the OpenWeatherMap API and displays detailed information such as temperature, humidity, wind speed, and location. It also includes dynamic weather icons based on current conditions and a visually appealing, fully responsive user interface with linear backgrounds.",
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
      "Nexovate Knowledge Base Search is a full-stack, scalable application developed for a company to support their call center agents. The platform allows agents to quickly and accurately find relevant information from the company\u2019s internal knowledge base, improving response times and overall efficiency.The system supports full-text search across structured knowledge base articles, with advanced indexing, filtering, and optimized querying to ensure fast and reliable results. Its clean and responsive interface makes it easy for agents to navigate and access the information they need, while the backend is designed to scale as the dataset grows.This project was completed as a private company project, so the GitHub repository is not publicly accessible.",
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
    liveUrl: "https://habesha-gptai.vercel.app",
    githubUrl: "https://github.com/biruk1122/HabeshaGPTAI",
 
  },

  6: {
    title: "NEXOVATE TRADING PLC",
    subtitle: "Tech Company Profile Website",
    category: "Web Application",
    type: "Frontend Development",
    description:
      "A professional company profile website for Nexovate Trading PLC, a leading technology company operating in Ethiopia.",
    longDescription:
      "Nexovate Trading PLC is a technology company based in Ethiopia that specializes in a wide range of tech services including Development, Cybersecurity, CCTV Camera Systems, Data Center Solutions, IT Consulting, Digital Transformation, and Customer Service Center solutions. This company profile website was built to showcase Nexovate Trading PLC\u2019s comprehensive service offerings, establish their professional online presence, and provide potential clients with detailed information about their technology solutions. The website features a modern, responsive design with sections highlighting each service category, company information, and contact details. Please note that the source code for this project resides in a private repository. To view the live site, please visit the live demo link.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Vite"
    ],
    features: [
      "Professional Company Profile Showcase",
      "Service Categories Display",
      "Responsive & Mobile-Friendly Design",
      "Modern UI with Tailwind CSS",
      "Contact & Inquiry Section",
      "Fast Performance with Vite"
    ],
    stats: {
      project: "Client Project",
      focus: "Frontend",
      launch: "2026",
      team: "Solo Project"
    },
    color: "from-blue-600 to-cyan-500",
    liveUrl: "https://nexovatetrading.com/",
    githubUrl: null
  },

  7: {
    title: "LELA CREATIVE MANAGEMENT",
    subtitle: "Artist Management Company Profile",
    category: "Web Application",
    type: "Frontend Development",
    description:
      "A company profile website for Lela Creative Management, an Ethiopian artist management company connecting local talent with global opportunities.",
    longDescription:
      "Lela Creative Management is an Ethiopian artist management company that works with famous Ethiopian musicians and film artists. The company specializes in Brand Partnerships, Global Partnerships, Event Services, and Film & TV Production. This website serves as the company\u2019s professional online presence, showcasing their portfolio of managed artists, highlighting their services, and providing a platform for potential collaborations. The site features a visually engaging design that reflects the creative industry, with sections dedicated to their artists, services, past events, and contact information. Please note that the source code for this project resides in a private repository. To view the live site, please visit the live demo link.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Vite"
    ],
    features: [
      "Artist Portfolio Showcase",
      "Service Offerings Display",
      "Event & Production Gallery",
      "Responsive & Mobile-Friendly Design",
      "Brand & Global Partnership Info",
      "Contact & Booking Section"
    ],
    stats: {
      project: "Client Project",
      focus: "Frontend",
      launch: "2026",
      team: "Solo Project"
    },
    color: "from-rose-500 to-purple-600",
    liveUrl: "https://lelamanagement.com",
    githubUrl: null
  },

  8: {
    title: "FUA CLEANING SERVICE",
    subtitle: "Cleaning Service Company Website",
    category: "Web Application",
    type: "Frontend Development",
    description:
      "A professional cleaning service website for FUA Cleaning Service, showcasing their residential and commercial cleaning solutions.",
    longDescription:
      "FUA Cleaning Service is a professional cleaning company that offers a wide range of specialized cleaning services including Carpet Cleaning, Sofa & Chair Cleaning, Arabian Mejlis Cleaning, and Mattress Cleaning. This company profile website was built to establish the company\u2019s online presence and showcase their expertise in the cleaning industry. The website features detailed service descriptions, professional imagery, pricing information, and an easy-to-use booking inquiry system. The design emphasizes cleanliness and professionalism with a clean, modern aesthetic that builds trust with potential customers. Please note that the source code for this project resides in a private repository. To view the live site, please visit the live demo link.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Vite"
    ],
    features: [
      "Service Listings with Details",
      "Professional Cleaning Portfolio",
      "Responsive & Mobile-Friendly Design",
      "Booking & Inquiry System",
      "Clean & Modern UI Design",
      "Service Area Information"
    ],
    stats: {
      project: "Client Project",
      focus: "Frontend",
      launch: "2026",
      team: "Solo Project"
    },
    color: "from-emerald-400 to-teal-600",
    liveUrl: "https://fuacleaning.com",
    githubUrl: null
  },

  10: {
    title: "SISAY ACADEMY LMS",
    subtitle: "AI-Assisted Student Learning Management System",
    category: "Web Application",
    type: "Full-Stack Development",
    description:
      "A modern learning management system with dedicated student and admin portals for course access, grade-based learning, examinations, academic support, AI-assisted content creation, and real-time performance monitoring.",
    longDescription:
      "Sisay Academy is a complete education platform designed around two connected experiences. Students register according to their grade level, access assigned courses and units, take course-based exams, review their scores, and ask teachers or administrators questions when they need clarification or support. The admin portal centralizes academic operations: administrators can build exams manually by course and unit, upload learning documents to generate exams and flashcards with AI, manage student course access, respond to exam questions, monitor individual scores, and use analytics to understand enrollment, activity, participation, and overall learning performance.",
    technologies: [
      "React",
      "Tailwind CSS",
      "REST API",
      "Role-Based Access",
      "AI Integration",
      "Vercel"
    ],
    features: [
      "Dedicated Student & Admin Portals",
      "Grade-Based Registration & Course Discovery",
      "Course and Unit-Based Online Exams",
      "Exam Results, Scores & Progress Tracking",
      "Student Questions, Teacher Replies & Support",
      "Manual Exam and Question Builder",
      "AI Exam Generation from Uploaded Documents",
      "AI-Generated Flashcards, Summaries & Explanations",
      "Student Course Access Management",
      "Admin Analytics for Enrollment, Activity & Performance"
    ],
    stats: {
      project: "EdTech Platform",
      focus: "Full-Stack + AI",
      launch: "Live",
      team: "Solo Project"
    },
    color: "from-blue-500 to-violet-600",
    liveUrl: "https://sisayacademy.vercel.app",
    githubUrl: null,
    screenshots: [
      LmsStudentDashboard,
      LmsCourseCatalog,
      LmsExamInterface,
      LmsExamSupport,
      LmsAdminAnalytics,
      LmsAiDocumentStudio
    ],
    screenshotLabels: [
      "Student Dashboard",
      "Grade-Based Course Catalog",
      "Student Exam Interface",
      "Exam Questions & Support",
      "Admin Analytics Dashboard",
      "AI Document Studio"
    ]
  },

  9: {
    title: "HABESHA MART",
    subtitle: "Full-Stack E-Commerce Platform",
    category: "Web Application",
    type: "Full-Stack Development",
    description:
      "A full-stack e-commerce platform built with the MERN stack, featuring Chapa and Stripe payment integration for seamless online shopping.",
    longDescription:
      "Habesha Mart is a full-stack e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js). The platform allows users to browse products, add items to their cart, and complete purchases online with integrated payment processing through Chapa and Stripe. The application features a comprehensive seller dashboard where vendors can manage their products, track orders, and monitor sales performance. The platform includes secure user authentication, product management, order tracking, and a responsive shopping experience optimized for all devices. Please note that the source code for this project resides in a private repository. To view the live site, please visit the live demo link.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chapa",
      "Stripe",
      "MERN Stack"
    ],
    features: [
      "Product Browsing & Search",
      "Shopping Cart Management",
      "Chapa Payment Integration",
      "Stripe Payment Integration",
      "Seller Dashboard with Analytics",
      "Order Management & Tracking",
      "Secure User Authentication",
      "Responsive Design for All Devices"
    ],
    stats: {
      project: "Client Project",
      focus: "Full-Stack",
      launch: "2026",
      team: "Solo Project"
    },
    color: "from-orange-500 to-red-600",
    liveUrl: "https://habesha-mart-swart.vercel.app",
    githubUrl: null,
    screenshots: [
      HabeshaMartImage1,
      HabeshaMartImage2,
      HabeshaMartImage3
    ]
  }
};

function ProjectDetails() {
  const { id } = useParams();
  const project = projectDetails[id];
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-linear-to-br from-[#0b0b0b] via-[#111111] to-[#0a0a0a] text-white flex items-center justify-center">
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
  const screenshotLabels = project.screenshotLabels || [];

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
    <div className="min-h-screen bg-linear-to-br from-[#0b0b0b] via-[#111111] to-[#0a0a0a] text-white font-sans">
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
            <span className={`bg-linear-to-r ${project.color} bg-clip-text text-transparent`}>
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
              <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-white">Project Screenshots</h2>
                  {screenshotLabels[selectedImage] && (
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-sm text-blue-300 border border-blue-500/20">
                      {screenshotLabels[selectedImage]}
                    </span>
                  )}
                </div>
                
                {/* Main Image Display */}
                <div className="relative mb-6">
                  <div 
                    className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group/main-img"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <img 
                      src={screenshots[selectedImage]} 
                      alt={screenshotLabels[selectedImage] || `${project.title} screenshot ${selectedImage + 1}`}
                      className="w-full h-full object-contain group-hover/main-img:scale-[1.02] transition-transform duration-500"
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View ${screenshotLabels[index] || `screenshot ${index + 1}`}`}
                      className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index 
                          ? 'border-blue-500 scale-105' 
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <img 
                        src={screenshot} 
                        alt={screenshotLabels[index] || `Thumbnail ${index + 1}`}
                        className="w-full h-full object-contain bg-black/20"
                      />
                      <div className={`absolute inset-0 ${
                        selectedImage === index ? 'bg-blue-500/20' : 'bg-black/0 hover:bg-black/20'
                      } transition-all duration-300`} />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white">Project Screenshots</h2>
                <p className="text-gray-400 text-center py-12">No screenshots are available for this project. You can visit the site using the live demo link.</p>
              </div>
            )}

            {/* Description */}
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-white">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
              <p className="text-gray-400 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
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
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
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
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
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
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
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
