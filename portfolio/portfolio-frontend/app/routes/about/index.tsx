import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "About - Portfolio app" },
      { name: "description", content: "Custom web development" },
    ];
  }

const About = () => {
    return(
      <div className='max-w-5xl mx-auto px-6 py-16 bg-gray-900'>
      {/* Intro */}
        <div className='flex flex-col md:flex-row md:items-start items-center gap-10 mb-12'>
          <img src='/images/profile.jpg' alt='profile' className='w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md'/>
          <div>
            <h1 className='text-3xl font-bold text-white mb-2'>
              Hey, I'm Jasmine
            </h1>
            <p className='text-gray-300 text-lg'>
              I'm a passionate web developer who loves building friendly digital experiences using React and Tailwind CSS. Building projects using React and developing expertise in Full stack as well.
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className='mb-12'>
          <h2 className='text-2xl font-semibold text-white mb-4'>My Mission</h2>
          <p className='text-gray-300 leading-relaxed'>
            To become a fullstack developer and build projects that are not only functional but also visually appealing and user-friendly.
          </p>
        </div>

        {/* Tech Stack */}
        <h2 className='text-2xl font-semibold text-white mb-4'>🚀 Tech I Use</h2>
        <ul className='flex flex-wrap gap-4 text-sm text-gray-300'>
          {[
            'React',
            'Tailwind CSS',
            'JavaScript',
            'TypeScript',
            'HTML',
            'CSS',
            'Git',
            'GitHub',
            'Vercel',
          ].map((tech) => (
            <li key={tech} className='bg-gray-700 px-3 py-1 rounded-md'>
              {tech}
            </li>
          ))}
        </ul>
    </div>
    )
}
export default About;