import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        closeMenu();
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'backdrop-blur-md shadow-lg'
                    : 'bg-white backdrop-blur-md'
            }`}
        >
            <nav className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
                <div className="text-gray-900 text-xl font-bold">suu3</div>

                <ul
                    className={`
          md:flex md:gap-5 md:static md:bg-transparent md:shadow-none md:p-0
          ${
              isMenuOpen
                  ? 'flex flex-col fixed left-0 top-16 bg-white w-full text-center shadow-lg py-8 gap-4'
                  : 'hidden'
          }
        `}
                >
                    {[
                        'home',
                        'about',
                        'skills',
                        'services',
                        'projects',
                        'contact',
                    ].map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => scrollToSection(item)}
                                className={`cursor-pointer rounded-xl px-5 py-2 text-gray-800 border-1 border-gray-400 font-medium hover:text-primary transition-colors duration-300 capitalize ${isScrolled ? 'shadow-lg' : '  bg-white'}`}
                            >
                                {item === 'services' ? '担当範囲' : item}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1 cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`}
                    />
                </button>
            </nav>
        </header>
    );
};

export default Header;
