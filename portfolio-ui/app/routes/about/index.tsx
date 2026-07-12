import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "About - Portfolio app" },
      { name: "description", content: "Custom web development" },
    ];
  }

const About = () => {
    return(
        <section>
            <h2 className="text-3xl font-bold mb-2 text-center">
                    About Page
                </h2>
        </section>
    )
}
export default About;