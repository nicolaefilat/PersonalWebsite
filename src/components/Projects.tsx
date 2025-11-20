import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from './Container';

import { projectGroups, ProjectGroup, Project } from '../data/projects';

const Projects = () => {

  return (
    <section id="projects" className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-20">
          {projectGroups.map((group: ProjectGroup, groupIndex: number) => (
            <div key={groupIndex}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4"
              >
                {group.project_group}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.list.map((project: Project, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/project/${project.id}`}
                      className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all group flex flex-col h-full"
                    >
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                              title="View Code"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="w-5 h-5 text-gray-900" />
                            </a>
                          )}
                          {project.video_url && (
                            <a
                              href={project.video_url}
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 bg-primary rounded-full hover:bg-primary/90 transition-colors"
                              title="Live Demo"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-5 h-5 text-white" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                          {project.date && (
                            <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{project.date}</span>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4 text-sm flex-1 line-clamp-3">
                          {project.short_description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag: string, tagIndex: number) => (
                            <span key={tagIndex} className="px-3 py-1 bg-secondary text-primary text-xs rounded-full font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
