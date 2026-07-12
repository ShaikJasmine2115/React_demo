import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Contact - Portfolio app" },
      { name: "description", content: "Custom web development" },
    ];
  }

const Contact = () => {
    return(
        <section>
            <h2 className="text-3xl font-bold mb-2 text-center">
                Contact Page
            </h2>
        </section>
        
    )
}

export default Contact;