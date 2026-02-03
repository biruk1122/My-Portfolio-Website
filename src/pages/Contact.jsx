import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Globe, 
  Facebook, 
  Linkedin, 
  Github, 
  Send,
  Twitter,
  Instagram,
  MessageCircle,
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      value: "birukfikadu29@gmail.com",
      link: "mailto:birukfikadu29@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "For project inquiries and collaborations"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      value: "+251 928011632",
      link: "tel:+251928011632",
      color: "from-purple-500 to-pink-500",
      description: "Available Monday to Friday, 2AM-11PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "https://maps.google.com",
      color: "from-green-500 to-teal-500",
      description: "Working remotely worldwide"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      value: "Within 24 Hours",
      color: "from-orange-500 to-red-500",
      description: "Quick response guaranteed"
    }
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-7 h-7" />,
      link: "https://linkedin.com/in/biruk-fikadu-b6053a240",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      handle: "Biruk Fikadu",
      description: "Professional network & updates"
    },
    {
      platform: "GitHub",
      icon: <Github className="w-7 h-7" />,
      link: "https://github.com/biruk1122",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/20",
      handle: "biruk1122",
      description: "Open source projects & code"
    },
    {
      platform: "Twitter",
      icon: <Twitter className="w-7 h-7" />,
      link: "https://twitter.com/BirukFikadu10",
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/20",
      handle: "@BirukFikadu10",
      description: "Daily updates & tech news"
    },
    {
      platform: "Telegram",
      icon: <MessageCircle className="w-7 h-7" />,
      link: "https://t.me/bura29mail",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      handle: "@bura29mail",
      description: "Quick messages & updates"
    },
    {
      platform: "Facebook",
      icon: <Facebook className="w-7 h-7" />,
      link: "https://facebook.com/Biruk29/",
      color: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20",
      handle: "Biruk Fikadu",
      description: "Community & announcements"
    },
    {
      platform: "Instagram",
      icon: <Instagram className="w-7 h-7" />,
      link: "https://instagram.com/yourprofile",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      
      description: "Behind the scenes & stories"
    }
  ];

  const workHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Available for emergencies" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0a0a0a] text-white font-sans">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-500/5 to-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-12 max-w-6xl relative">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Reach out through any of these channels.
            I'm always excited to discuss new opportunities and creative ideas.
          </p>
          
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Left Column - Contact Info Cards */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                item.link ? (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.includes('http') ? '_blank' : '_self'}
                    rel={item.link.includes('http') ? 'noopener noreferrer' : ''}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                  >
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Glow effect */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                    
                    <div className="relative">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${item.color}/20 mb-6 border ${item.color.split(' ')[1].replace('to-', 'border-')}/30`}>
                        {item.icon}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">{item.title}</h3>
                      <p className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {item.value}
                      </p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      
                      <div className="mt-6 flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">Click to connect</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                  >
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Glow effect */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                    
                    <div className="relative">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${item.color}/20 mb-6 border ${item.color.split(' ')[1].replace('to-', 'border-')}/30`}>
                        {item.icon}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-300 mb-2">{item.title}</h3>
                      <p className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {item.value}
                      </p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* Social Media Grid */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/20">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Social Networks
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`absolute inset-0 ${social.bgColor} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${social.bgColor} ${social.borderColor} mb-4`}>
                        <div className={"text-gray-300 group-hover/social:text-white transition-colors"}>
                          {social.icon}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-white mb-1">{social.platform}</h3>
                      <p className="text-sm text-gray-400 mb-2">{social.handle}</p>
                      <p className="text-xs text-gray-500">{social.description}</p>
                      
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Visit Profile</span>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover/social:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Working Hours & Quick Connect */}
          <div className="space-y-8">
            {/* Working Hours Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/20">
                  <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Working Hours
                </h2>
              </div>
              
              <div className="space-y-6">
                {workHours.map((time, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/time">
                    <span className="text-gray-300 group-hover/time:text-white transition-colors">{time.day}</span>
                    <span className="text-blue-400 font-medium">{time.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Currently Available</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Response time: Usually within 2 hours</p>
              </div>
            </div>

            {/* Quick Connect Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 via-blue-700/20 to-purple-600/20 p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative text-center">
                <div className="inline-flex p-3 rounded-2xl bg-blue-500/20 mb-6 border border-blue-500/30">
                  <Send className="w-8 h-8 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Quick Connect</h3>
                <p className="text-blue-100/80 mb-8">
                  Prefer instant messaging? Connect with me directly on any platform.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://t.me/bura29mail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/+251928011632"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#141414] via-[#0f0f0f] to-[#1a1a1a] p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-white">Connection Stats</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Response Rate</span>
                    <span className="text-green-400 font-bold">98%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Average Response Time</span>
                    <span className="text-blue-400 font-bold">2h</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-8">
            <div className="px-8 py-4 rounded-xl bg-gradient-to-br from-[#141414] to-[#1a1a1a] border border-white/10">
              <h2 className="text-2xl font-bold mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Whether it's a quick question or a complex project, I'm here to help bring your ideas to life.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:birukfikadu29@gmail.com"
              className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="tel:+251928011632"
              className="group/btn inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;