import profile from "../assets/profile.jpg";
import upwork from "../assets/upwork.jpg";
import resume from "../assets/resume.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white p-6 md:p-10 space-y-8">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* PROFILE CARD */}
        <div className="md:col-span-2 flex items-center gap-6 rounded-3xl 
          bg-gradient-to-br from-[#141414] to-[#0e0e0e] p-6 shadow-inner border border-white/5">
          
          <img
            src={profile}
            alt="Profile"
            className="w-36 h-36 rounded-2xl object-cover"
          />

          <div>
            <p className="text-xs tracking-widest text-white/60">A WEB DEVELOPER</p>
            <h1 className="text-3xl font-semibold mt-1">Biruk Fikadu.</h1>
            <p className="text-white/70 mt-2">I am a WordPress Web Developer.</p>
          </div>
        </div>

        {/* UPWORK */}
        <div className="rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
          p-6 flex flex-col items-center justify-center border border-white/5">
          
          <img src={upwork} alt="Upwork" className="w-14 mb-4" />
          <p className="text-lg">Hire Me on Upwork</p>
        </div>

        {/* PORTFOLIO */}
        <div className="rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
          p-6 flex items-center justify-center border border-white/5">
          
          <p className="text-lg">Portfolios</p>
        </div>
      </div>

      {/* MIDDLE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* CV */}
        <div className="rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
          p-6 flex flex-col items-center justify-center border border-white/5">
          
          <img src={resume} alt="Resume" className="w-14 mb-4" />
          <p className="text-lg">Download CV</p>
        </div>

        {/* SERVICES */}
        <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
          p-6 border border-white/5 flex flex-col justify-center">
          
          <p className="text-xs tracking-widest text-white/60">SPECIALIZATION</p>
          <h2 className="text-2xl font-semibold mt-2">Services Offering</h2>
        </div>

        {/* SOCIAL */}
        <div className="rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
          p-6 border border-white/5 flex flex-col items-center justify-center gap-4">
          
          <p className="text-xs tracking-widest text-white/60">STAY WITH ME</p>
          <div className="flex gap-4 text-xl">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
              in
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
              ✈
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* STATS */}
        <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
          p-6 border border-white/5 flex justify-around text-center">
          
          <div>
            <h2 className="text-3xl font-semibold">01</h2>
            <p className="text-sm text-white/60">Years Experience</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">+5</h2>
            <p className="text-sm text-white/60">Clients Worldwide</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">+10</h2>
            <p className="text-sm text-white/60">Total Projects</p>
          </div>
        </div>

        {/* CTA */}
        <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-[#141414] to-[#0e0e0e] 
          p-6 border border-white/5 flex items-center justify-center">
          
          <h1 className="text-4xl font-semibold">
            Let's work <span className="text-blue-500">together.</span>
          </h1>
        </div>
      </div>

    </div>
  );
}

export default Home;
