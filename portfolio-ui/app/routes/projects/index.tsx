import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Projects - Portfolio app" },
      { name: "description", content: "Custom web development" },
    ];
  }

export async function loader({request}: Route.LoaderArgs): Promise<any>{
    const res = await fetch("http://localhost:8000/projects");
    const data = await res.json();
    return {projects : data};
}

const Projects = ({loaderData}: Route.ComponentProps) => {
    const {projects} = loaderData;
    console.log(projects);
    return(
        <section>
            <h2 className="text-3xl font-bold mb-2 text-center">
                Projects Page
            </h2>
        </section>
        
    )
}

export default Projects;