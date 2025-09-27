import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
                isScrolled ? 'shadow-lg' : ''
            }`}
            style={{
                backgroundColor: isScrolled
                    ? 'var(--color-bg-primary)'
                    : 'var(--color-bg-primary)',
            }}
        >
            <nav className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
                <div
                    className="text-xl font-bold"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    suu3
                </div>

                <div className="flex items-center gap-4">
                    <ul
                        className={`
              md:flex md:gap-5 md:static md:bg-transparent md:shadow-none md:p-0
              ${
                  isMenuOpen
                      ? 'flex flex-col fixed left-0 top-16 w-full text-center shadow-lg py-8 gap-4'
                      : 'hidden'
              }
            `}
                        style={{
                            backgroundColor: isMenuOpen
                                ? 'var(--color-bg-primary)'
                                : 'transparent',
                        }}
                    >
                        {[
                            { id: 'home', label: 'Home' },
                            { id: 'about', label: 'About' },
                            { id: 'skills', label: 'スキル' },
                            { id: 'services', label: '担当範囲' }, // 表示名だけ変えたい例
                            { id: 'projects', label: 'プロジェクト' },
                            { id: 'contact', label: 'お問い合わせ' },
                        ].map(({ id, label }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className={`cursor-pointer rounded-xl px-5 py-2 border-1 font-medium hover:text-primary hover:scale-102 hover:shadow-md transition-all duration-300 ease-out capitalize ${isScrolled ? 'shadow-lg' : ''}`}
                                    style={{
                                        color: 'var(--color-text-primary)',
                                        borderColor: 'var(--color-border)',
                                        backgroundColor: 'var(--color-card-bg)',
                                    }}
                                >
                                    {/* {item === 'services' ? '担当範囲' : item} */}
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle - Desktop */}
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1 cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 transition-transform duration-300 ${
                            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}
                        style={{ backgroundColor: 'var(--color-text-primary)' }}
                    />
                    <span
                        className={`w-6 h-0.5 transition-opacity duration-300 ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}
                        style={{ backgroundColor: 'var(--color-text-primary)' }}
                    />
                    <span
                        className={`w-6 h-0.5 transition-transform duration-300 ${
                            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`}
                        style={{ backgroundColor: 'var(--color-text-primary)' }}
                    />
                </button>
            </nav>
        </header>
    );
};

export default Header;
