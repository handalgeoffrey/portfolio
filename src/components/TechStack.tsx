import { motion } from 'framer-motion';
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "Dart"] },
  { category: "Frameworks", items: ["React", "Next.js", "TensorFlow", "Flutter", "Tailwind"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Adobe Lightroom", "Premiere Pro"] },
];

const TechStack = () => {
  return (
    <motion.section
      id="tech"
      className="py-32 bg-background relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold font-heading text-center text-foreground mb-16">
          Tech <span className="text-primary">Stack</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-center text-muted-foreground border-b border-primary/20 pb-4">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    className="p-4 bg-secondary/20 border border-white/5 rounded-xl text-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
