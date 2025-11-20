import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Container from './Container';

import { getAllProjects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const projects = getAllProjects();

    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/#projects" className="text-primary hover:text-primary/80 flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground py-20">
            <Container>
                <Link to="/#projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-8">
                        <div className="flex flex-col gap-4 mb-4">
                            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
                        </div>
                    </div>


                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map((tag: string, index: number) => (
                            <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30">
                                {tag}
                            </span>
                        ))}
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                                <div className="text-muted-foreground leading-relaxed prose prose-invert max-w-none prose-a:text-primary prose-a:underline hover:prose-a:text-primary/80 prose-a:decoration-primary/50 hover:prose-a:decoration-primary">
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {project.description || ''}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-card rounded-xl p-6 border border-border">
                                <h2 className="text-xl font-bold mb-4">Links</h2>
                                <div className="space-y-4">
                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
                                        >
                                            <span className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground">
                                                <FaGithub className="w-5 h-5" /> GitHub Repo
                                            </span>
                                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                                        </a>
                                    )}
                                    {project.video_url && (
                                        <a
                                            href={project.video_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                                        >
                                            <span className="flex items-center gap-2 text-primary group-hover:text-primary/80">
                                                <ExternalLink className="w-5 h-5" /> Demo
                                            </span>
                                            <ExternalLink className="w-4 h-4 text-primary group-hover:text-primary/80" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default ProjectDetails;
