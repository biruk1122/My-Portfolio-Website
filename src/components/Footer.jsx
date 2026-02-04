import {Globe} from 'lucide-react'
import {Link} from 'react-router-dom';


function Footer() {

    return (
        <footer className='bg-black text-cyan-500 py-12 px-4 flex flex-col items-center font-sans'>
            {/* Glowing Globe Icon */}
            <div className='mb-8'>
                <Globe className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" size={80} strokewidth={1.5}/>
            </div>

            {/* Top Divider and Metadata Label */}
            <div className='w-full max-w-4xl border-t border-gray-800 pt-2 mb-8 flex justify-between items-center text-xs uppercase tracking-widest text-gray-400'>
                <span className='text-cyan-500 border-b-2 border-cyan-500 pb-1'>Portfolio</span>
                <span>Fullstck Developer</span>
            </div>
            
            {/* Navigation Links */}
            <nav className='flex flex-wrap justify-center gap-x-12 gap-y-4 mb-10 text-sm font-medium uppercase tracking-widest'>
                <Link to="/" className='hover:underline'>Home</Link>
                <Link to="/about" className='hover:underline'>About</Link>
                <Link to="/projects" className='hover:underline'>Projects</Link>
                <Link to="/contact" className='hover:underline'>Contact</Link>
            </nav>

            {/* Copyright Section */}
            <div className='text-gray-400 text-sm'>
                © All rights reserved by ::
                <a href='#'
                className='text-cyan-500 hover:underline ml-1'>Biruk Fikadu</a>
            </div>
        </footer>
    )
}
    export default Footer;
