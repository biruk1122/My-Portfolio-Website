import profile from "../assets/profile.jpg";
import { FiDownload, FiArrowRight, FiLinkedin, FiTwitter } from "react-icons/fi";
import {Link} from 'react-router-dom';
import { SiUpwork } from "react-icons/si";

function Home() {
  // Stats data
  const stats = [
    { value: "+02", label: "Years Experience" },
    { value: "+5", label: "Clients" },
    { value: "+5", label: "Total Projects" }
  ];

  // Social links
  const socials = [
    { icon: <FiLinkedin />, label: "LinkedIn" },
    { icon: <FiTwitter />, label: "Twitter" },
    { icon: <SiUpwork />, label: "Upwork" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0a0a0a] text-white p-4 md:p-8 space-y-6 md:space-y-8">
      
      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        
        {/* PROFILE CARD - Enhanced */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl 
          bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] 
          p-6 md:p-8 border border-white/10 hover:border-white/20 
          transition-all duration-500 hover:scale-[1.02]">
          
          {/* Subtle gradient overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
          
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
              <img
                src={profile}
                alt="Biruk Fikadu"
                className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover border-2 border-white/10 group-hover:border-white/20 transition-colors"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="text-xs md:text-sm tracking-widest text-white/60 mb-2">FULLSTACK WEB DEVELOPER</p>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Biruk Fikadu
              </h1>
              <p className="text-white/70 mt-3 md:mt-4 text-sm md:text-base leading-relaxed max-w-md">
                Full-stack developer focused on building modern, high-performance applications with clean, efficient code.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                  Frontend
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                  Backend
                </span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                  Wordpress
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* UPWORK CARD */}
        <a 
          href="https://www.upwork.com/freelancers/~01abc123" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
            p-6 border border-white/10 hover:border-green-500/30 hover:bg-gradient-to-br 
            hover:from-[#141414] hover:to-[#1a2a1a] transition-all duration-300 
            flex flex-col items-center justify-center text-center cursor-pointer"
        >
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 bg-green-500/10 rounded-full blur-lg group-hover:blur-xl transition-all" />
            <SiUpwork className="relative w-full h-full text-green-500 group-hover:scale-110 transition-transform" />
          </div>
          <p className="text-lg font-medium mb-2">Hire Me on Upwork</p>
        </a>

        {/* PORTFOLIO CARD */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
          p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 
          flex flex-col items-center justify-center cursor-pointer">
          
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl" />
          
          <div className="relative">
            <div className="text-5xl mb-4 opacity-20 group-hover:opacity-30 transition-opacity">
              ✦
            </div>
            <Link to="/projects">
            
            <p className="text-lg font-medium">Portfolios</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-white/50 group-hover:text-purple-400/70 transition-colors">
              <span>View Projects</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
            </Link>
          </div>
        </div>
      </div>

      {/* MIDDLE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        
        {/* CV DOWNLOAD */}
        <a 
          href="/Biruk_Fikadu_Resume.pdf" 
          download="Biruk_Fikadu_Fullstack_Developer_Resume.pdf"
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
            p-6 border border-white/10 hover:border-blue-500/30 hover:bg-gradient-to-br 
            hover:from-[#141414] hover:to-[#1a1a2a] transition-all duration-300 
            flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-lg group-hover:blur-xl transition-all" />
            <FiDownload className="relative w-full h-full text-blue-400 group-hover:scale-110 transition-transform" />
          </div>
          <p className="text-lg font-medium mb-2">Download CV</p>
          <p className="text-xs text-white/50 group-hover:text-blue-400/70 transition-colors">
            PDF • Fullstack Developer

          </p>
        </a>

        {/* SERVICES */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl 
          bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] 
          p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
          
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <p className="text-xs tracking-widest text-white/60 mb-3">SPECIALIZATION</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Services Offering</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {['Frontend Development', 'Backend Development', 'WordPress Development', 'Website Maintenance'].map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
                  <span className="text-sm md:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
          p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
          
          <p className="text-xs tracking-widest text-white/60 mb-6 text-center">STAY CONNECTED</p>
          
          <div className="flex justify-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href="#"
                className="group/social w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-white/5 to-white/10 border border-white/10 
                  hover:border-white/30 hover:from-white/10 hover:to-white/15 
                  transition-all duration-300 hover:scale-110 text-lg"
                aria-label={social.label}
              >
                <span className="group-hover/social:text-blue-400 transition-colors">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
          
          <p className="text-center text-xs text-white/50 mt-6 group-hover:text-white/70 transition-colors">
            Follow for updates
          </p>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        
        {/* STATS */}
        <div className="md:col-span-2 relative overflow-hidden rounded-3xl 
          bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] 
          p-6 md:p-8 border border-white/10">
          
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl 
          bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] 
          p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-500">
          
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Let's create something{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                amazing together.
              </span>
            </h1>
            
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Ready to bring your ideas to life? Let's discuss your project.
            </p>
            
            <Link to="/contact">
            <button className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full 
              bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 
              text-white font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 
              hover:scale-105">
              <span>Start a Project</span>
              <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;