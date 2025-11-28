import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Ecosnap',
    description: 'EcoSnap is a mobile application designed to promote responsible waste management. Users can use their device\'s camera to classify a piece of waste and receive clear, actionable instructions on how to segregate and dispose of it properly. The app also helps users find nearby disposal locations.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    tags: ['Dart', 'Python Flask'],
    github: 'https://github.com/handalgeoffrey/ecosnap',
  },
  {
    title: 'Stress Management',
    description: 'This project develops a real-time stress detection system for smart wearables that achieves 98.9% accuracy by analyzing 60-second windows of physiological data (specifically EDA and HRV) using a lightweight Random Forest classifier. By relying on statistical feature engineering rather than heavy deep learning, the model is computationally efficient enough to run directly on mobile devices or smartwatches.',
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=800&auto=format&fit=crop',
    tags: ['Python', 'TensorFlow', 'ML'],
    github: 'https://github.com/handalgeoffrey/stress-management',
  },
  {
    title: 'Lost and Found',
    description: 'A comprehensive platform for reporting and recovering lost items, leveraging image recognition to match found items with lost reports.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'CSS', 'Python', 'ML/AI', 'Flask'],
    github: 'https://github.com/handalgeoffrey/LAF',
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-32 bg-background relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold font-heading text-center text-foreground mb-16">
          Selected <span className="text-primary">Work</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 bg-card">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>

                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <Github size={18} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
