import projectsData from './projects.yaml';

export interface Project {
    id: string;
    title: string;
    date: string;
    short_description: string;
    description: string;
    video_url?: string;
    github_url?: string;
    tags: string[];
    image: string;
}

export interface ProjectGroup {
    project_group: string;
    list: Project[];
}

export const projectGroups: ProjectGroup[] = projectsData as unknown as ProjectGroup[];

// Helper to get all projects as a flat list for routing
export const getAllProjects = (): Project[] => {
    return projectGroups.flatMap(group => group.list);
};
