import { useState, useEffect, useRef } from 'react';
import GlassSurface from './GlassSurface'; // Assuming the component is saved here.

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('About'); // Default to 'About'
  const [activeLinkBounds, setActiveLinkBounds] = useState({ left: 0, width: 0, height: 0, top: 0 });
  const linkRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'projects' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  const updateBounds = () => {
    const linkElement = linkRefs.current[activeLink];
    if (linkElement) {
      // Use offsetLeft and offsetWidth for positioning relative to the parent container
      const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = linkElement;
      setActiveLinkBounds({ left: offsetLeft, width: offsetWidth, height: offsetHeight, top: offsetTop });
    }
  };

  useEffect(() => {
    // Initial update
    updateBounds();
    // Update on resize
    window.addEventListener('resize', updateBounds);
    // Update after a short delay to ensure fonts/layout are settled
    const timer = setTimeout(updateBounds, 100);

    return () => {
      window.removeEventListener('resize', updateBounds);
      clearTimeout(timer);
    };
  }, [activeLink]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center p-4">
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-2 py-2 flex space-x-2 shadow-2xl overflow-hidden">
        <GlassSurface
          className="absolute transition-all duration-300 ease-out z-0"
          width={activeLinkBounds.width}
          height={activeLinkBounds.height}
          borderRadius={50}
          mixBlendMode="normal"
          brightness={70}
          opacity={0.6}
          borderWidth={0.1}
          style={{
            left: activeLinkBounds.left,
            top: activeLinkBounds.top,
          }}
        />
        {navLinks.map((link) => (
          <button
            key={link.name}
            ref={(el) => (linkRefs.current[link.name] = el)}
            onClick={() => {
              setActiveLink(link.name);
              const element = document.getElementById(link.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`px-6 py-2 text-sm font-medium transition-colors relative z-10 rounded-full ${activeLink === link.name ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;