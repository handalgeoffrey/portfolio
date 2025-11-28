// src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-heading text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <a
                href="mailto:geoffreyrhandal@gmail.com"
                className="relative text-2xl md:text-4xl font-medium font-heading text-foreground hover:text-primary transition-colors duration-300 tracking-tight"
              >
                geoffreyrhandal@gmail.com
              </a>
            </div>

            <div className="flex justify-center gap-8 pt-8">
              <motion.a
                href="https://www.linkedin.com/in/r-handal-geoffrey-27a35721b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-secondary/30 rounded-full text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-white/5 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Linkedin size={32} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/handalgeoffrey"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-secondary/30 rounded-full text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-white/5 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Github size={32} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/r_handal_geoffrey/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-secondary/30 rounded-full text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-white/5 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Instagram size={32} />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Instagram</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 text-center border-t border-white/5 pt-8">
          <p className="text-muted-foreground">&copy; 2025 R. Handal Geoffrey. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
