import {Globe} from 'lucide-react'

function Header() {

    const navLinks=[
        {name:"Home",path:"/"},
        {name:"About",path:"/about"},
        {name:"Projects",path:"/projects"},
        {name:"Contact",path:"/contact"},
    ];
    return (
        <header className="bg-[#111111] text-white px-6 py-4 flex items-center justify-between border-b border-gray-800">
            {/* Navigation Links */}
            <div className="flex items-center">
               
                <Globe className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" size={50} strokewidth={1.5}/>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <div key={link.name} className="relative group cursore-pointer">
                        <span className={`text-sm font-medium transition-colors ${link.active ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
                            {link.name}
                        </span>
                        {/* Active/Hover Indicator Bar */}
                        {link.active &&(
                            <div className="absolute -bottom-[22px] left-0 w-full h-[2px] bg-cyan-400"/>

                        )}
                    </div>
                ))}
            </nav>

            {/* CTA Button */}
            <button className="bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white px-6 py-2 rounded-full text-sm font-medium transition-all border border-gray-800">
                Let's talk
            </button>
            
        </header>           
    );
}
export default Header;