import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - Portfolio app" },
    { name: "description", content: "Custom web development" },
  ];
}

export default function Home() {
  return(
    <section>
        HomePage
    </section>
  )}
