import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState('home');

  const links = ['home', 'about', 'education', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = links.map(id => document.getElementById(id));
      sections.forEach((sec, idx) => {
        if (sec && scrollY >= sec.offsetTop - 120) setActive(links[idx]);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-gray-900 z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Madushanka Sandaruwan</h1>

        <ul className="hidden md:flex space-x-6">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`capitalize hover:text-pink-500 transition-colors ${
                  active === link ? 'text-pink-500' : ''
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-6 animate-fade-in">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="capitalize hover:text-pink-500 text-lg"
                onClick={() => setNavOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
