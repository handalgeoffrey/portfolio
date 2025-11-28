// src/components/About.tsx
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

import handalImg from '@/assets/Handal.JPG';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-32 bg-background relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/5 blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold font-heading text-foreground mb-8">
              About <span className="text-primary">Me</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed">
              <p>
                I am a <span className="text-foreground font-semibold">Computer Science Engineering student</span> with a deep passion for Artificial Intelligence and Machine Learning. My journey in tech is driven by a desire to build intelligent systems that solve real-world problems.
              </p>
              <p>
                Beyond coding, I'm a professional photographer and currently serve as the <span className="text-foreground font-semibold">Vice President of 'Frames MBCET'</span>, our university's photography club. This dual passion for technology and art allows me to approach problems with a unique, creative perspective.
              </p>
              <p>
                I believe in the power of <span className="text-primary font-medium">clean code</span> and <span className="text-primary font-medium">compelling visuals</span> to create memorable digital experiences.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <div className="p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-white/5 flex-1 text-center">
                <h3 className="text-3xl font-bold text-primary font-heading">3+</h3>
                <p className="text-sm text-muted-foreground">Years Coding</p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-white/5 flex-1 text-center">
                <h3 className="text-3xl font-bold text-primary font-heading">15+</h3>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-white/5 flex-1 text-center">
                <h3 className="text-3xl font-bold text-primary font-heading">100+</h3>
                <p className="text-sm text-muted-foreground">Photoshoots</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            className="md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-lg"></div>
              <div className="absolute inset-0 border-2 border-primary/30 rounded-[2rem] -rotate-3"></div>
              <div className="absolute inset-0 bg-card rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 rotate-0 transition-transform hover:rotate-2 duration-500">
                <img
                  src={handalImg}
                  alt="R. Handal Geoffrey"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-heading font-bold text-xl">R. Handal Geoffrey</p>
                  <p className="text-sm text-white/80">Developer & Photographer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
