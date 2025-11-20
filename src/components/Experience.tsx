
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

import educationData from '../data/education.yaml';
import workData from '../data/work.yaml';

import Container from './Container';

interface Education {
  school: string;
  degree: string;
  period: string;
  desc: string;
}

interface WorkExperience {
  role: string;
  company: string;
  period: string;
  desc: string;
}

const Experience = () => {
  const education: Education[] = educationData as Education[];
  const work: WorkExperience[] = workData as WorkExperience[];

  return (
    <section id="experience" className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Work History</h3>
            </div>
            <div className="space-y-8 border-l-2 border-border pl-8 ml-4">
              {work.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  <h4 className="text-xl font-bold text-foreground">{job.role}</h4>
                  <h5 className="text-primary font-medium mb-2">{job.company}</h5>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{job.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{job.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-8 border-l-2 border-border pl-8 ml-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-purple-500 border-4 border-background" />
                  <h4 className="text-xl font-bold text-foreground">{edu.school}</h4>
                  <h5 className="text-purple-400 font-medium mb-2">{edu.degree}</h5>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;

