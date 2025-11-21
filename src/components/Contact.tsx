
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Container from './Container';
import personalData from '@config/personal.yaml';

interface PersonalInfo {
  name: string;
  email: string;
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    name: string;
    url: string;
  };
}

const Contact = () => {
  const personal: PersonalInfo = personalData as PersonalInfo;

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Contact me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground mb-12 text-center text-lg">
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-6">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
            >
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground text-lg">{personal.email}</p>
              </div>
            </a>

            <a
              href={personal.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
            >
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <FaGithub className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="font-medium text-foreground text-lg">@{personal.github.username}</p>
              </div>
            </a>

            <a
              href={personal.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
            >
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <FaLinkedin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium text-foreground text-lg">{personal.linkedin.name}</p>
              </div>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
