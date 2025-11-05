'use strict'
import React from 'react'

interface ProjectCardProps {
    project: string;
    techStack: string[];
    description: string;
    repo: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    techStack,
    description,
    repo
}) => {
    return (
        <div className="relative bg-gray text-black-800 rounded-lg shadow-lg p-6 max-w-xs
        sm:max-w-md mx-auto transform hover:scale-105 transition-transform 
        duration-300 ease-in-out">
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden 
                border-4 border-white shadow-md mb-4">
                    {/* <Image
                        width={100}
                        height={100}
                        alt={need something unique here}
                        src=''
                        className=''
                    /> */}
                    image here
                </div>
                <h2 className="text-xl font-bold text-black-800 mb-1">
                    {project}
                </h2>
                <ul>
                    {techStack.map((tech:string, i:number) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
                <div>
                    {description}
                </div>
                <div>
                    {repo}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard