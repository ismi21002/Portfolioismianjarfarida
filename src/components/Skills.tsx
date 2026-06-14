export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      name: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'VS Code', 'GitHub', 'Figma'],
    },
    {
      name: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Teamwork', 'Project Management', 'Attention to Detail'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proficiency Section */}
        <div className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Proficiency
          </h3>
          
          <div className="space-y-6">
            {[
              { name: 'Web Development', level: 90 },
              { name: 'React & TypeScript', level: 85 },
              { name: 'UI/UX Design', level: 80 },
              { name: 'Database Management', level: 75 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 dark:text-white font-semibold">{skill.name}</span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}