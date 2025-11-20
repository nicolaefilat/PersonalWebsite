
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Cpu } from 'lucide-react';

import Container from './Container';

const About = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "PHP", "Go", "Rust", "SQL", "Shell", "Java", "Scala", "Julia"]
    },
    {
      title: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Vue", "React", "Tailwind CSS", "Quasar"]
    },
    {
      title: "Backend",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["ASP.NET", "Spring", "Node.js", "Django", "Flask", "Go", "Laravel", "MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "CI/CD & Tools",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Jenkins", "Docker", "Linux", "Ansible"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a dedicated Software Developer and Engineer with a strong academic background and diverse industry experience.
              My journey includes a Masters in Machine Learning from KTH Royal Institute of Technology and a Bachelor in Computer Science from TU Delft.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I have a passion for solving complex problems, whether it's through building efficient backend systems, crafting intuitive frontend interfaces, or exploring the depths of machine learning and cybersecurity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am always open to discussing new projects and ideas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-card-foreground">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
