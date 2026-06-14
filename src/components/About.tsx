export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-white text-6xl">👨‍💻</div>
            </div>
          </div>

          {/* Right side - Bio */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a dedicated Information Science professional with a passion for web development and digital innovation. With expertise in modern web technologies, I create responsive and intuitive user experiences that solve real-world problems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My journey in tech has led me to develop a strong foundation in frontend and backend development, with a focus on clean code, performance optimization, and user-centered design principles.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📚 Education</h3>
                <p className="text-gray-600 dark:text-gray-400">Information Science (S.I)</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Interests</h3>
                <p className="text-gray-600 dark:text-gray-400">Web Development, UI/UX Design, Data Science, Cloud Technologies</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💼 Currently</h3>
                <p className="text-gray-600 dark:text-gray-400">Open to new opportunities and collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}