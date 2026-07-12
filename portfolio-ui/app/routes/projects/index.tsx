import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Projects - Portfolio app" },
      { name: "description", content: "Custom web development" },
    ];
  }

const Projects = () => {
    return(
        <section>
            <h2 className="text-3xl font-bold mb-2 text-center">
                Projects Page
            </h2>
        </section>
        
    )
}

export default Projects;