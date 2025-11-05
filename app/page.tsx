import Jumbotron from "./components/jumbotron";
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    name: "baseball game",
    techStack: ['javascript', 'node', 'express', 'mysql', 'react'],
    description: 'This is a baseball application that lets the user see some baseball action',
    repo: 'github.com'
  },
  {
    name: 'grocery list',
    techStack: ['javascript', 'node', 'express', 'mysql', 'react'],
    description: 'the grocery list must be respected',
    repo: 'this-repo.com'
  }
]

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Jumbotron/>
        <div className="min-h-screen bg-black-100 flex flex-wrap 
        justify-center items-center p-4">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            techStack={project.techStack}
            description={project.description}
            repo={project.repo}
          />
        ))}
        </div>
      </main>
    </div>
  );
}
