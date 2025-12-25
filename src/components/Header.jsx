import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Globe, Menu, X} from 'lucide-react'


function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate=useNavigate();

    const navLinks=[
        {name:"Home",path:"/"},
        {name:"About",path:"/about"},
        {name:"Projects",path:"/projects"},
        {name:"Contact",path:"/contact"},
    ];
    return (
        <header className="bg-[#111111] text-white px-16 py-4 flex items-center justify-between border-b border-gray-800">
            {/* Navigation Links */}
            <div className="flex items-center">
               
                <Globe className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" size={50} strokewidth={1.5}/>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({isActive})=>
                        `relative text-sm font-medium ${isActive?"text-cyan-400":"text-gray-400 hover:text-white"}`}
                    >
                     {({isActive})=>(
                        <>
                        {link.name}
                        {isActive && (
                            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-400 rounded-full"></span>
                        )}
                        </>)}   
                    </NavLink>
                ))}
            </nav>

            {/* Mobile Menue Button */}
            <button className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav className="absolute top-16 left-0 w-full bg-[#111111] border-t border-gray-800 md:hidden flex flex-col items-center space-y-4 py-4 z-10">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={()=>setIsMobileMenuOpen(false)}
                            className={({isActive})=>
                                `text-sm font-medium ${isActive?"text-cyan-400":"text-gray-400 hover:text-white"}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
            )}

            {/* CTA Button */}
            <button
            onClick={()=>navigate("/contact")}
             className="hidden md:flex bg-[#1f1f1f] hover:bg-[#2a2a2a] 
             text-white px-6 py-2 rounded-full text-sm font-medium 
             transition-all border border-gray-800">
                Let's talk
            </button>
            
        </header>           
    );
}
export default Header;