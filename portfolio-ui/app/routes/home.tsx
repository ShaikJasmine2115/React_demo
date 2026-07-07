import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio app" },
    { name: "description", content: "Custom web development" },
  ];
}

export default function Home() {
  return <>
  Portfolio 
  </>;
}
