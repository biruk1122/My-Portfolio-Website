import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Folder, TrendingUp } from 'lucide-react';

// Your 5 projects data
const allProjects = [
  {
    id: 1,
    title: "MOVIE EXPLORER APP",
    subtitle: "Movie Search & Discovery Platform",
    category: "Web Application",
    type: "Frontend Development",
    stats: { value: "TMDB API", label: "Data Source", percentage: "Real-time" },
    description: "React-based movie discovery application with real-time data from TMDB API and Appwrite analytics.",
    technologies: ["React", "Tailwind CSS", "Appwrite", "TMDB API", "react-use"],
    color: "from-indigo-500 to-pink-600",
    icon: "🎬"
  },
  {
    id: 2,
    title: "WEATHER APP",
    subtitle: "Real-Time Weather Forecast",
    category: "Web Application",
    type: "Frontend Development",
    stats: { value: "OpenWeather", label: "API", percentage: "Live Data" },
    description: "Real-time weather application with city search suggestions and dynamic weather icons.",
    technologies: ["React", "Vite", "TailwindCSS", "OpenWeatherMap API"],
    color: "from-sky-400 to-blue-600",
    icon: "🌤"
  },
  {
    id: 3,
    title: "CHILALO FOOD COMPLEX BLOG",
    subtitle: "Internal Company Blogging Platform",
    category: "Web Application",
    type: "Full-Stack Development",
    stats: { value: "MongoDB", label: "Database", percentage: "Secure Auth" },
    description: "Full-stack blog platform with authentication, role-based access, and content management.",
    technologies: ["React", "Flowbite", "Node.js", "Express", "MongoDB"],
    color: "from-emerald-500 to-green-700",
    icon: "📰"
  },
  {
    id: 4,
    title: "NEXOVATE KNOWLEDGE BASE SEARCH",
    subtitle: "Internal Search & Knowledge Management System",
    category: "Web Application",
    type: "Full-Stack Development",
    stats: { value: "Full-text", label: "Search", percentage: "Fast Results" },
    description: "Knowledge base search application with efficient indexing and optimized querying.",
    technologies: ["React", "Node.js", "Express", "SQL", "ORM"],
    color: "from-slate-600 to-zinc-800",
    icon: "🔍"
  },
  {
    id: 5,
    title: "HABESHAGPTAI",
    subtitle: "AI-Powered Chatbot Platform",
    category: "Web Application",
    type: "Full-Stack Development",
    stats: { value: "MERN", label: "Stack", percentage: "Real-time Chat" },
    description: "AI-powered chatbot with real-time conversations and persistent chat history.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "MERN Stack"],
    color: "from-purple-600 to-indigo-700",
    icon: "💬"
  }
];

function Projects() {
  const [filter, setFilter] = useState('ALL PROJECTS');

  const filteredProjects = filter === 'ALL PROJECTS' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter || project.type === filter);

  const categories = [
    'ALL PROJECTS',
    'Web Application',
    'Frontend Development',
    'Full-Stack Development'
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b0b0b] via-[#111111] to-[#0a0a0a] text-white font-sans">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-l from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        </div>

        {/* Header Section */}
        <header className="mb-12 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Folder className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">PORTFOLIO</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                  Projects & Work
                </span>
              </h1>
            </div>
            
            {/* Status Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">is always Opened</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Welcome to <span className="text-blue-400 font-semibold">My Projects</span> - A collection of my recent web development projects showcasing expertise in various platforms and technologies.
          </p>
          
          {/* Animated underline */}
          <div className="mt-8 w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </header>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Link 
              to={`/projects/${project.id}`} 
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Glow effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${project.color}/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Project Header */}
              <div className="relative mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{project.icon}</div>
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-lg text-gray-300">{project.subtitle}</p>
              </div>

              {/* Stats */}
              {project.stats && (
                <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-white/5">
                  <div className="text-2xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {project.stats.value}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">{project.stats.label}</span>
                      {project.stats.percentage && (
                        <span className="text-sm text-green-400 flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {project.stats.percentage}
                        </span>
                      )}
                    </div>
                    {project.stats.percentage && (
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-linear-to-r from-green-500 to-cyan-500 rounded-full"
                          style={{ width: project.stats.percentage }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-400 border border-white/10">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Category Tags */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    {project.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                  <span className="text-sm">View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-white/10">
            <span className="text-blue-400">Have a project in mind?</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Let's create something amazing together
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
       
      </div>
    </div>
  );
}

export default Projects;