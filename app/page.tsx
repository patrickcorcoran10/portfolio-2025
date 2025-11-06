import Jumbotron from "./components/jumbotron";
import ProjectCard from './components/ProjectCard';
import Introduction  from "./components/Introduction";
import Header from "./components/Header"
import SocialLinks from './components/SocialLinks'

const projects = [
  {
    project: "baseball game",
    techStack: ['javascript', 'node', 'express', 'mysql', 'react'],
    description: 'This is a baseball application that lets the user see some baseball action',
    repo: 'github.com'
  },
  {
    project: 'grocery list',
    techStack: ['javascript', 'node', 'express', 'mysql', 'react'],
    description: 'the grocery list must be respected',
    repo: 'this-repo.com'
  }
]

export default function Home() {
  return (
    <div className="flex w-full items-left justify-left bg-zinc-50 font-sans dark:bg-black flex-col">
      <Header/>
      <main className="flex min-h-screen w-full flex-col items-left justify-start bg-white dark:bg-black sm:items-start">
        <Jumbotron/>
        <SocialLinks/>
        <Introduction/>
        <div className="min-h-screen bg-black-100 flex flex-wrap 
        justify-center items-center p-4 flex-row">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project.project}
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
