import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="px-4 lg:px-6 bg-transparent backdrop-blur-sm shadow-md h-14 flex items-center justify-between">
            
            <div className="flex items-center">
                <GraduationCap className="text-xl mr-3" />
                <h1 className="text-lg font-semibold">EduPlatform</h1>
            </div>

            <button
                className="lg:hidden flex items-center text-xl ml-auto"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <X /> : <Menu />} 
            </button>

            <div
                className={`${isMobileMenuOpen ? 'flex ' : 'hidden'
                    } absolute lg:relative top-14 right-0 lg:top-auto lg:right-auto  bg-customBg lg:bg-transparent w-full lg:w-auto lg:flex flex-col lg:flex-row gap-4 sm:gap-6 px-4 lg:px-0`}
            >
                <Link to="/courses" className="text-lg font-medium hover:underline underline-offset-4">
                    Courses
                </Link>
                <Link to="/about" className="text-lg font-medium hover:underline underline-offset-4">
                    About
                </Link>
                <Link to="/contact" className="text-lg font-medium hover:underline underline-offset-4">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
