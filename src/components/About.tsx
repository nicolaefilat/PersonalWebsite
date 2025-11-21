import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

import Container from './Container';
import siteData from '@config/site.yaml';
import skillsData from '@config/skills.yaml';
import personalData from '@config/personal.yaml';

interface SkillCategory {
  title: string;
  icon: keyof typeof LucideIcons;
  skills: string[];
}

interface PersonalInfo {
  bio: string;
}

interface SiteConfig {
  enableSkillHover?: boolean;
}

const getLucideIcon = (iconName: string) => {
  const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons] as React.ElementType;
  if (IconComponent) {
    return <IconComponent className="w-6 h-6" />;
  }
  return <LucideIcons.Code className="w-6 h-6" />;
};

const About = () => {
  const skillCategories: SkillCategory[] = skillsData as SkillCategory[];
  const personal: PersonalInfo = personalData as PersonalInfo;
  const siteConfig: SiteConfig = siteData as SiteConfig;

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
            <h3 className="text-2xl font-semibold mb-4 text-primary">Who am I?</h3>
            <div className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
              {personal.bio}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`bg-card p-6 rounded-xl border border-border transition-colors ${siteConfig.enableSkillHover ? 'hover:border-primary' : ''}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary">
                    {getLucideIcon(category.icon)}
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
