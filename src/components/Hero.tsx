// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Ballpit from "@/components/Ballpit.jsx";
import MagneticButton from '@/components/ui/MagneticButton';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <Ballpit
          count={60}
          gravity={0.5}
          friction={0.9}
          wallBounce={0.9}
          followCursor={false}
          colors={['#3b82f6', '#8b5cf6', '#ffffff']}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.h1
          className="text-7xl md:text-9xl font-bold font-heading text-foreground mb-6 flex justify-center flex-wrap gap-x-4 md:gap-x-6 tracking-tight"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {"I build things for the web.".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  variants={child}
                  key={letterIndex}
                  className="inline-block hover:text-primary transition-colors duration-300"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl font-medium text-muted-foreground mb-10 font-sans tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut"
          }}
        >
          AI Engineer <span className="text-primary">•</span> Photographer <span className="text-primary">•</span> Creative Developer
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <MagneticButton
            href="#projects"
            className="bg-primary text-primary-foreground font-bold py-4 px-8 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2"
          >
            View Work <ArrowRight size={20} />
          </MagneticButton>
          <MagneticButton
            href="#gallery"
            className="border-2 border-primary/20 text-foreground font-bold py-4 px-8 rounded-full hover:bg-primary/10 hover:border-primary transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            Photography <ArrowRight size={20} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;