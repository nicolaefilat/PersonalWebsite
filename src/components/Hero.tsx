
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

import Container from './Container';

import personalData from '@config/personal.yaml';

interface PersonalInfo {
  name: string;
  role: string;
  heroDescription: string;
}

const Hero = () => {
  const personal: PersonalInfo = personalData as PersonalInfo;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-4">{personal.role}</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            {personal.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {personal.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/25"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full font-medium transition-all border border-border cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </Container>
    </section >
  );
};

export default Hero;
