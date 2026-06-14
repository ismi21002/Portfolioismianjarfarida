import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with product catalog, shopping cart, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and user authentication.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: '✅',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location search, forecasts, and beautiful UI.',
      tags: ['React', 'API', 'Tailwind CSS', 'Vite'],
      image: '⛅',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with dark mode support.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive'],
      image: '🎨',
      link: '#',
      github: 'https://github.com/ismi21002/Portfolioismianjarfarida',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A content management system for creating and sharing blog posts with rich text editing.',
      tags: ['Next.js', 'PostgreSQL', 'Markdown'],
      image: '📝',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time messaging application with user authentication and message history.',
      tags: ['React', 'WebSocket', 'Express', 'MongoDB'],
      image: '💬',
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-semibold"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
