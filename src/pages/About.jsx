import { Globe, Mail, Linkedin, Github, Briefcase, GraduationCap, Code, Sparkles, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const shortSummary = `
    As a full-stack developer, my primary focus is on designing and developing web applications 
    that are functional, visually appealing, and user-friendly. I have a solid understanding of 
    modern web technologies, frameworks, and best practices that allow me to create custom 
    solutions that meet unique needs.
  `;

  const fullSummary = `
    As a full-stack developer, my primary focus is on designing and developing web applications 
    that are functional, visually appealing, and user-friendly. I have a solid understanding of 
    modern web technologies, frameworks, and best practices that allow me to create custom 
    solutions that meet unique needs.

    In my work, I have experience in developing both front-end and back-end functionality, 
    including designing and implementing responsive layouts, customizing existing plugins or 
    developing new ones, and integrating third-party APIs. I am familiar with popular web 
    technologies like HTML, CSS, JavaScript, React, and Node.js, and use them effectively to 
    develop high-quality applications.

    In addition to technical skills, I possess strong problem-solving and analytical abilities, 
    which help me to debug and troubleshoot issues effectively. I am also an excellent communicator, 
    which allows me to collaborate effectively with clients and other team members to understand 
    their needs and provide solutions that meet or exceed their expectations.
  `;

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b0b0b] via-[#111111] to-[#0a0a0a] text-white font-sans">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-l from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        </div>

        {/* Header Section */}
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">ABOUT ME</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Biruk Fikadu
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
           Full-stack developer specializing in functional, visually appealing, and user-friendly web applications.
          </p>
          
          {/* Animated underline */}
          <div className="mt-8 w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          
          {/* Left Column - Profile & Contact */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
              
              <div className="relative flex flex-col items-center text-center mb-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative w-36 h-36 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center border-2 border-white/20">
                    <Code className="w-20 h-20 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Fullstack Developer</h2>
                <p className="text-gray-400">Custom Full-Stack Solutions</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/item">
                  <div className="p-2 bg-blue-500/10 rounded-lg group-hover/item:bg-blue-500/20 transition-colors">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 group-hover/item:text-white transition-colors">Independent Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/item">
                  <div className="p-2 bg-purple-500/10 rounded-lg group-hover/item:bg-purple-500/20 transition-colors">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300 group-hover/item:text-white transition-colors">Electrical & Computer Engineering</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-8 border-t border-white/10">
                <h3 className="font-semibold text-gray-400 mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  STAY WITH ME
                </h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://linkedin.com/in/biruk-fikadu-b6053a240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-blue-400 group-hover/social:text-white transition-colors" />
                  </a>
                  
                  <a
                    href="https://github.com/biruk1122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gray-400/30 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover/social:text-white transition-colors" />
                  </a>
                  
                  <a
                    href="mailto:birukfikadu29@gmail.com"
                    className="group/social relative p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6 text-purple-400 group-hover/social:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Let's Work Together Card */}
            <Link to="/contact">
              <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-700 to-purple-600 p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
                  <p className="text-blue-100/80 mb-8">I develop scalable full-stack solutions that meet unique technical and business requirements.</p>
                  <div className="group/btn w-full bg-white text-blue-600 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <span>CONTACT ME</span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Self Summary Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-linear-to-br from-blue-500/20 to-blue-600/20 rounded-2xl border border-blue-500/20">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  SELF-SUMMARY
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p className="hover:text-gray-300 transition-colors duration-300">
                  {showFullSummary ? fullSummary : shortSummary}
                </p>
                
                {/* See More Details Button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => setShowFullSummary(!showFullSummary)}
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <span className="text-blue-400 group-hover/btn:text-white transition-colors">
                      {showFullSummary ? 'Show Less' : 'See More Details'}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-blue-400 group-hover/btn:text-white transition-all duration-300 ${showFullSummary ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Additional Details - Shown only when expanded */}
                {showFullSummary && (
                  <div className="space-y-8 pt-8 border-t border-white/10 animate-fadeIn">
                    {/* Technical Skills Section */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                        <div className="w-2 h-8 bg-linear-to-b from-blue-500 to-purple-500 rounded-full"></div>
                        Technical Expertise
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">HTML</span>
                            <span className="text-blue-400 font-bold">95%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[65%] h-full bg-linear-to-r from-yellow-500 to-cyan-200 rounded-full"></div>
                          </div>

                           <div className="flex items-center justify-between">
                            <span className="text-gray-300">CSS</span>
                            <span className="text-blue-400 font-bold">95%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[65%] h-full bg-linear-to-r from-pink-500 to-cyan-100 rounded-full"></div>
                          </div>

                            <div className="flex items-center justify-between">
                            <span className="text-gray-300">JavaScript</span>
                            <span className="text-blue-400 font-bold">90%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[65%] h-full bg-linear-to-r from-green-500 to-cyan-700 rounded-full"></div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Reactjs</span>
                            <span className="text-blue-400 font-bold">90%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[80%] h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Nextjs</span>
                            <span className="text-blue-400 font-bold">90%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-linear-to-r from-red-500 to-teal-900 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Nodejs</span>
                            <span className="text-blue-400 font-bold">90%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[65%] h-full bg-linear-to-r from-green-900 to-red-100 rounded-full"></div>
                          </div>

                           <div className="flex items-center justify-between">
                            <span className="text-gray-300">Mongodb</span>
                            <span className="text-blue-400 font-bold">90%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[65%] h-full bg-linear-to-r from-orange-500 to-red-500 rounded-full"></div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Sql</span>
                            <span className="text-blue-400 font-bold">90%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[90%] h-full bg-linear-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Wordpress</span>
                            <span className="text-blue-400 font-bold">95%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[60%] h-full bg-linear-to-r from-purple-500 to-pink-100 rounded-full"></div>
                          </div>

                           <div className="flex items-center justify-between">
                            <span className="text-gray-300">Figma</span>
                            <span className="text-blue-400 font-bold">80%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[60%] h-full bg-linear-to-r from-pink-500 to-purple-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Capabilities */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                        <div className="w-2 h-8 bg-linear-to-b from-green-500 to-cyan-500 rounded-full"></div>
                        Key Capabilities
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          'Front-end Development',
                          'Back-end Development',
                          'API Integration',
                          'Responsive Design',
                          'Performance Optimization',
                          'Cross-browser Compatibility',
                          'Plugin Development',
                          'Theme Customization',
                          'Debugging & Troubleshooting'
                        ].map((capability, index) => (
                          <div 
                            key={index}
                            className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group/cap"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full group-hover/cap:animate-pulse"></div>
                              <span className="text-sm text-gray-300 group-hover/cap:text-white">{capability}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Experience & Education Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Experience Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-linear-to-br from-purple-500/20 to-purple-600/20 rounded-2xl border border-purple-500/20">
                    <Briefcase className="w-8 h-8 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    EXPERIENCE
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="relative pl-10 before:absolute before:left-0 before:top-6 before:w-4 before:h-4 before:bg-linear-to-r from-blue-500 to-purple-500 before:rounded-full before:animate-pulse">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full mb-3 border border-blue-500/20">
                      <span>2021 - 2023</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">WordPress Developer</h3>
                    <p className="text-gray-400">Freelance & Professional Development</p>
                    <ul className="mt-4 space-y-2 text-gray-500 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Custom theme development
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Plugin customization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-linear-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-green-500/20">
                    <GraduationCap className="w-8 h-8 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    EDUCATION
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="relative pl-10 before:absolute before:left-0 before:top-6 before:w-4 before:h-4 before:bg-linear-to-r from-green-500 to-cyan-500 before:rounded-full before:animate-pulse">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 bg-green-500/10 px-4 py-2 rounded-full mb-3 border border-green-500/20">
                      <span>2015 – 2019</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Bachelor's Degree</h3>
                    <p className="text-white font-medium">Electrical & Computer Engineering</p>
                    <p className="text-gray-400 mt-2">Assosa University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Expertise - UPDATED FOR FULL-STACK DEVELOPMENT */}
            <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                EXPERTISE
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Frontend Development',
                  'Backend Development',
                  'Full-Stack Solutions',
                  'RESTful APIs',
                  'Database Design',
                  'UI/UX Implementation',
                  'Responsive Web Design',
                  'Performance Optimization',
                  'System Architecture'
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="group/skill bg-white/5 hover:bg-linear-to-br hover:from-blue-500/10 hover:to-purple-500/10 text-gray-400 hover:text-white px-6 py-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:translate-y-[-4px] text-center font-medium"
                  >
                    {skill}
                    <div className="w-0 group-hover/skill:w-full h-0.5 bg-linear-to-r from-blue-500 to-purple-500 mt-2 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;