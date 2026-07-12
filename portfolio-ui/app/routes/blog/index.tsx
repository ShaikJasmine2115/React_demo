import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Blog - Portfolio app" },
      { name: "description", content: "Custom web development" },
    ];
  }

const Blog = () => {
    return(
        <section>
            <h2 className="text-3xl font-bold mb-2 text-center">
                Blog Page
            </h2>
        </section>
        
    )
}

export default Blog;