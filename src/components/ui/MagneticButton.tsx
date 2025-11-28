// src/components/ui/MagneticButton.tsx
import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const MagneticButton = ({ children, className, href }: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const dx = useSpring(0, springConfig);
  const dy = useSpring(0, springConfig);
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    dx.set(x * 0.1);
    dy.set(y * 0.1);
    rotateX.set(-y * 0.1);
    rotateY.set(x * 0.1);
  };

  const handleMouseLeave = () => {
    dx.set(0);
    dy.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: dx,
        y: dy,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        boxShadow: "0 0 20px 5px rgba(0, 255, 255, 0.3)",
        scale: 1.1,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    >
      {children}
    </motion.a>
  );
};

export default MagneticButton;
